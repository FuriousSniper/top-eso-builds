import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BuildType } from "../../types/common";
import arcanist1 from "../../builds/arcanist1";
import HeaderMenu from "../../components/HeaderMenu";
import BuildSkills from "../../components/BuildComponents/BuildSkills";
import BuildGear from "../../components/BuildComponents/BuildGear";
import BuildStats from "../../components/BuildComponents/BuildStats";
import BuildCp from "../../components/BuildComponents/BuildCp";
import BuildMisc from "../../components/BuildComponents/BuildMisc";
import * as _ from "lodash";
import { checkBuildExistence, checkCrossedExistence, getFromLS, initBuildCrossedArray, initCrossedItems, updateBuildCrossedArray } from "../../utils/utils";
import BuildDetails from "../../components/BuildComponents/BuildDetails";
import FooterMenu from "../../components/FooterMenu";
import sorc from "../../builds/sorc";
import './style.less'
import GenericDisplayField from "../../components/GenericDisplayField";
import BuildExplainSkills from "../../components/BuildComponents/BuildExplainSkills";
import TextDisplayField from "../../components/TextDisplayField";

const BuildPage = () => {
    const { buildNameParam } = useParams();
    const [build, setBuild] = useState({} as BuildType)
    const [buffedStats, setBuffedStats] = useState(true)
    const [crossBuildItems, setCrossBuildItems] = useState(true)
    const [crossedItemsArray, setCrosseditemsArray] = useState(Array<string>())
    const navigate = useNavigate();

    useEffect(() => {
        //TERRIBLE but can be fixed with server and API only. 
        let buildLocal;
        if (buildNameParam === "arcanist") {
            setBuild(arcanist1)
            buildLocal = arcanist1
        }
        else if (buildNameParam === "burstSorc") {
            setBuild(sorc)
            buildLocal = sorc
        }
        else {
            navigate("/")
        }


        if (!checkCrossedExistence()) {
            initCrossedItems()
        }

        if (_.isUndefined(buildLocal?.id)) {
            return
        }

        if (!checkBuildExistence(buildLocal.id)) {
            initBuildCrossedArray(buildLocal.id)
        }
        else {
            const allItems = JSON.parse(getFromLS("crossedObjects")!)
            setCrosseditemsArray(allItems[buildLocal.id])
        }

        document.title = `Build: ${buildLocal.name}`
    }, [buildNameParam, navigate])

    useEffect(() => {
        changeCrossedItemsStatus(crossBuildItems, crossedItemsArray)
    }, [crossBuildItems, crossedItemsArray])

    const toggleCrossedState = (id: string) => {
        if (!crossBuildItems) {
            return
        }

        const toggleItem = document.getElementById(id)
        const copyArray = [...crossedItemsArray]

        if (crossedItemsArray.includes(id)) {
            copyArray.splice(crossedItemsArray.indexOf(id), 1)
            setCrosseditemsArray(copyArray)
            updateBuildCrossedArray(copyArray, build.id)
            toggleItem?.classList.remove("itemCrossed")
        }
        else {
            copyArray.push(id)
            setCrosseditemsArray(copyArray)
            updateBuildCrossedArray(copyArray, build.id)
            toggleItem?.classList.add("itemCrossed")
        }
    }

    const changeCrossedItemsStatus = (addCross: boolean, crossedArray: Array<string>) => {
        if (_.isUndefined(crossedArray)) {
            return
        }

        for (let i = 0; i < crossedArray.length; ++i) {
            if (addCross) {
                document.getElementById(crossedArray[i])?.classList.add("itemCrossed")
            }
            else {
                document.getElementById(crossedArray[i])?.classList.remove("itemCrossed")
            }
        }
    }

    const toggleAllCrossed = () => {
        changeCrossedItemsStatus(!crossBuildItems, crossedItemsArray)
        setCrossBuildItems(!crossBuildItems)
    }

    return (
        <div className="content">
            <HeaderMenu />
            <div className="detailsWrapper">
                <TextDisplayField parentClassName="titleClass">
                    <>
                        <img src={build.buildIcon} alt="" className="textIcon"/>&nbsp;
                        <span>{build.name}</span>
                    </>
                    
                </TextDisplayField>
                <div className="buildDetails">
                    <div className="uiColumn">
                        <BuildGear gear={build.gear} toggleCrossFunction={toggleCrossedState} buildId={build.id} />
                    </div>
                    <div className="uiColumn">
                        <BuildSkills skills={build.skills} />
                        <BuildStats stats={build.stats} buffed={buffedStats} />
                        <BuildCp cp={build.cp} toggleCrossFunction={toggleCrossedState} buildId={build.id} />
                        <BuildMisc misc={build.misc} toggleCrossFunction={toggleCrossedState} buildId={build.id} />
                    </div>
                </div>
            </div>
            <div className="otherStuff">
                <div className="controls">
                    <div><input type="checkbox" name="buffed" id="buffed" onChange={() => setBuffedStats(!buffedStats)} checked={buffedStats} /><label htmlFor="buffed">Toggle Buffed</label></div>
                    <div><input type="checkbox" name="itemsChecked" id="itemsChecked" onChange={() => toggleAllCrossed()} checked={crossBuildItems} /><label htmlFor="itemsChecked">Toggle Crossed-out items</label></div>
                </div>
                <div className="additionalDetails">
                    <GenericDisplayField legendText={"General Info"}>
                        <div className="detailsContent" dangerouslySetInnerHTML={{ __html: build.generalInfo }}></div>
                    </GenericDisplayField>
                    <BuildExplainSkills skills={build.skills} />
                    <BuildDetails details={build.details} />
                    <GenericDisplayField legendText={"Last updated"}>
                        <div className="detailsContent">{build.lastUpdated}</div>
                    </GenericDisplayField>
                </div>
            </div>
            <FooterMenu />
        </div>
    )
}
export default BuildPage
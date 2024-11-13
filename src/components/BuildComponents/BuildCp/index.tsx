import { GenericDisplayType } from "../../../types/common"
import GenericDisplayField from "../../GenericDisplayField"
import SingleMiscItem from "../SingleMiscItem"
import './style.less'

interface IBuildCpProps {
    cp?: {
        redCp: Array<GenericDisplayType>,
        blueCp: Array<GenericDisplayType>,
        greenCp: Array<GenericDisplayType>
    }
    toggleCrossFunction: (id: string)=>void,
    buildId: string,
}
const BuildCp = (props: IBuildCpProps) => {
    return (
        <GenericDisplayField legendText="Champion points" legendIcon="/icons/buildPage/cpicon.png">
            <div className="cpSection">
                <div className="cpHeadingRow">
                    <img
                        src="/icons/buildPage/cpMag.png"
                        alt=""
                    />
                    <span>Warfare</span>
                </div>
                <div className="cpRow">
                    {
                        props.cp?.blueCp.map((star: GenericDisplayType, index: number) => {
                            if (props.cp) {
                                return (
                                    <SingleMiscItem misc={star} toggleCrossFunction={props.toggleCrossFunction} id={"cpBlue" + props.buildId+index} key={index}/>
                                )
                            }
                        })
                    }
                </div>
                <div className="separator"></div>
                <div className="cpHeadingRow">
                    <img
                        src="/icons/buildPage/cpHp.png"
                        alt=""
                    />
                    <span>Fitness</span>
                </div>
                <div className="cpRow">
                    {
                        props.cp?.redCp.map((star: GenericDisplayType, index: number) => {
                            if (props.cp) {
                                return (
                                    <SingleMiscItem misc={star} toggleCrossFunction={props.toggleCrossFunction} id={"cpRed" + props.buildId+index} key={index}/>
                                )
                            }
                        })
                    }
                </div>
                <div className="separator"></div>
                <div className="cpHeadingRow">
                    <img
                        src="/icons/buildPage/cpStam.png"
                        alt=""
                    />
                    <span>Craft</span>
                </div>
                <div className="cpRow">
                    {
                        props.cp?.greenCp.map((star: GenericDisplayType, index: number) => {
                            if (props.cp) {
                                return (
                                    <SingleMiscItem misc={star} toggleCrossFunction={props.toggleCrossFunction} id={"cpGreen" + props.buildId+index} key={index}/>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </GenericDisplayField >
    )
}
export default BuildCp
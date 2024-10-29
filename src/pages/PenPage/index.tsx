import { useEffect, useState } from "react"
import FooterMenu from "../../components/FooterMenu"
import GenericDisplayField from "../../components/GenericDisplayField"
import HeaderMenu from "../../components/HeaderMenu"
import './style.less'
import GenericModal from "../../components/Modals/GenericModal";
import { CharacterPenType } from "../../types/common"
import PenCalculatorCharacterObject from "../../components/CalculatorComponents/PenCalculatorCharacterObject"
import { boundsMinMax } from "../../utils/utils"
import GenericInput from "../../components/CalculatorComponents/GenericInput"

const PenPage = () => {
    const [requiredPen, setRequiredPen] = useState(18200)
    const [supportPen, setSupportPen] = useState(requiredPen)
    const [majorBreach, setMajorBreach] = useState(true)
    const [minorBreach, setMinorBreach] = useState(true)
    const [crusher, setCrusher] = useState(true)
    const [crimson, setCrimson] = useState(false)
    const [alkosh, setAlkosh] = useState(false)
    const [tremor, setTremor] = useState(false)
    const [charactersArray, setCharactersArray] = useState(Array<CharacterPenType>())

    useEffect(()=>{
        document.title=`Top ESO Builds: Pen calculator`
    })

    useEffect(() => {
        let supportPenSum = 0
        if (majorBreach) {
            supportPenSum += 5948;
        }
        if (minorBreach) {
            supportPenSum += 2974;
        }
        if (crusher) {
            supportPenSum += 2108;
        }

        if (alkosh) {
            supportPenSum += 6000;
        }
        if (crimson) {
            supportPenSum += 3541;
        }
        if (tremor) {
            supportPenSum += 2400;
        }

        setSupportPen(supportPenSum)
        updateSupportPenForChars(supportPenSum)
    }, [requiredPen, crimson, alkosh, majorBreach, minorBreach, crusher, tremor])

    useEffect(() => {
        if (crimson && alkosh && tremor) {
            alert("crimson, alkosh, tremor. are you sure about that?")
        }
    }, [crimson, alkosh, tremor])

    const createCharacter = (className: string, name: string) => {
        const charObject: CharacterPenType = {
            class: className,
            name: name,
            necroPassive: false,
            nbPassive: false,
            arcanistPassive: 0,
            velothi: true,
            piercing: false,
            weaponMace: 0,
            weaponSharpened: 0,
            lightArmor: 1,
            forceOfNature: 0,
            woodElfRace: false,
            loverMundus: false,
            otherSetLines: 0,
            otherSources: 0,
            penSelf: 0,
            penSupport: supportPen
        }

        if (charObject.class === "Nightblade") {
            charObject.nbPassive = true
        }
        if (charObject.class === "Arcanist") {
            charObject.arcanistPassive = 2
        }
        if (charObject.class === "Necromancer") {
            charObject.necroPassive = true
        }

        setCharactersArray([
            ...charactersArray, charObject
        ])
    }

    const updateSupportPenForChars = (newPen: number) => {
        const copyChars = [...charactersArray]
        for (let i = 0; i < copyChars.length; i++) {
            copyChars[i].penSupport = newPen
        }
        setCharactersArray(copyChars)
    }
    return (
        <div className="content">
            <HeaderMenu />
            <div className="main">
                <div className="controlItems">
                    <div><label htmlFor="penCap">Set pen target</label><input type="number" name="penCap" id="penCap" value={requiredPen} onChange={event => setRequiredPen(boundsMinMax(Number(event.target.value),0,102000))} min={0} max={102000}/></div>
                    <GenericModal buttonName="Add DD Character" className="addCharacterButton" createChar={createCharacter} />
                </div>
                <div className="columnWrapper">
                    <div className="uiColumn">
                        <GenericDisplayField legendText={"Support"}>
                            <>
                                <div className="penCalcItemRow">
                                    <span className="secondaryText">Support provides: </span><span>{supportPen}</span>
                                </div>
                                <div className="penCalcItemRow">
                                    <span className="secondaryText">Others need to reach: </span><span>{requiredPen - supportPen}</span>
                                </div>
                                <div className="separator moreSeparation"></div>
                                <GenericInput type={"checkbox"} name={"Major Breach"} checked={majorBreach} id={"majorBreach"} onChange={() => setMajorBreach(!majorBreach)} title={"Tank debuff: 5948"}/>
                                <GenericInput type={"checkbox"} name={"Minor Breach"} checked={minorBreach} id={"minorBreach"} onChange={() => setMinorBreach(!minorBreach)} title={"Tank debuff: 2974"}/>
                                <GenericInput type={"checkbox"} name={"Crusher"} checked={crusher} id={"crusher"} onChange={() => setCrusher(!crusher)} title={"Tank debuff: 2108 (infused)"}/>
                                <GenericInput type={"checkbox"} name={"Alkosh"} checked={alkosh} id={"alkosh"} onChange={() => setAlkosh(!alkosh)} title={"Support set: 6000"}/>
                                <GenericInput type={"checkbox"} name={"Crimson"} checked={crimson} id={"crimson"} onChange={() => setCrimson(!crimson)} title={"Tank set: 3541"}/>
                                <GenericInput type={"checkbox"} name={"Tremorscale"} checked={tremor} id={"tremor"} onChange={() => setTremor(!tremor)} title={"Tank set: 2400"}/>
                            </>
                        </GenericDisplayField>
                    </div>
                    <div className="uiColumn">
                        <GenericDisplayField legendText={"Characters"}>
                            <>
                                {charactersArray.length===0&&
                                    <p className="noCharacters">No characters added!<br/>Use the button above in order to add a character and calculate penetration.</p>
                                }
                                {charactersArray.map((char: CharacterPenType, key: number) => {
                                    return <PenCalculatorCharacterObject char={char} supportPen={supportPen} requiredPen={requiredPen} key={key} />
                                })}
                            </>
                        </GenericDisplayField>
                    </div>
                </div>

            </div>
            <FooterMenu />
        </div>
    )
}
export default PenPage

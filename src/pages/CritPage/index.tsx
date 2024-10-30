import { useEffect, useState } from "react"
import FooterMenu from "../../components/FooterMenu"
import GenericDisplayField from "../../components/GenericDisplayField"
import HeaderMenu from "../../components/HeaderMenu"
import './style.less'
import GenericModal from "../../components/Modals/GenericModal";
import { CharacterCritType } from "../../types/common"
import { boundsMinMax } from "../../utils/utils"
import GenericInput from "../../components/CalculatorComponents/GenericInput"
import CritCalculatorCharacterObject from "../../components/CalculatorComponents/CritCalculatorCharacterObject"

const CritPage = () => {
    const [requiredCrit, setRequiredCrit] = useState(125)
    const [supportCrit, setSupportCrit] = useState(requiredCrit)
    const [majorForce, setMajorForce] = useState(true)
    const [majorBrittle, setMajorBrittle] = useState(false)
    const [minorBrittle, setMinorBrittle] = useState(true)
    const [lucent, setLucent] = useState(true)
    const [ec, setEc] = useState(0)



    const [charactersArray, setCharactersArray] = useState(Array<CharacterCritType>())
    const baseCritDmg = 50
    useEffect(()=>{
        document.title=`Top ESO Builds: Crit dmg calculator`
    })

    useEffect(() => {
        let supportCritSum = 0
        if (majorForce) {
            supportCritSum += 20;
        }
        if (majorBrittle) {
            supportCritSum += 20;
        }
        if (minorBrittle) {
            supportCritSum += 10;
        }
        if (lucent) {
            supportCritSum += 11;
        }
        supportCritSum += ec * 5

        setSupportCrit(supportCritSum)
        updateSupportCritForChars(supportCritSum)
    }, [ec, lucent, majorBrittle, majorForce, minorBrittle])

    const createCharacter = (className: string, name: string) => {
        const charObject: CharacterCritType = {
            class: className,
            name: name,
            critSelf: 0,
            critBase: baseCritDmg,
            critSupport: 0,
            nbPassive: false,
            templarPassive: false,
            wardenPassive: 0,
            mediumArmor: 6,
            weaponAxe: 0,
            harpooner: false,
            backstabber: false,
            fFinesse: false,
            khajiitRace: false,
            orderWrath: false,
            minorForce: true,
            shadowMundus: false,
            otherSources: 0
        }

        if (charObject.class === "Nightblade") {
            charObject.nbPassive = true
        }
        if (charObject.class === "Templar") {
            charObject.templarPassive = true
        }
        if (charObject.class === "Warden") {
            charObject.wardenPassive = 3
        }

        setCharactersArray([
            ...charactersArray, charObject
        ])
    }

    const updateSupportCritForChars = (newCrit: number) => {
        const copyChars = [...charactersArray]
        for (let i = 0; i < copyChars.length; i++) {
            copyChars[i].critSupport = newCrit
        }
        setCharactersArray(copyChars)
    }

    return (
        <div className="content">
            <HeaderMenu />
            <div className="main">
                <div className="controlItems">
                    <div><label htmlFor="critCap">Set crit target</label><input type="number" name="critCap" id="critCap" value={requiredCrit} onChange={event => setRequiredCrit(boundsMinMax(Number(event.target.value),0,125))} min={0} max={125}/></div>
                    <GenericModal buttonName="Add DD Character" className="addCharacterButton" createChar={createCharacter} />
                </div>
                <div className="columnWrapper">
                    <div className="uiColumn">
                        <GenericDisplayField legendText={"Support"}>
                            <>
                                <div className="critCalcItemRow">
                                    <span className="secondaryText">Support provides: </span><span>{supportCrit}%</span>
                                </div>
                                <div className="critCalcItemRow">
                                    <span className="secondaryText">Others need to reach: </span><span>{requiredCrit - supportCrit-baseCritDmg}%</span>
                                </div>
                                <div className="separator moreSeparation"></div>
                                <GenericInput type={"checkbox"} name={"Major Force"} checked={majorForce} id={"majorForce"} onChange={() => setMajorForce(!majorForce)} title={"Increases your Crit Damage by 20% (Horn)"}/>
                                <GenericInput type={"checkbox"} name={"Major Brittle"} checked={majorBrittle} id={"majorBrittle"} onChange={() => setMajorBrittle(!majorBrittle)} title={"Increases Crit Damage Taken by 20% (Nunatak, very rarely used)"}/>
                                <GenericInput type={"checkbox"} name={"Minor Brittle"} checked={minorBrittle} id={"minorBrittle"} onChange={() => setMinorBrittle(!minorBrittle)} title={"Increases Crit Damage Taken by 10% (Tank debuff or warden DD)"}/>
                                <GenericInput type={"checkbox"} name={"Lucent Echoes set"} checked={lucent} id={"lucent"} onChange={() => setLucent(!lucent)} title={"Increases your Crit Damage by 11% (Tank set)"}/>
                                <GenericInput type={"number"} name={"Elemental Catalyst set"} value={ec} id={"ec"} onChange={(event) => setEc(boundsMinMax(Number(event.target.value), 0, 3))} min={0} max={3} title={"Whenever you deal Flame, Shock, or Frost Damage, you apply a stack of Flame, Shock, or Frost Weakness to the enemy for 3 seconds. Each stack of an Elemental Weakness increases their Critical Damage taken by 5%. An enemy can only have one stack of each Elemental Weakness at a time."}/>
                            </>
                        </GenericDisplayField>
                    </div>
                    <div className="uiColumn">
                        <GenericDisplayField legendText={"Characters"}>
                            <>
                                {charactersArray.length===0&&
                                    <p className="noCharacters">No characters added!<br/>Use the button above in order to add a character and calculate crit damage.</p>
                                }
                                {charactersArray.map((char: CharacterCritType, key: number) => {
                                    return <CritCalculatorCharacterObject char={char} supportCrit={supportCrit} requiredCrit={requiredCrit} key={key} />
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
export default CritPage

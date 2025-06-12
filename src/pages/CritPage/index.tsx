import { useEffect, useState } from "react"
import FooterMenu from "../../components/FooterMenu"
import GenericDisplayField from "../../components/GenericDisplayField"
import HeaderMenu from "../../components/HeaderMenu"
import GenericModal from "../../components/Modals/GenericModal";
import { CharacterCritType } from "../../types/common"
import { boundsMinMax,  encodeToUrl, getCritCharsFromUrl, getRandomArbitrary, parseBoolToString } from "../../utils/utils"
import GenericInput from "../../components/CalculatorComponents/GenericInput"
import CritCalculatorCharacterObject from "../../components/CalculatorComponents/CritCalculatorCharacterObject"
import { useSearchParams } from "react-router-dom"
import CopyButton from "../../components/CopyButton";
import './style.less'
import '../calculatorStyles.less'

const CritPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [requiredCrit, setRequiredCrit] = useState(Number(searchParams.get("target")) ? boundsMinMax(Number(searchParams.get("target")), 0, 125) : 125)
    const [supportCrit, setSupportCrit] = useState(requiredCrit)
    const [majorForce, setMajorForce] = useState(searchParams.get("majorForce") ? parseBoolToString(searchParams.get("majorForce")) : true)
    const [majorBrittle, setMajorBrittle] = useState(searchParams.get("majorBrittle") ? parseBoolToString(searchParams.get("majorBrittle")) : false)
    const [minorBrittle, setMinorBrittle] = useState(searchParams.get("minorBrittle") ? parseBoolToString(searchParams.get("minorBrittle")) : true)
    const [lucent, setLucent] = useState(searchParams.get("lucent") ? parseBoolToString(searchParams.get("lucent")) : false)
    const [ec, setEc] = useState(Number(searchParams.get("ec")) ? boundsMinMax(Number(searchParams.get("ec")), 0, 3) : 0)
    const [charactersArray, setCharactersArray] = useState(searchParams.get("chars") ? getCritCharsFromUrl(searchParams.get("chars")) :Array<CharacterCritType>())
    const baseCritDmg = 50

    useEffect(() => {
        document.title = `Top ESO Builds: Crit dmg calculator`
    })

    useEffect(() => {
        searchParams.set("chars", encodeToUrl(charactersArray))
        setSearchParams(searchParams)
    }, [charactersArray])

    const updateChar = (char: CharacterCritType) => {
        const copy = [...charactersArray]
        const index = copy.findIndex((arg: CharacterCritType) => {
            return arg.id === char.id
        })
        copy[index] = char

        setCharactersArray(copy)
    }

    useEffect(() => {
        let supportCritSum = 0
        searchParams.set("target", String(requiredCrit))

        searchParams.set("majorForce", String(majorForce))
        if (majorForce) {
            supportCritSum += 20;
        }

        searchParams.set("majorBrittle", String(majorBrittle))
        if (majorBrittle) {
            supportCritSum += 20;
        }

        searchParams.set("minorBrittle", String(minorBrittle))
        if (minorBrittle) {
            supportCritSum += 10;
        }

        searchParams.set("lucent", String(lucent))
        if (lucent) {
            supportCritSum += 11;
        }

        searchParams.set("ec", String(ec))
        supportCritSum += ec * 5

        setSupportCrit(supportCritSum)
        updateSupportCritForChars(supportCritSum)

        setSearchParams(searchParams)
    }, [ec, lucent, majorBrittle, majorForce, minorBrittle, requiredCrit])

    const createCharacter = (className: string, name: string) => {
        const charObject: CharacterCritType = {
            class: className,
            id: className + getRandomArbitrary(0, 10000),
            name: name,
            critSelf: 0,
            arcanistPassive: false,
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
            otherSources: 0,

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
        if (charObject.class === "Arcanist") {
            charObject.arcanistPassive = true
        }

        setCharactersArray([
            ...charactersArray, charObject
        ])
    }

    const deleteChar = (id: string) => {
        const arrayCopy = [...charactersArray]
        const index = arrayCopy.findIndex((character: CharacterCritType) => {
            return character.id === id
        })
        arrayCopy.splice(index, 1)
        setCharactersArray(arrayCopy)
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
                <div className="titleBanner">
                    <h2>Critical damage calculator (U46)</h2>
                    <div className="controlItems">
                        <CopyButton />
                        <div><label htmlFor="critCap">Set crit target</label><input type="number" name="critCap" id="critCap" value={requiredCrit} onChange={event => setRequiredCrit(boundsMinMax(Number(event.target.value), 0, 125))} min={0} max={125} /></div>
                        <GenericModal buttonName="Add DD Character" className="addCharacterButton" createChar={createCharacter} />
                    </div>
                </div>
                <div className="columnWrapper">
                    <div className="uiColumn">
                        <GenericDisplayField legendText={"Support"}>
                            <>
                                <div className="calcItemRow">
                                    <span className="secondaryText">Support provides: </span><span>{supportCrit}%</span>
                                </div>
                                <div className="calcItemRow">
                                    <span className="secondaryText">Undercrit: </span><span>{requiredCrit - supportCrit - baseCritDmg}%</span>
                                </div>
                                <div className="separator moreSeparation"></div>
                                <GenericInput type={"checkbox"} name={"Major Force"} checked={majorForce} id={"majorForce"} onChange={() => setMajorForce(!majorForce)} title={"Increases your Crit Damage by 20% (Horn)"} />
                                <GenericInput type={"checkbox"} name={"Major Brittle"} checked={majorBrittle} id={"majorBrittle"} onChange={() => setMajorBrittle(!majorBrittle)} title={"Increases Crit Damage Taken by 20% (Nunatak, very rarely used)"} />
                                <GenericInput type={"checkbox"} name={"Minor Brittle"} checked={minorBrittle} id={"minorBrittle"} onChange={() => setMinorBrittle(!minorBrittle)} title={"Increases Crit Damage Taken by 10% (Tank debuff or warden DD)"} />
                                <GenericInput type={"checkbox"} name={"Lucent Echoes set"} checked={lucent} id={"lucent"} onChange={() => setLucent(!lucent)} title={"Increases your Crit Damage by 11% (Tank set)"} />
                                <GenericInput type={"number"} name={"Elemental Catalyst set"} value={ec} id={"ec"} onChange={(event) => setEc(boundsMinMax(Number(event.target.value), 0, 3))} min={0} max={3} title={"Whenever you deal Flame, Shock, or Frost Damage, you apply a stack of Flame, Shock, or Frost Weakness to the enemy for 3 seconds. Each stack of an Elemental Weakness increases their Critical Damage taken by 5%. An enemy can only have one stack of each Elemental Weakness at a time."} />
                            </>
                        </GenericDisplayField>
                    </div>
                    <div className={`${charactersArray.length > 1 ? "charUiColumn" : ""} uiColumn`}>
                        <GenericDisplayField legendText={"Characters"} childrenClassName={`${charactersArray.length > 1 ? "charactersPanel" : ""}`}>
                            <>
                                {charactersArray.length === 0 &&
                                    <p className="noCharacters">No characters added!<br />Use the button above in order to add a character and calculate crit damage.</p>
                                }
                                {charactersArray.map((char: CharacterCritType, key: number) => {
                                    return <CritCalculatorCharacterObject char={char} supportCrit={supportCrit} requiredCrit={requiredCrit} key={key} deleteFunction={() => deleteChar(char.id)} updateFunction={updateChar}/>
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

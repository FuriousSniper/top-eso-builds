import { useEffect, useRef, useState } from "react"
import FooterMenu from "../../components/FooterMenu"
import GenericDisplayField from "../../components/GenericDisplayField"
import HeaderMenu from "../../components/HeaderMenu"
import GenericModal from "../../components/Modals/GenericModal";
import { CharacterCritType } from "../../types/common"
import { boundsMinMax, copyLink, getRandomArbitrary, parseBoolToString } from "../../utils/utils"
import GenericInput from "../../components/CalculatorComponents/GenericInput"
import CritCalculatorCharacterObject from "../../components/CalculatorComponents/CritCalculatorCharacterObject"
import { useSearchParams } from "react-router-dom"
import './style.less'
import '../calculatorStyles.less'
import MetaTags from "../../components/MetaTags";

const CritPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [requiredCrit, setRequiredCrit] = useState(Number(searchParams.get("target")) ? boundsMinMax(Number(searchParams.get("target")), 0, 125) : 125)
    const [supportCrit, setSupportCrit] = useState(requiredCrit)
    const [majorForce, setMajorForce] = useState(searchParams.get("majorForce") ? parseBoolToString(searchParams.get("majorForce")) : true)
    const [majorBrittle, setMajorBrittle] = useState(searchParams.get("majorBrittle") ? parseBoolToString(searchParams.get("majorBrittle")) : false)
    const [minorBrittle, setMinorBrittle] = useState(searchParams.get("minorBrittle") ? parseBoolToString(searchParams.get("minorBrittle")) : true)
    const [lucent, setLucent] = useState(searchParams.get("lucent") ? parseBoolToString(searchParams.get("lucent")) : true)
    const [ec, setEc] = useState(Number(searchParams.get("ec")) ? boundsMinMax(Number(searchParams.get("ec")), 0, 3) : 0)
    const copyButtonRef = useRef<HTMLButtonElement>(null)
    const copyButtonText = "Copy values (support only)"
    const [charactersArray, setCharactersArray] = useState(Array<CharacterCritType>())
    const baseCritDmg = 50

    useEffect(() => {
        let supportCritSum = 0
        const newQueryParameters: URLSearchParams = new URLSearchParams();
        newQueryParameters.set("target", String(requiredCrit))

        newQueryParameters.set("majorForce", String(majorForce))
        if (majorForce) {
            supportCritSum += 20;
        }

        newQueryParameters.set("majorBrittle", String(majorBrittle))
        if (majorBrittle) {
            supportCritSum += 20;
        }

        newQueryParameters.set("minorBrittle", String(minorBrittle))
        if (minorBrittle) {
            supportCritSum += 10;
        }

        newQueryParameters.set("lucent", String(lucent))
        if (lucent) {
            supportCritSum += 11;
        }

        newQueryParameters.set("ec", String(ec))
        supportCritSum += ec * 5

        setSupportCrit(supportCritSum)
        updateSupportCritForChars(supportCritSum)

        setSearchParams(newQueryParameters)
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

    const copyLinkButtonAction = () => {
        copyLink()

        if (!copyButtonRef.current) {
            return
        }
        copyButtonRef.current!.innerText = "Link copied!"
        copyButtonRef.current!.disabled = true
        setTimeout(() => {
            copyButtonRef.current!.innerText = copyButtonText
            copyButtonRef.current!.disabled = false
        }, 2000)
    }

    return (
        <>
            <MetaTags title={`Crit damage calculator`} description={"Calculate crit damage for yourself and your team with ease!"} name={"Crit damage calculator"} />
            <div className="content">
                <HeaderMenu />
                <div className="main">
                    <div className="titleBanner">
                        <h2>Critical damage calculator</h2>
                        <div className="controlItems">
                            <button onClick={copyLinkButtonAction} ref={copyButtonRef}>{copyButtonText}</button>
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
                                        <span className="secondaryText">Others need to reach: </span><span>{requiredCrit - supportCrit - baseCritDmg}%</span>
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
                                        return <CritCalculatorCharacterObject char={char} supportCrit={supportCrit} requiredCrit={requiredCrit} key={key} deleteFunction={() => deleteChar(char.id)} />
                                    })}
                                </>
                            </GenericDisplayField>
                        </div>
                    </div>

                </div>
                <FooterMenu />
            </div>
        </>
    )
}
export default CritPage

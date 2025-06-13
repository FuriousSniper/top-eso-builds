import { useEffect, useState } from "react"
import FooterMenu from "../../components/FooterMenu"
import GenericDisplayField from "../../components/GenericDisplayField"
import HeaderMenu from "../../components/HeaderMenu"
import GenericModal from "../../components/Modals/GenericModal";
import { CharacterPenType } from "../../types/common"
import PenCalculatorCharacterObject from "../../components/CalculatorComponents/PenCalculatorCharacterObject"
import { boundsMinMax, encodeToUrl, getPenCharsFromUrl, getRandomArbitrary, parseBoolToString } from "../../utils/utils"
import GenericInput from "../../components/CalculatorComponents/GenericInput"
import { useSearchParams } from "react-router-dom"
import CopyButton from "../../components/CopyButton";
import './style.less'
import '../calculatorStyles.less'
import useTitle from "../../hooks/useTitle";

const PenPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [requiredPen, setRequiredPen] = useState(Number(searchParams.get("target")) ? boundsMinMax(Number(searchParams.get("target")), 0, 102000) : 18200)
    const [supportPen, setSupportPen] = useState(requiredPen)
    const [majorBreach, setMajorBreach] = useState((searchParams.get("majorBreach") ? parseBoolToString(searchParams.get("majorBreach")) : true))
    const [minorBreach, setMinorBreach] = useState((searchParams.get("minorBreach") ? parseBoolToString(searchParams.get("minorBreach")) : true))
    const [crusher, setCrusher] = useState((searchParams.get("crusher") ? parseBoolToString(searchParams.get("crusher")) : true))
    const [crimson, setCrimson] = useState((searchParams.get("crimson") ? parseBoolToString(searchParams.get("crimson")) : false))
    const [alkosh, setAlkosh] = useState((searchParams.get("alkosh") ? parseBoolToString(searchParams.get("alkosh")) : false))
    const [tremor, setTremor] = useState((searchParams.get("tremor") ? parseBoolToString(searchParams.get("tremor")) : false))
    const [runic, setRunic] = useState((searchParams.get("runic") ? parseBoolToString(searchParams.get("runic")) : false))
    const [crystal, setCrystal] = useState((searchParams.get("crystal") ? parseBoolToString(searchParams.get("crystal")) : false))
    const [charactersArray, setCharactersArray] = useState(searchParams.get("chars") ? getPenCharsFromUrl(searchParams.get("chars")) : Array<CharacterPenType>())
    useTitle(`Top ESO Builds: Pen calculator`)

    useEffect(() => {
        let supportPenSum = 0
        searchParams.set("target", String(requiredPen))

        searchParams.set("majorBreach", String(majorBreach))
        if (majorBreach) {
            supportPenSum += 5948;
        }

        searchParams.set("minorBreach", String(minorBreach))
        if (minorBreach) {
            supportPenSum += 2974;
        }

        searchParams.set("crusher", String(crusher))
        if (crusher) {
            supportPenSum += 2108;
        }

        searchParams.set("alkosh", String(alkosh))
        if (alkosh) {
            supportPenSum += 6000;
        }

        searchParams.set("crimson", String(crimson))
        if (crimson) {
            supportPenSum += 3541;
        }

        searchParams.set("tremor", String(tremor))
        if (tremor) {
            supportPenSum += 2400;
        }

        searchParams.set("runic", String(runic))
        if (runic) {
            supportPenSum += 2200;
        }

        searchParams.set("crystal", String(crystal))
        if (crystal) {
            supportPenSum += 1000;
        }

        setSupportPen(supportPenSum)
        updateSupportPenForChars(supportPenSum)
        setSearchParams(searchParams)
    }, [requiredPen, crimson, alkosh, majorBreach, minorBreach, crusher, tremor,runic, crystal])

    useEffect(() => {
        if (crimson && alkosh && tremor) {
            alert("crimson, alkosh, tremor. are you sure about that? bruh")
        }
    }, [crimson, alkosh, tremor])

    useEffect(() => {
        searchParams.set("chars", encodeToUrl(charactersArray))
        setSearchParams(searchParams)
    }, [charactersArray])

    const updateChar = (char: CharacterPenType) => {
        const copy = [...charactersArray]
        const index = copy.findIndex((arg: CharacterPenType) => {
            return arg.id === char.id
        })
        copy[index] = char

        setCharactersArray(copy)
    }

    const createCharacter = (className: string, name: string) => {
        const charObject: CharacterPenType = {
            class: className,
            id: className + getRandomArbitrary(0, 10000),
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

    const deleteChar = (id: string) => {
        const arrayCopy = [...charactersArray]
        const index = arrayCopy.findIndex((character: CharacterPenType) => {
            return character.id === id
        })
        arrayCopy.splice(index, 1)
        setCharactersArray(arrayCopy)
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
                <div className="titleBanner">
                    <h2>Penetration calculator (U46)</h2>
                    <div className="controlItems">
                        <CopyButton />
                        <div><label htmlFor="penCap">Set pen target</label><input type="number" name="penCap" id="penCap" value={requiredPen} onChange={event => setRequiredPen(boundsMinMax(Number(event.target.value), 0, 102000))} min={0} max={102000} /></div>
                        <GenericModal buttonName="Add DD Character" className="addCharacterButton" createChar={createCharacter} />
                    </div>
                </div>
                <div className="columnWrapper">
                    <div className="uiColumn">
                        <GenericDisplayField legendText={"Support"}>
                            <>
                                <div className="calcItemRow">
                                    <span className="secondaryText">Support provides: </span><span>{supportPen}</span>
                                </div>
                                <div className="calcItemRow">
                                    <span className="secondaryText">Underpenetration: </span><span>{requiredPen - supportPen}</span>
                                </div>
                                <div className="separator moreSeparation"></div>
                                <GenericInput type={"checkbox"} name={"Major Breach"} checked={majorBreach} id={"majorBreach"} onChange={() => setMajorBreach(!majorBreach)} title={"Tank debuff: 5948"} />
                                <GenericInput type={"checkbox"} name={"Minor Breach"} checked={minorBreach} id={"minorBreach"} onChange={() => setMinorBreach(!minorBreach)} title={"Tank debuff: 2974"} />
                                <GenericInput type={"checkbox"} name={"Crusher"} checked={crusher} id={"crusher"} onChange={() => setCrusher(!crusher)} title={"Tank debuff: 2108 (infused)"} />
                                <GenericInput type={"checkbox"} name={"Alkosh"} checked={alkosh} id={"alkosh"} onChange={() => setAlkosh(!alkosh)} title={"Support set: 6000"} />
                                <GenericInput type={"checkbox"} name={"Crimson"} checked={crimson} id={"crimson"} onChange={() => setCrimson(!crimson)} title={"Tank set: 3541"} />
                                <GenericInput type={"checkbox"} name={"Tremorscale"} checked={tremor} id={"tremor"} onChange={() => setTremor(!tremor)} title={"Tank set: 2400"} />
                                <GenericInput type={"checkbox"} name={"Runic sunder"} checked={runic} id={"runic"} onChange={() => setRunic(!runic)} title={"Arcanist tank debuff: 2200"} />
                                <GenericInput type={"checkbox"} name={"Crystal weapon"} checked={crystal} id={"crystal"} onChange={() => setCrystal(!crystal)} title={"Sorcerer debuff: 1000"} />
                            </>
                        </GenericDisplayField>
                    </div>
                    <div className={`${charactersArray.length > 1 ? "charUiColumn" : ""} uiColumn`}>
                        <GenericDisplayField legendText={"Characters"} childrenClassName={`${charactersArray.length > 1 ? "charactersPanel" : ""}`}>
                            <>
                                {charactersArray.length === 0 &&
                                    <p className="noCharacters">No characters added!<br />Use the button above in order to add a character and calculate penetration.</p>
                                }
                                {charactersArray.map((char: CharacterPenType, key: number) => {
                                    return <PenCalculatorCharacterObject char={char} supportPen={supportPen} requiredPen={requiredPen} key={key} deleteFunction={() => deleteChar(char.id)} updateFunction={updateChar} />
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

import { useEffect, useState } from "react"
import FooterMenu from "../../components/FooterMenu"
import GenericDisplayField from "../../components/GenericDisplayField"
import HeaderMenu from "../../components/HeaderMenu"
import './style.less'
import GenericModal from "../../components/Modals/GenericModal";
import { CharacterPenType } from "../../types/common"
import DisplayCharacterObject from "../../components/DisplayCharacterObject"
import { boundsMinMax } from "../../utils/utils"

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
                                <div className="penCalcItemRow">
                                    <label htmlFor="majorBreach" className="secondaryText" title="Debuff: 5948">Major Breach</label><input type="checkbox" name="majorBreach" id="majorBreach" checked={majorBreach} onChange={() => setMajorBreach(!majorBreach)} />
                                </div>
                                <div className="penCalcItemRow">
                                    <label htmlFor="minorBreach" className="secondaryText" title="Debuff: 2974">Minor Breach</label><input type="checkbox" name="minorBreach" id="minorBreach" checked={minorBreach} onChange={() => setMinorBreach(!minorBreach)} />
                                </div>
                                <div className="penCalcItemRow">
                                    <label htmlFor="crusher" className="secondaryText" title="Debuff: 2108 (infused)">Crusher</label><input type="checkbox" name="crusher" id="crusher" checked={crusher} onChange={() => setCrusher(!crusher)} />
                                </div>
                                <div className="penCalcItemRow">
                                    <label htmlFor="alkosh" className="secondaryText" title="Set: 6000">Alkosh</label><input type="checkbox" name="alkosh" id="alkosh" checked={alkosh} onChange={() => setAlkosh(!alkosh)} />
                                </div>
                                <div className="penCalcItemRow">
                                    <label htmlFor="crimson" className="secondaryText" title="Set: 3541">Crimson</label><input type="checkbox" name="crimson" id="crimson" checked={crimson} onChange={() => setCrimson(!crimson)} />
                                </div>
                                <div className="penCalcItemRow">
                                    <label htmlFor="tremor" className="secondaryText" title="Set: 2400">Tremorscale</label><input type="checkbox" name="tremor" id="tremor" checked={tremor} onChange={() => setTremor(!tremor)} />
                                </div>
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
                                    return <DisplayCharacterObject char={char} supportPen={supportPen} requiredPen={requiredPen} key={key} />
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

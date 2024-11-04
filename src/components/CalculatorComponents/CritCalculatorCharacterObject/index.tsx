import { useEffect, useState } from "react"
import { CharacterCritType } from "../../../types/common"
import GenericDisplayField from "../../GenericDisplayField"
import './style.less'
import Collapsible from "../../Collapsible"
import { boundsMinMax, determineIcon } from "../../../utils/utils"
import GenericInput from "../GenericInput"

interface CritCalculatorCharacterObjectProps {
    char: CharacterCritType,
    supportCrit: number
    requiredCrit: number
}
const CritCalculatorCharacterObject = (props: CritCalculatorCharacterObjectProps) => {
    const [wardenPassive, setWardenPassive] = useState(props.char.wardenPassive)
    const [arcanistPassive, setArcanistPassive] = useState(props.char.arcanistPassive)
    const [nbPassive, setNbPassive] = useState(props.char.nbPassive)
    const [templarPassive, setTemplarPassive] = useState(props.char.templarPassive)
    const [mediumArmor, setMediumArmor] = useState(props.char.mediumArmor)
    const [weaponAxe, setWeaponAxe] = useState(props.char.weaponAxe)
    const [harpooner, setHarpooner] = useState(props.char.harpooner)
    const [backstabberCp, setBackstabberCp] = useState(props.char.backstabber)
    const [fFinesseCp, setFFinesseCp] = useState(props.char.fFinesse)
    const [khajiitRace, setKhajiitRace] = useState(props.char.khajiitRace)
    const [shadowMundus, setShadowMundus] = useState(props.char.shadowMundus)
    const [otherSources, setOtherSources] = useState(props.char.otherSources)
    const [currentCrit, setCurrentCrit] = useState(props.char.critSelf)
    const [orderWrath, setOrderWrath] = useState(props.char.orderWrath)
    const [minorForce, setMinorForce] = useState(props.char.minorForce)

    useEffect(() => {
        let selfCritSum = props.char.critBase
        //warden
        selfCritSum += wardenPassive * 4

        //nb
        selfCritSum += nbPassive ? 10 : 0

        //templar
        selfCritSum += templarPassive ? 10 : 0

        //arcanist
        selfCritSum += arcanistPassive ? 12 : 0

        selfCritSum += mediumArmor * 2

        selfCritSum += weaponAxe * 6

        selfCritSum += harpooner ? 10 : 0

        selfCritSum += backstabberCp ? 10 : 0

        selfCritSum += fFinesseCp ? 8 : 0

        selfCritSum += khajiitRace ? 12 : 0

        selfCritSum += shadowMundus ? 17 : 0

        selfCritSum += orderWrath ? 8 : 0
        
        selfCritSum += minorForce ? 10 : 0

        selfCritSum += otherSources
        
        setCurrentCrit(selfCritSum)
    }, [arcanistPassive, backstabberCp, fFinesseCp, harpooner, khajiitRace, mediumArmor, minorForce, nbPassive, orderWrath, otherSources, props.char.critBase, shadowMundus, templarPassive, wardenPassive, weaponAxe])

    return (
        <GenericDisplayField legendText={props.char.name} legendIcon={determineIcon(props.char.name)}>
            <>
                <div className="charRow">
                    <span className="explanationLabel" title="Value displays how much over or under crit target this character is. Crit provided by support and self is taken into account">{props.requiredCrit - props.supportCrit - currentCrit > 0 ? "Under" : "Over"} cap</span>
                    <span>{Math.abs(props.requiredCrit - props.supportCrit - currentCrit)}%</span>
                </div>
                <div className="charRow">
                    <span className="explanationLabel" title="Crit dmg provided by selfish sources below">Own crit</span>
                    <span>{currentCrit}%</span>
                </div>
                <div className="charRow">
                    <span className="explanationLabel" title="Base critical dmg/healing for every character">Base crit</span>
                    <span>{props.char.critBase}%</span>
                </div>
                <Collapsible open={true}>
                    <>
                        {props.char.class === "Warden" &&
                            <GenericInput type={"number"} name={"Warden Passive"} value={wardenPassive} id={`wardenPassive${props.char.id}`} onChange={(event) => setWardenPassive(boundsMinMax(Number(event.target.value), 0, 6))} min={0} max={6} title={"Increases your Critical Damage by 4% for each Animal Companion ability slotted."} />
                        }
                        {props.char.class === "Templar" &&
                            <GenericInput type={"checkbox"} name={"Templar Passive"} checked={templarPassive} id={`templarPassive${props.char.id}`} onChange={() => setTemplarPassive(!templarPassive)} title={"Increases your Critical Damage by 10%."} />
                        }
                        {props.char.class === "Nightblade" &&
                            <GenericInput type={"checkbox"} name={"Nightblade Passive"} checked={nbPassive} id={`nbPassive${props.char.id}`} onChange={() => setNbPassive(!nbPassive)} title={"Increases your Critical Damage by 10%."} />
                        }
                        {props.char.class === "Arcanist" &&
                            <GenericInput type={"checkbox"} name={"Arcanist Passive"} checked={arcanistPassive} id={`arcanistPassive${props.char.id}`} onChange={() => setArcanistPassive(!arcanistPassive)} title={"Warp fate when you generate or consume Crux, increasing your Critical Damage and Critical Healing by 12% for 7 seconds."} />
                        }
                        <GenericInput type={"number"} name={"Medium Armor"} value={mediumArmor} id={`mediumArmor${props.char.id}`} onChange={(event) => setMediumArmor(boundsMinMax(Number(event.target.value), 0, 7))} min={0} max={7} title={"Increases your Critical Damage and Healing done rating by 2% for every piece of Medium Armor equipped."} />
                        <GenericInput type={"checkbox"} name={"Minor Force buff"} checked={minorForce} id={`minorForce${props.char.id}`} onChange={() => setMinorForce(!minorForce)} title={"Increases your Crit Damage by 10%."} />    
                        <GenericInput type={"number"} name={"Weapon Axe"} value={weaponAxe} id={`weaponAxe${props.char.id}`} onChange={(event) => setWeaponAxe(boundsMinMax(Number(event.target.value), 0, 2))} min={0} max={2} title={"Each axe increases your Critical Damage done by 6%. Set 2 if using 2h axe."} />
                        <GenericInput type={"checkbox"} name={"Harpooner mythic"} checked={harpooner} id={`harpooner${props.char.id}`} onChange={() => setHarpooner(!harpooner)} title={"Dealing direct damage grants you a stack of Hunter's Focus for 20 seconds, up to 10 stacks max. You can only gain 1 stack of Hunter's Focus per second. Each stack of Hunter's Focus increases your Critical Chance by 110 and your Critical Damage by 1%. Taking direct damage removes 5 stacks of Hunter's Focus, up to once per second. Removing Harpooner's Wading Kilt removes all stacks of Hunter's Focus."} />
                        <GenericInput type={"checkbox"} name={"Backstabber Cp"} checked={backstabberCp} id={`backstabberCp${props.char.id}`} onChange={() => setBackstabberCp(!backstabberCp)} title={"Increases your Critical Damage done by 2% per stage against enemies you are flanking (5 stages = 10%)."} />
                        <GenericInput type={"checkbox"} name={"Fighting Finesse Cp"} checked={fFinesseCp} id={`fFinesseCp${props.char.id}`} onChange={() => setFFinesseCp(!fFinesseCp)} title={"Increases your Critical Damage and Critical Healing done by 4% per stage (2 stages = 8%)."} />
                        <GenericInput type={"checkbox"} name={"Khajiit Race"} checked={khajiitRace} id={`khajiitRace${props.char.id}`} onChange={() => setKhajiitRace(!khajiitRace)} title={"Increases your Critical Damage and Critical Healing by 12%. Decreases your detection radius in Stealth by 3 meters."} />
                        <GenericInput type={"checkbox"} name={"Shadow Mundus"} checked={shadowMundus} id={`shadowMundus${props.char.id}`} onChange={() => setShadowMundus(!shadowMundus)} title={"Increases Critical Damage and Healing by 17% (7 divines)"} />
                        <GenericInput type={"checkbox"} name={"Order Wrath set"} checked={orderWrath} id={`orderWrath${props.char.id}`} onChange={() => setOrderWrath(!orderWrath)} title={"Adds 943 Critical Chance, Increases your Critical Damage and Critical Healing by 8% (set)."} />
                        <GenericInput type={"number"} name={"Other sources"} value={otherSources} id={`otherSources${props.char.id}`} onChange={(event) => setOtherSources(boundsMinMax(Number(event.target.value), 0, 125))} min={0} max={125} title={"Input other unique sources here."} />
                    </>
                </Collapsible>

            </>
        </GenericDisplayField>
    )
}
export default CritCalculatorCharacterObject

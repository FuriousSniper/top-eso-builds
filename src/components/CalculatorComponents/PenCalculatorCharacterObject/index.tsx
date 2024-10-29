import { useEffect, useState } from "react"
import { CharacterPenType } from "../../../types/common"
import GenericDisplayField from "../../GenericDisplayField"
import './style.less'
import Collapsible from "../../Collapsible"
import { boundsMinMax } from "../../../utils/utils"
import GenericInput from "../GenericInput"

interface PenCalculatorCharacterObjectProps {
    char: CharacterPenType,
    supportPen: number
    requiredPen: number
}
const PenCalculatorCharacterObject = (props: PenCalculatorCharacterObjectProps) => {
    const [arcanistPassive, setArcanistPassive] = useState(props.char.arcanistPassive)
    const [necroPassive, setNecroPassive] = useState(props.char.necroPassive)
    const [nbPassive, setNbPassive] = useState(props.char.nbPassive)
    const [piercing, setPiercing] = useState(props.char.piercing)
    const [weaponMace, setWeaponMace] = useState(props.char.weaponMace)
    const [weaponSharp, setWeaponSharp] = useState(props.char.weaponSharpened)
    const [lightArmor, setLightArmor] = useState(props.char.lightArmor)
    const [FoN, setFoN] = useState(props.char.forceOfNature)
    const [woodElfRace, setWoodElfRace] = useState(props.char.woodElfRace)
    const [loverMundus, setLoverMundus] = useState(props.char.loverMundus)
    const [otherSetLines, setOtherSetLines] = useState(props.char.otherSetLines)
    const [otherSources, setOtherSources] = useState(props.char.otherSources)
    const [currentPen, setCurrentPen] = useState(props.char.penSelf)
    const [velothi, setVelothi] = useState(props.char.velothi)

    useEffect(() => {
        let selfPenSum = 0
        //arcanist
        selfPenSum += arcanistPassive * 991

        //necro
        selfPenSum += necroPassive ? 1500 : 0

        //nb
        selfPenSum += nbPassive ? 2974 : 0

        selfPenSum += velothi ? 1650 : 0

        selfPenSum += piercing ? 700 : 0

        selfPenSum += weaponMace * 1650

        selfPenSum += weaponSharp * 1638

        selfPenSum += lightArmor * 939

        selfPenSum += FoN * 600

        selfPenSum += woodElfRace ? 950 : 0

        selfPenSum += loverMundus ? 4489 : 0

        selfPenSum += otherSetLines * 1487

        selfPenSum += otherSources

        setCurrentPen(selfPenSum)
    }, [FoN, arcanistPassive, lightArmor, loverMundus, necroPassive, otherSetLines, otherSources, piercing, weaponMace, weaponSharp, woodElfRace, velothi, nbPassive])

    const determineIcon = ()=>{
        const prefix="/icons/classes/"
        const suffix=".png"
        let classIconName=""
        const className=props.char.class

        if(className==="Arcanist"){
            classIconName="arcanist"
        }
        if(className==="Dragonknight"){
            classIconName="dk"
        }
        if(className==="Necromancer"){
            classIconName="necro"
        }
        if(className==="Sorcerer"){
            classIconName="sorc"
        }
        if(className==="Templar"){
            classIconName="templar"
        }
        if(className==="Warden"){
            classIconName="warden"
        }
        if(className==="Nightblade"){
            classIconName="nb"
        }

        return prefix+classIconName+suffix
    }

    return (
        <GenericDisplayField legendText={props.char.name} legendIcon={determineIcon()}>
            <>
                <div className="charRow">
                    <span className="explanationLabel" title="Value displays how much over or under pen target this character is. Pen provided by support and self is taken into account">{props.requiredPen - props.supportPen - currentPen > 0 ? "Under" : "Over"} cap</span>
                    <span>{Math.abs(props.requiredPen - props.supportPen - currentPen)}</span>
                </div>
                <div className="charRow">
                    <span className="explanationLabel" title="Pen provided by selfish sources below">Own pen</span>
                    <span>{currentPen}</span>
                </div>
                <Collapsible open={true}>
                    <>
                        {props.char.class === "Arcanist" &&
                            <GenericInput type={"number"} name={"Arcanist Passive"} value={arcanistPassive} id={"arcanistPassive"} onChange={(event) => setArcanistPassive(boundsMinMax(Number(event.target.value),0,6))} min={0} max={6} title={"Increase your Physical and Spell Penetration by 991 per Herald of the Tome ability slotted (e.g. beam, flail, eye)."}/>
                        }
                        {props.char.class === "Necromancer" &&
                            <GenericInput type={"checkbox"} name={"Necromancer Passive"} checked={necroPassive} id={"necroPassive"} onChange={() => setNecroPassive(!necroPassive)} title={"While a Grave Lord ability is active, your Spell and Physical Penetration are increased by 1500."}/>
                        }
                        {props.char.class === "Nightblade" &&
                            <GenericInput type={"checkbox"} name={"Nightblade Passive"} checked={nbPassive} id={"nbPassive"} onChange={() => setNbPassive(!nbPassive)} title={"Increases your Physical and Spell Penetration against enemies you are flanking by 2974."}/>
                        }
                        <GenericInput type={"checkbox"} name={"Velothi Mythic"} checked={velothi} id={"velothi"} onChange={() => setVelothi(!velothi)} title={"Adds 1650 Offensive Penetration, 15% dmg done, Minor Force"}/>
                        <GenericInput type={"number"} name={"Light Armor"} value={lightArmor} id={"lightArmor"} onChange={(event) => setLightArmor(boundsMinMax(Number(event.target.value),0,7))} min={0} max={7} title={"Increases your Physical and Spell Penetration by 939 for each piece of Light Armor worn."}/>
                        <GenericInput type={"number"} name={"Weapon Mace/Maul"} value={weaponMace} id={"weaponMace"} onChange={(event) => setWeaponMace(boundsMinMax(Number(event.target.value),0,2))} min={0} max={2} title={"Amount of Mace weapons. Set 0 if you have none, set 2 when using 2h weapon."}/>
                        <GenericInput type={"number"} name={"Sharpened trait(s)"} value={weaponSharp} id={"weaponSharp"} onChange={(event) => setWeaponSharp(boundsMinMax(Number(event.target.value),0,2))} min={0} max={2} title={"Amount of Sharpened traits on weapons. Set 0 if you have none, set 2 when using 2h weapon"}/>
                        <GenericInput type={"number"} name={"Force of Nature CP"} value={FoN} id={"FoN"} onChange={(event) => setFoN(boundsMinMax(Number(event.target.value),0,8))}  min={0} max={8} title={"Increases your Offensive Penetration by 660 for every status effect your target has."}/>
                        <GenericInput type={"checkbox"} name={"Piercing CP"} checked={piercing} id={"piercing"} onChange={() => setPiercing(!piercing)} title={"Grants 350 Offensive Penetration per stage (2 stages = 700 total)."}/>
                        <GenericInput type={"checkbox"} name={"Wood Elf Race"} checked={woodElfRace} id={"woodElfRace"} onChange={() => setWoodElfRace(!woodElfRace)} title={"Increases your Stealth Detection radius by 3 meters. Increases your Movement Speed by 5% and your Physical and Spell Penetration by 950."}/>
                        <GenericInput type={"checkbox"} name={"Lover Mundus"} checked={loverMundus} id={"loverMundus"} onChange={() => setLoverMundus(!loverMundus)} title={"Increases Physical and Spell Penetration by 4489 (7 divines)."}/>
                        <GenericInput type={"number"} name={"Other set lines"} value={otherSetLines} id={"otherSetLines"} onChange={(event) => setOtherSetLines(boundsMinMax(Number(event.target.value),0,20))}  min={0} max={20} title={"Sets like Kragh, Skoria or Ansuul have bonuses to pen. Increase this number by the amount of bonuses your sets have."}/>
                        <GenericInput type={"number"} name={"Other sources"} value={otherSources} id={"otherSources"} onChange={(event) => setOtherSources(boundsMinMax(Number(event.target.value),0,102000))} min={0} max={102000} title={"Other sources which were not listed here can be added in this field, like Balorgh or TFS."}/>
                    </>
                </Collapsible>

            </>
        </GenericDisplayField>
    )
}
export default PenCalculatorCharacterObject


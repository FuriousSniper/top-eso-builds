import { useEffect, useState } from "react"
import { CharacterPenType } from "../../types/common"
import GenericDisplayField from "../GenericDisplayField"
import './style.less'
import Collapsible from "../Collapsible"

interface CharacterObjectProps {
    char: CharacterPenType,
    supportPen: number
    requiredPen: number
}
const DisplayCharacterObject = (props: CharacterObjectProps) => {
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


    useEffect(() => {
        let selfPenSum = 0
        //arcanist
        selfPenSum += arcanistPassive * 991

        //necro
        selfPenSum += necroPassive ? 1500 : 0

        //nb
        selfPenSum += nbPassive ? 2974 : 0

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
    }, [FoN, arcanistPassive, lightArmor, loverMundus, necroPassive, otherSetLines, otherSources, piercing, weaponMace, weaponSharp, woodElfRace])

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
                            <div className="charRow">
                                <label className="explanationLabel" htmlFor="arcanistPassive" title="Increase your Physical and Spell Penetration by 991 per Herald of the Tome ability slotted (e.g. beam, flail, eye).">Arcanist Passive</label><input type="number" name="arcanistPassive" id="arcanistPassive" value={arcanistPassive} onChange={(event) => setArcanistPassive(Number(event.target.value))} min={0} max={6} />
                            </div>
                        }
                        {props.char.class === "Necromancer" &&
                            <div className="charRow">
                                <label className="explanationLabel" htmlFor="necroPassive" title="While a Grave Lord ability is active, your Spell and Physical Penetration are increased by 1500.">Necromancer Passive</label><input type="checkbox" name="necroPassive" id="necroPassive" checked={necroPassive} onChange={() => setNecroPassive(!necroPassive)} />
                            </div>
                        }
                        {props.char.class === "Nightblade" &&
                            <div className="charRow">
                                <label className="explanationLabel" htmlFor="nbPassive" title="Increases your Physical and Spell Penetration against enemies you are flanking by 2974.">Nightblade Passive</label><input type="checkbox" name="nbPassive" id="nbPassive" checked={nbPassive} onChange={() => setNbPassive(!nbPassive)} />
                            </div>
                        }
                        <div className="charRow">
                            <label className="explanationLabel" htmlFor="lightArmor" title="Increases your Physical and Spell Penetration by 939 for each piece of Light Armor worn.">Light Armor</label><input type="number" name="lightArmor" id="lightArmor" value={lightArmor} onChange={(event) => setLightArmor(Number(event.target.value))} min={0} max={7} />
                        </div>
                        <div className="charRow">
                            <label className="explanationLabel" htmlFor="weaponMace" title="Amount of Mace weapons. Set 0 if you have none, set 2 when using 2h weapon">Weapon Mace/Maul</label><input type="number" name="weaponMace" id="weaponMace" value={weaponMace} onChange={(event) => setWeaponMace(Number(event.target.value))} min={0} max={2} />
                        </div>
                        <div className="charRow">
                            <label className="explanationLabel" htmlFor="weaponSharp" title="Amount of Sharpened traits on weapons. Set 0 if you have none, set 2 when using 2h weapon">Sharpened trait(s)</label><input type="number" name="weaponSharp" id="weaponSharp" value={weaponSharp} onChange={(event) => setWeaponSharp(Number(event.target.value))} min={0} max={2} />
                        </div>
                        <div className="charRow">
                            <label className="explanationLabel" htmlFor="FoN" title="Increases your Offensive Penetration by 660 for every status effect your target has.">Force of Nature CP</label><input type="number" name="FoN" id="FoN" value={FoN} onChange={(event) => setFoN(Number(event.target.value))} min={0} max={8} />
                        </div>
                        <div className="charRow">
                            <label className="explanationLabel" htmlFor="piercing" title="Grants 350 Offensive Penetration per stage (2 stages).">Piercing CP</label><input type="checkbox" name="piercing" id="piercing" checked={piercing} onChange={() => setPiercing(!piercing)} />
                        </div>
                        <div className="charRow">
                            <label className="explanationLabel" htmlFor="woodElfRace" title="Increases your Stealth Detection radius by 3 meters. Increases your Movement Speed by 5% and your Physical and Spell Penetration by 950.">Wood Elf Race</label><input type="checkbox" name="woodElfRace" id="woodElfRace" checked={woodElfRace} onChange={() => setWoodElfRace(!woodElfRace)} />
                        </div>
                        <div className="charRow">
                            <label className="explanationLabel" htmlFor="loverMundus" title="Increases Physical and Spell Penetration by 4489 (7 divines)">Lover Mundus</label><input type="checkbox" name="loverMundus" id="loverMundus" checked={loverMundus} onChange={() => setLoverMundus(!loverMundus)} />
                        </div>
                        <div className="charRow">
                            <label className="explanationLabel" htmlFor="otherSetLines" title="Sets like Kragh, Skoria or Ansuul have bonuses to pen. Increase this number by the amount of bonuses your sets have.">Other set lines</label><input type="number" name="otherSetLines" id="otherSetLines" value={otherSetLines} onChange={(event) => setOtherSetLines(Number(event.target.value))} min={0} max={20} />
                        </div>
                        <div className="charRow">
                            <label className="explanationLabel" htmlFor="otherSources" title="Other sources which were not listed here can be added in this field, like Balorgh or TFS">Other sources</label><input type="number" name="otherSources" id="otherSources" value={otherSources} onChange={(event) => setOtherSources(Number(event.target.value))} min={0} />
                        </div>
                    </>
                </Collapsible>

            </>
        </GenericDisplayField>
    )
}
export default DisplayCharacterObject


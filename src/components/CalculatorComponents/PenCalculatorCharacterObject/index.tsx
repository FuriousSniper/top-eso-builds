import { useEffect, useState } from "react"
import { CharacterPenType } from "../../../types/common"
import GenericDisplayField from "../../GenericDisplayField"
import './style.less'
import Collapsible from "../../Collapsible"
import { boundsMinMax, determineIcon } from "../../../utils/utils"
import GenericInput from "../GenericInput"
import GenericModal from "../../Modals/GenericModal"

interface PenCalculatorCharacterObjectProps {
    char: CharacterPenType,
    deleteFunction: () => void,
    supportPen: number,
    requiredPen: number,
    updateFunction: (obj: CharacterPenType) => void
}

const PenCalculatorCharacterObject = (props: PenCalculatorCharacterObjectProps) => {
    const [charObject, setCharObject] = useState<CharacterPenType>(props.char)
    const [currentPen, setCurrentPen] = useState(0)

    const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name.split("-")[0]
        const type = e.target.type
        let value

        if (type === "number") {
            value = boundsMinMax(Number(e.target.value), Number(e.target.min), Number(e.target.max))
        }
        if (type === "checkbox") {
            value = e.target.checked
        }

        const newObject = {
            ...charObject,
            [name]: value
        }

        setCharObject(newObject)
        props.updateFunction(newObject)
    }

    useEffect(() => {
        let selfPenSum = 0

        if (charObject.class === "Arcanist") {
            selfPenSum += charObject.arcanistPassive * 991
        }

        if (charObject.class === "Necromancer") {
            selfPenSum += charObject.necroPassive ? 1500 : 0
        }

        if (charObject.class === "Nightblade") {
            selfPenSum += charObject.nbPassive ? 2974 : 0
        }

        selfPenSum += charObject.velothi ? 1650 : 0

        selfPenSum += charObject.piercing ? 700 : 0

        selfPenSum += charObject.weaponMace * 1650

        selfPenSum += charObject.weaponSharpened * 1638

        selfPenSum += charObject.lightArmor * 939

        selfPenSum += charObject.forceOfNature * 600

        selfPenSum += charObject.woodElfRace ? 950 : 0

        selfPenSum += charObject.loverMundus ? 4489 : 0

        selfPenSum += charObject.otherSetLines * 1487

        selfPenSum += Number(charObject.otherSources)

        setCurrentPen(selfPenSum)
    }, [charObject, setCharObject])

    return (
        <GenericDisplayField legendText={charObject.name} legendIcon={determineIcon(charObject.class)} parentClassName="charAutoMinHeight">
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
                        {charObject.class === "Arcanist" &&
                            <GenericInput type={"number"} name={"Arcanist Passive"} value={charObject.arcanistPassive} id={`arcanistPassive-${charObject.id}`} onChange={(event) => handleUpdate(event)} min={0} max={6} title={"Increase your Physical and Spell Penetration by 991 per Herald of the Tome ability slotted (e.g. beam, flail, eye)."} />
                        }
                        {charObject.class === "Necromancer" &&
                            <GenericInput type={"checkbox"} name={"Necromancer Passive"} checked={charObject.necroPassive} id={`necroPassive-${charObject.id}`} onChange={(event) => handleUpdate(event)} title={"While a Grave Lord ability is active, your Spell and Physical Penetration are increased by 1500."} />
                        }
                        {charObject.class === "Nightblade" &&
                            <GenericInput type={"checkbox"} name={"Nightblade Passive"} checked={charObject.nbPassive} id={`nbPassive-${charObject.id}`} onChange={(event) => handleUpdate(event)} title={"Increases your Physical and Spell Penetration against enemies you are flanking by 2974."} />
                        }
                        <GenericInput type={"checkbox"} name={"Velothi Mythic"} checked={charObject.velothi} id={`velothi-${charObject.id}`} onChange={(event) => handleUpdate(event)} title={"Adds 1650 Offensive Penetration, 15% dmg done, Minor Force"} />
                        <GenericInput type={"number"} name={"Light Armor"} value={charObject.lightArmor} id={`lightArmor-${charObject.id}`} onChange={(event) => handleUpdate(event)} min={0} max={7} title={"Increases your Physical and Spell Penetration by 939 for each piece of Light Armor worn."} />
                        <GenericInput type={"number"} name={"Weapon Mace/Maul"} value={charObject.weaponMace} id={`weaponMace-${charObject.id}`} onChange={(event) => handleUpdate(event)} min={0} max={2} title={"Amount of Mace weapons. Set 0 if you have none, set 2 when using 2h weapon."} />
                        <GenericInput type={"number"} name={"Sharpened trait(s)"} value={charObject.weaponSharpened} id={`weaponSharpened-${charObject.id}`} onChange={(event) => handleUpdate(event)} min={0} max={2} title={"Amount of Sharpened traits on weapons. Set 0 if you have none, set 2 when using 2h weapon"} />
                        <GenericInput type={"number"} name={"Force of Nature CP"} value={charObject.forceOfNature} id={`forceOfNature-${charObject.id}`} onChange={(event) => handleUpdate(event)} min={0} max={8} title={"Increases your Offensive Penetration by 660 for every status effect your target has."} />
                        <GenericInput type={"checkbox"} name={"Piercing CP"} checked={charObject.piercing} id={`piercing-${charObject.id}`} onChange={(event) => handleUpdate(event)} title={"Grants 350 Offensive Penetration per stage (2 stages = 700 total)."} />
                        <GenericInput type={"checkbox"} name={"Wood Elf Race"} checked={charObject.woodElfRace} id={`woodElfRace-${charObject.id}`} onChange={(event) => handleUpdate(event)} title={"Increases your Stealth Detection radius by 3 meters. Increases your Movement Speed by 5% and your Physical and Spell Penetration by 950."} />
                        <GenericInput type={"checkbox"} name={"Lover Mundus"} checked={charObject.loverMundus} id={`loverMundus-${charObject.id}`} onChange={(event) => handleUpdate(event)} title={"Increases Physical and Spell Penetration by 4489 (7 divines)."} />
                        <GenericInput type={"number"} name={"Other set lines"} value={charObject.otherSetLines} id={`otherSetLines-${charObject.id}`} onChange={(event) => handleUpdate(event)} min={0} max={20} title={"Sets like Kragh, Skoria or Ansuul have bonuses to pen. Increase this number by the amount of bonuses your sets have."} />
                        <GenericInput type={"number"} name={"Other sources"} value={charObject.otherSources} id={`otherSources-${charObject.id}`} onChange={(event) => handleUpdate(event)} min={0} max={102000} title={"Other sources which were not listed here can be added in this field, like Balorgh or TFS."} />
                        <GenericModal buttonName="Delete character" className="deleteCharacterButton" deleteChar={props.deleteFunction} />
                    </>
                </Collapsible>

            </>
        </GenericDisplayField>
    )
}
export default PenCalculatorCharacterObject


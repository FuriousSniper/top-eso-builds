import { useEffect, useState } from "react"
import { CharacterCritType } from "../../../types/common"
import GenericDisplayField from "../../GenericDisplayField"
import './style.less'
import Collapsible from "../../Collapsible"
import { boundsMinMax, determineIcon } from "../../../utils/utils"
import GenericInput from "../GenericInput"
import GenericModal from "../../Modals/GenericModal"

interface CritCalculatorCharacterObjectProps {
    char: CharacterCritType,
    deleteFunction: () => void,
    supportCrit: number
    requiredCrit: number,
    updateFunction: (obj: CharacterCritType) => void
}
const CritCalculatorCharacterObject = (props: CritCalculatorCharacterObjectProps) => {
    const [charObject, setCharObject] = useState<CharacterCritType>(props.char)
    const [currentCrit, setCurrentCrit] = useState(charObject.critSelf)

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
        let selfCritSum = charObject.critBase

        if (charObject.class === "Warden") {
            selfCritSum += charObject.wardenPassive * 4
        }

        if (charObject.class === "Nightblade") {
            selfCritSum += charObject.nbPassive ? 10 : 0
        }

        if (charObject.class === "Templar") {
            selfCritSum += charObject.templarPassive ? 10 : 0
        }

        if (charObject.class === "Arcanist") {
            selfCritSum += charObject.arcanistPassive ? 12 : 0
        }

        selfCritSum += charObject.mediumArmor * 2

        selfCritSum += charObject.weaponAxe * 6

        selfCritSum += charObject.harpooner ? 10 : 0

        selfCritSum += charObject.backstabber ? 10 : 0

        selfCritSum += charObject.fFinesse ? 8 : 0

        selfCritSum += charObject.khajiitRace ? 12 : 0

        selfCritSum += charObject.shadowMundus ? 17 : 0

        selfCritSum += charObject.orderWrath ? 8 : 0

        selfCritSum += charObject.minorForce ? 10 : 0

        selfCritSum += Number(charObject.otherSources)

        setCurrentCrit(selfCritSum)
    }, [charObject, setCharObject])

    return (
        <GenericDisplayField legendText={charObject.name} legendIcon={determineIcon(charObject.class)} parentClassName="charAutoMinHeight">
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
                    <span>{charObject.critBase}%</span>
                </div>
                <Collapsible open={true}>
                    <>
                        {charObject.class === "Warden" &&
                            <GenericInput type={"number"} name={"Warden Passive"} value={charObject.wardenPassive} id={`wardenPassive-${charObject.id}`} onChange={(event) => handleUpdate(event)} min={0} max={6} title={"Increases your Critical Damage by 4% for each Animal Companion ability slotted."} />
                        }
                        {charObject.class === "Templar" &&
                            <GenericInput type={"checkbox"} name={"Templar Passive"} checked={charObject.templarPassive} id={`templarPassive-${charObject.id}`} onChange={(event) => handleUpdate(event)} title={"Increases your Critical Damage by 10%."} />
                        }
                        {charObject.class === "Nightblade" &&
                            <GenericInput type={"checkbox"} name={"Nightblade Passive"} checked={charObject.nbPassive} id={`nbPassive-${charObject.id}`} onChange={(event) => handleUpdate(event)} title={"Increases your Critical Damage by 10%."} />
                        }
                        {charObject.class === "Arcanist" &&
                            <GenericInput type={"checkbox"} name={"Arcanist Passive"} checked={charObject.arcanistPassive} id={`arcanistPassive-${charObject.id}`} onChange={(event) => handleUpdate(event)} title={"Warp fate when you generate or consume Crux, increasing your Critical Damage and Critical Healing by 12% for 7 seconds."} />
                        }
                        <GenericInput type={"number"} name={"Medium Armor"} value={charObject.mediumArmor} id={`mediumArmor-${charObject.id}`} onChange={(event) => handleUpdate(event)} min={0} max={7} title={"Increases your Critical Damage and Healing done rating by 2% for every piece of Medium Armor equipped."} />
                        <GenericInput type={"checkbox"} name={"Minor Force buff"} checked={charObject.minorForce} id={`minorForce-${charObject.id}`} onChange={(event) => handleUpdate(event)} title={"Increases your Crit Damage by 10%."} />
                        <GenericInput type={"number"} name={"Weapon Axe"} value={charObject.weaponAxe} id={`weaponAxe-${charObject.id}`} onChange={(event) => handleUpdate(event)} min={0} max={2} title={"Each axe increases your Critical Damage done by 6%. Set 2 if using 2h axe."} />
                        <GenericInput type={"checkbox"} name={"Harpooner mythic"} checked={charObject.harpooner} id={`harpooner-${charObject.id}`} onChange={(event) => handleUpdate(event)} title={"Dealing direct damage grants you a stack of Hunter's Focus for 20 seconds, up to 10 stacks max. You can only gain 1 stack of Hunter's Focus per second. Each stack of Hunter's Focus increases your Critical Chance by 110 and your Critical Damage by 1%. Taking direct damage removes 5 stacks of Hunter's Focus, up to once per second. Removing Harpooner's Wading Kilt removes all stacks of Hunter's Focus."} />
                        <GenericInput type={"checkbox"} name={"Backstabber Cp"} checked={charObject.backstabber} id={`backstabber-${charObject.id}`} onChange={(event) => handleUpdate(event)} title={"Increases your Critical Damage done by 2% per stage against enemies you are flanking (5 stages = 10%)."} />
                        <GenericInput type={"checkbox"} name={"Fighting Finesse Cp"} checked={charObject.fFinesse} id={`fFinesse-${charObject.id}`} onChange={(event) => handleUpdate(event)} title={"Increases your Critical Damage and Critical Healing done by 4% per stage (2 stages = 8%)."} />
                        <GenericInput type={"checkbox"} name={"Khajiit Race"} checked={charObject.khajiitRace} id={`khajiitRace-${charObject.id}`} onChange={(event) => handleUpdate(event)} title={"Increases your Critical Damage and Critical Healing by 12%. Decreases your detection radius in Stealth by 3 meters."} />
                        <GenericInput type={"checkbox"} name={"Shadow Mundus"} checked={charObject.shadowMundus} id={`shadowMundus-${charObject.id}`} onChange={(event) => handleUpdate(event)} title={"Increases Critical Damage and Healing by 17% (7 divines)"} />
                        <GenericInput type={"checkbox"} name={"Order Wrath set"} checked={charObject.orderWrath} id={`orderWrath-${charObject.id}`} onChange={(event) => handleUpdate(event)} title={"Adds 943 Critical Chance, Increases your Critical Damage and Critical Healing by 8% (set)."} />
                        <GenericInput type={"number"} name={"Other sources"} value={charObject.otherSources} id={`otherSources-${charObject.id}`} onChange={(event) => handleUpdate(event)} min={0} max={125} title={"Input other unique sources here."} />
                        <GenericModal buttonName="Delete character" className="deleteCharacterButton" deleteChar={props.deleteFunction} />
                    </>
                </Collapsible>

            </>
        </GenericDisplayField>
    )
}
export default CritCalculatorCharacterObject

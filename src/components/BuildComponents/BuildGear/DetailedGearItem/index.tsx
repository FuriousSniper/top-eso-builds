import { ConcreteSetItemType } from "../../../../types/common"
import SingleMiscItem from "../../SingleMiscItem"
import SingleGearItem from "../SingleGearItem"
import './style.less'

interface DetailedGearItemProps{
    _key?: number | string, //used to create html IDs of items that are clickable
    item: ConcreteSetItemType,
    toggleCrossFunction: (id: string) => void,
    buildId: string,
}

const DetailedGearItem = (props: DetailedGearItemProps) => {
    return (
        <div className={`item`} key={props._key}>
            <div className={`gearSlot ${props.item.weight ? "item" + props.item.weight : ""}`} title={`${props.item.weight ? props.item.weight + " " : ""}${props.item.weapon ? props.item.weapon + " " : ""}${props.item.slot}`}>
                <span>{props.item.slot}</span>
            </div>
            <div className="details">
                <div className="setName">
                    {
                        props.item.set &&
                        <SingleGearItem item={props.item} key={props._key} toggleCrossFunction={props.toggleCrossFunction} id={"gear" + props.buildId + props._key} />
                    }
                    {
                        !props.item.set &&
                        <div>N/A</div>
                    }
                </div>
                <div className="misc">
                    <div className="trait" id={"trait" + props.buildId + props._key} onClick={() => props.toggleCrossFunction("trait" + props.buildId + props._key)}>{props.item.trait ? props.item.trait : "N/A"}</div>
                    <SingleMiscItem misc={props.item.enchant} toggleCrossFunction={props.toggleCrossFunction} id={"enchant" + props.buildId + props._key} parentClassName={"enchant"} tinyIcon />
                </div>
            </div>
        </div>
    )
}

export default DetailedGearItem
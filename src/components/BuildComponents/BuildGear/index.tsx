import { ConcreteSetItemType } from "../../../types/common"
import GenericDisplayField from "../../GenericDisplayField"
import SingleGearItem from "../SingleGearItem"
import './style.less'

interface IBuildGearProps {
    gear: Array<ConcreteSetItemType>,
    toggleCrossFunction: (id: string)=>void,
    buildId: string,
}
const BuildGear = (props: IBuildGearProps) => {
    return (
        <GenericDisplayField legendText="Gear" legendIcon="/icons/buildPage/gear.png">
            <div className="gearWrapper">
                {
                    props.gear?.map((item: ConcreteSetItemType, key: number) => {
                        return (
                            <>
                                <div className={`item ${key + 1 === props.gear?.length ? "lastItem" : ""}`} key={key}>
                                    <div className={`gearSlot ${item.weight ? "item" + item.weight : ""}`} title={`${item.weight ? item.weight + " " : ""}${item.weapon ? item.weapon + " " : ""}${item.slot}`}>
                                        <span>{item.slot}</span>
                                    </div>
                                    <div className="details">
                                        <div className="setName">
                                            {item.set &&
                                                <SingleGearItem item={item} key={key} toggleCrossFunction={props.toggleCrossFunction} id={"gear"+props.buildId+key}/>
                                            }
                                            {
                                                !item.set &&
                                                <div>N/A</div>
                                            }
                                        </div>
                                        <div className="misc">
                                            <div className="trait" id={"trait"+props.buildId+key} onClick={()=>props.toggleCrossFunction("trait"+props.buildId+key)}>{item.trait ? item.trait : "N/A"}</div>
                                            <div className="enchant" id={"enchant"+props.buildId+key} onClick={()=>props.toggleCrossFunction("enchant"+props.buildId+key)}>{item.enchant ? item.enchant : "N/A"}</div>
                                        </div>
                                    </div>
                                </div>
                                {key + 1 < props.gear?.length &&
                                    <div className="separator" ></div>
                                }
                            </>
                        )
                    })
                }
            </div>
        </GenericDisplayField>

    )
}
export default BuildGear
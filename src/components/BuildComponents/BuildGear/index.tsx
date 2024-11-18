import { ConcreteSetItemType } from "../../../types/common"
import GenericDisplayField from "../../GenericDisplayField"
import DetailedGearItem from "./DetailedGearItem"
import * as _ from "lodash";
import './style.less'

interface BuildGearProps {
    gear: Array<ConcreteSetItemType>,
    toggleCrossFunction: (id: string) => void,
    buildId: string,
    groupGear: boolean
}
const BuildGear = (props: BuildGearProps) => {

    const groupGearFunction = () => {
        const groupedItems = _.groupBy(props.gear, (gearItem: ConcreteSetItemType) => {
            return gearItem.set?.name
        })
        const indItems = _.forEach(groupedItems, (key) => {
            key.map((item: ConcreteSetItemType) => {
                return item
            })
        })
        return _.flatMap(indItems)
    }
    
    const renderItem = (item: ConcreteSetItemType, key: number)=>{
        return (
            <>
                <DetailedGearItem item={item} toggleCrossFunction={props.toggleCrossFunction} buildId={props.buildId} _key={item.set?.id+"-"+item.id} key={key}/>
                {key + 1 < props.gear?.length &&
                    <div className="separator"></div>
                }
            </>
        )
    }

    return (
        <GenericDisplayField legendText="Gear" legendIcon="/icons/buildPage/gear.png">
            <div className="gearWrapper">
                {props.groupGear === false &&
                    props.gear?.map((item: ConcreteSetItemType, key: number) => {
                        return renderItem(item,key)
                    })
                }
                {props.groupGear === true &&
                    <>{groupGearFunction().map((item: ConcreteSetItemType, key: number) => {
                        return renderItem(item,key)
                    })}</>
                }
            </div>
        </GenericDisplayField>
    )
}
export default BuildGear
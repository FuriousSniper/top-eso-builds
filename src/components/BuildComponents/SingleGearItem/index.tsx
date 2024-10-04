import { ConcreteSetItemType } from '../../../types/common'
import GenericPopover from '../../GenericPopover'
import './style.less'
interface ISingleGearItem {
    item?: ConcreteSetItemType,
    toggleCrossFunction: (id: string) => void,
    id: string
}
const SingleGearItem = (props: ISingleGearItem) => {
    const itemClickFunction = () => {
        props.toggleCrossFunction(props.id)
    }
    return (
        <>
            {
                props.item &&
                <div onClick={itemClickFunction} id={props.id}>
                    <GenericPopover displaySet={props.item.set!}>
                        {props.item.set!.name} {props.item.weapon ? " (" + props.item.weapon + ")" : ""}
                    </GenericPopover>
                </div>
            }
        </>
    )
}
export default SingleGearItem
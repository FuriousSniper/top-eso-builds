import { GenericDisplayType } from "../../../types/common";
import { replaceSpecialStrings } from "../../../utils/utils"
import './style.less';

interface ItemPopoverProps {
    item?: GenericDisplayType
}

const ItemPopover = (props: ItemPopoverProps) => {
    return (
        <>
            {props.item &&
                <>
                    <div className="genericItemPopup">
                        <img src={props.item.icon} alt="" className="genericItemIcon"/>
                        <div className={`genericItemName`}>{props.item.name}</div>
                        <div className="skillSeparator"></div>
                        <div className="genericItemDescriptions" dangerouslySetInnerHTML={{__html: replaceSpecialStrings(props.item.description ? props.item.description : "")}}>
                        </div>
                    </div>
                </>
            }
        </>

    )
}
export default ItemPopover
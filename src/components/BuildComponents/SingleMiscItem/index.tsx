import { GenericDisplayType } from '../../../types/common'
import GenericPopover from '../../GenericPopover'
import './style.less'

interface SingleMiscItemProps {
    misc?: GenericDisplayType | null | undefined,
    toggleCrossFunction: (id: string) => void,
    id: string,
    parentClassName?: string,
    tinyIcon?: boolean,
    renderIcon?: boolean, //be default it is rendering icon, pass false not to render
}

const SingleMiscItem = (props: SingleMiscItemProps) => {
    const miscClickFunction = () => {
        props.toggleCrossFunction(props.id)
    }

    return (
        <>
            {!props.misc &&
                <div>N/A</div>
            }
            {
                props.misc &&
                <div onClick={miscClickFunction} id={props.id} className={props.parentClassName}>
                    <GenericPopover displayItem={props.misc} className='miscItem clickable'>
                        {props.renderIcon === true || props.renderIcon===undefined &&
                            <img
                                src={props.misc.icon}
                                alt=""
                                className={props.tinyIcon === true ? "tinyMiscImg" : "miscImg"}
                            />
                        }
                        <span className='miscName'>{props.misc.name}</span>
                    </GenericPopover>
                </div>
            }
        </>
    )
}
export default SingleMiscItem
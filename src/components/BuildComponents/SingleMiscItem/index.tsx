import { GenericDisplayType } from '../../../types/common'
import GenericPopover from '../../GenericPopover'
import './style.less'

interface SingleMiscItemProps {
    misc?: GenericDisplayType | null | undefined,
    toggleCrossFunction: (id: string) => void,
    id: string
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
                <div onClick={miscClickFunction} id={props.id}>
                    <GenericPopover displayItem={props.misc} className='miscItem clickable'>
                        <img
                            src={props.misc.icon}
                            alt=""
                            className='miscImg'
                        /><span>{props.misc.name}</span>
                    </GenericPopover>
                </div>
            }
        </>
    )
}
export default SingleMiscItem
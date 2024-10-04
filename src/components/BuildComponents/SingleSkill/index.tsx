import { GenericSkill } from '../../../types/common'
import GenericPopover from '../../GenericPopover'
import './style.less'
interface ISingleSkill {
    skill?: GenericSkill
}
const SingleSkill = (props: ISingleSkill) => {
    return (
        <>
            {
                props.skill &&
                <GenericPopover displaySkill={props.skill} >
                    <img src={props.skill.icon} className='skillIcon' />
                </GenericPopover>
            }
        </>
    )
}
export default SingleSkill
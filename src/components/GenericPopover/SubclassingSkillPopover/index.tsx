import { SubclassingSkillType } from "../../../types/common"
import './style.less'

interface SubclassingSkillPopoverProps {
    skill?: SubclassingSkillType
}

const SubclassingSkillPopover = (props: SubclassingSkillPopoverProps) => {
    return (
        <>
            {props.skill &&
                <>
                    <div className="skillName">{props.skill.name}</div>
                    <div className="skillSeparator"></div>
                    <div className="skillEffects">
                        <span className="effectsTitle">Effects:</span>
                        {
                            props.skill.effects.length > 0 &&
                            props.skill.effects.map((effect: string, key) => {
                                return <span key={key} className="skillEffect">{effect}</span> 
                            })
                        }
                        {
                            props.skill.effects.length===0&&
                            <span className="skillEffect">None</span>
                        }

                    </div>
                </>
            }
        </>
    )
}

export default SubclassingSkillPopover
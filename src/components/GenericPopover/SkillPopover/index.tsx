import { GenericSkill, ScribingSkill } from "../../../types/common";
import { replaceSpecialStrings } from "../../../utils/utils"
import './style.less';
interface ISkillPopover {
    skill?: GenericSkill | ScribingSkill
}
const SkillPopover = (props: ISkillPopover) => {
    return (
        <>
            {props.skill &&
                <>
                    <div className="skillName">{props.skill.name}</div>
                    <div className="skillSeparator"></div>
                    <div className="skillParams">
                        <div className="parameter">
                            <span className="parameterType">Cast Time</span>
                            <span className={`parameterValue`}>{props.skill.castTime === 0 ? "Instant" : props.skill.castTime + " seconds"}</span>
                        </div>
                        <div className="parameter">
                            <span className="parameterType">Target</span>
                            <span className="parameterValue">{props.skill.target}</span>
                        </div>
                        {
                            (props.skill.targetAreaX && props.skill.targetAreaX) &&
                            <div className="parameter">
                                <span className="parameterType">Area</span>
                                <span className="parameterValue">{props.skill.targetAreaX} x {props.skill.targetAreaY} meters</span>
                            </div>
                        }
                        {
                            (props.skill.radius) &&
                            <div className="parameter">
                                <span className="parameterType">Radius</span>
                                <span className="parameterValue">{props.skill.radius} meters</span>
                            </div>
                        }
                        {
                            (props.skill.duration) &&
                            <div className="parameter">
                                <span className="parameterType">Duration</span>
                                <span className="parameterValue">{props.skill.duration} seconds</span>
                            </div>
                        }
                        {
                            (props.skill.cost) &&
                            <div className="parameter">
                                <span className="parameterType">Cost</span>
                                <span className={`parameterValue ${props.skill.cost?.resourceName ? "color" + props.skill.cost?.resourceName : ""}`}>{props.skill.cost.amount} {props.skill.cost?.resourceName} {props.skill.cost?.perSecond ? props.skill.cost.perSecond + "/s" : ""}</span>
                            </div>
                        }
                    </div>
                    <div className="skillSeparator"></div>
                    {props.skill.costDetermined &&
                        <p className="costDetermined skillDescription">Cost determined by highest max resource</p>
                    }
                    <div dangerouslySetInnerHTML={{ __html: replaceSpecialStrings(props.skill.description) }}></div>
                </>
            }
        </>
    )
}

export default SkillPopover
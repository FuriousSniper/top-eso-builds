import { ExplainedSkill } from "../../../types/common"
import SingleSkill from "../SingleSkill"
import './style.less'

interface ISkillExplanationProps {
    skillObject?: ExplainedSkill
}

const SkillExplanation = (props: ISkillExplanationProps) => {
    return (
        <>
            {
                props.skillObject &&
                <div className="skillExplainedWrapper">
                    <div className="leftWrapper">
                        <div className="skillIconWrapper"><SingleSkill skill={props.skillObject.skill} /></div>
                        <div className="explSkillName">{props.skillObject.skill.name}</div>
                    </div>
                    <div className="skillExplanationText" dangerouslySetInnerHTML={{ __html: props.skillObject.explanationHtml }}></div>
                </div>
            }
        </>
    )
}

export default SkillExplanation
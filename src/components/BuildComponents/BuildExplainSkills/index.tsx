import { ExplainedSkill } from "../../../types/common"
import GenericDisplayField from "../../GenericDisplayField"
import SkillExplanation from "../SkillExplanation"
import './style.less'

interface IBuildExplainSkillsProps {
    skills: {
        normalFront: Array<ExplainedSkill>,
        ultFront: ExplainedSkill,
        normalBack?: Array<ExplainedSkill>,
        ultBack?: ExplainedSkill,
    }
}
const BuildExplainSkills = (props: IBuildExplainSkillsProps) => {
    return (
        <GenericDisplayField legendText="Skills details" childrenClassName={"skillExplanationWrapper"}>
            <>
                {
                    props.skills?.normalFront.map((skill: ExplainedSkill, key: number) => {
                        return <SkillExplanation skillObject={skill} key={key} />
                    })
                }
                    <SkillExplanation skillObject={props.skills?.ultFront} />
                    <div className="separator"></div>
                {
                    props.skills?.normalBack?.map((skill: ExplainedSkill, key: number) => {
                        return <SkillExplanation skillObject={skill} key={key} />
                    })
                }
                {
                    props.skills?.ultBack !== undefined ?
                    <SkillExplanation skillObject={props.skills?.ultBack} /> : ''
                }
            </>
        </GenericDisplayField>

    )
}
export default BuildExplainSkills

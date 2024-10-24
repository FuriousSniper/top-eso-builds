import { ExplainedSkill } from "../../../types/common"
import GenericDisplayField from "../../GenericDisplayField"
import SingleSkill from "../SingleSkill"
import './style.less'

interface IBuildSkillsProps {
    skills: {
        normalFront: Array<ExplainedSkill>,
        ultFront: ExplainedSkill,
        normalBack?: Array<ExplainedSkill>,
        ultBack?: ExplainedSkill,
    }
}
const BuildSkills = (props: IBuildSkillsProps) => {
    return (
        <GenericDisplayField legendText="Skills" legendIcon="/icons/buildPage/achiIcon.png">
            <div className="skillBarsWrapper">
                <div className="skillBar">
                    {
                        props.skills?.normalFront.map((skillObject: ExplainedSkill, key: number) => {
                            return <SingleSkill skill={skillObject.skill} key={key} />
                        })
                    }
                    <SingleSkill skill={props.skills?.ultFront.skill} />
                </div>
                <div className="skillBar">
                    {
                        props.skills?.normalBack?.map((skillObject: ExplainedSkill, key: number) => {
                            return <SingleSkill skill={skillObject.skill} key={key} />
                        })
                    }
                    {
                        props.skills?.ultBack!== undefined ?
                        <SingleSkill skill={props.skills.ultBack!.skill} /> : ''
                    }
                    
                </div>
            </div>
        </GenericDisplayField>

    )
}
export default BuildSkills
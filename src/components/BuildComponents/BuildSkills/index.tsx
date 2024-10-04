import { GenericSkill } from "../../../types/common"
import GenericDisplayField from "../../GenericDisplayField"
import SingleSkill from "../SingleSkill"
import './style.less'

interface IBuildSkillsProps {
    skills: {
        normalFront: Array<GenericSkill>,
        ultFront: GenericSkill,
        normalBack?: Array<GenericSkill>,
        ultBack?: GenericSkill,
    }
}
const BuildSkills = (props: IBuildSkillsProps) => {
    return (
        <GenericDisplayField legendText="Skills" legendIcon="/icons/buildPage/achiIcon.png">
            <div className="skillBarsWrapper">
                <div className="skillBar">
                    {
                        props.skills?.normalFront.map((skill: GenericSkill, key: number) => {
                            return <SingleSkill skill={skill} key={key} />
                        })
                    }
                    <SingleSkill skill={props.skills?.ultFront} />
                </div>
                <div className="skillBar">
                    {
                        props.skills?.normalBack?.map((skill: GenericSkill, key: number) => {
                            return <SingleSkill skill={skill} key={key} />
                        })
                    }
                    {
                        props.skills?.ultBack!== undefined ?
                        <SingleSkill skill={props.skills.ultBack!} /> : ''
                    }
                    
                </div>
            </div>
        </GenericDisplayField>

    )
}
export default BuildSkills
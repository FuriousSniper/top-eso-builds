import { SubclassingSkillType } from "../../types/common";
import SubclassingSkill from "../SubclassingSkill";
import './style.less'

interface ISkillLineGroupProps {
    skills: Array<SubclassingSkillType>,
    skillLineName: string
    class: string
}
const SkillLineGroup = (props: ISkillLineGroupProps) =>{
    return(
        <div className="skillLineWrapper">
            <div className="title">{props.skillLineName}</div>
            <div className="skillsWrapper">
                {props.skills.map((skill: SubclassingSkillType,key:number)=>{
                    return <SubclassingSkill skill={skill} key={key} skillLineName={props.skillLineName} class={props.class}/>
                })}
            </div>
        </div>
    )
}
export default SkillLineGroup
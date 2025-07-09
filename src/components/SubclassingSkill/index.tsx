import { useEffect, useRef, useState } from "react";
import { SubclassingSkillType } from "../../types/common"
import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import './style.less'
import GenericPopover from "../GenericPopover";

interface SubclassingSkillProps {
    skill: SubclassingSkillType,
    skillLineName: string,
    class: string
    id?: string
}
const SubclassingSkill = (props: SubclassingSkillProps) => {
    const ref = useRef(null);
    const [dragging, setDragging] = useState<boolean>(false);
    const skillRef=useRef<SubclassingSkillType | null>(props.skill)

    useEffect(() => {
        const el = ref.current;
        
        return draggable({
            element: el!,
            onDragStart: () => setDragging(true),
            getInitialData: () => ({ skill: skillRef.current }),
            onDrop: () => {
                setDragging(false)
            }
        });
    }, []);

    useEffect(()=>{
        skillRef.current=props.skill
    },[props])

    return (
        <GenericPopover subclassingSkill={props.skill!} className={dragging ? "dragging" : ""}>
            <img src={`/icons/subclassing/${props.skill.icon}`} className="subclassingSkill" id={props.id ? props.id : `ability_${props.skill.id}`} draggable="false" ref={ref}/>
        </GenericPopover>
    )
}

export default SubclassingSkill


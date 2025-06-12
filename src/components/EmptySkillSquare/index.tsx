import { useEffect, useRef, useState } from "react"
import { SubclassingSkillType } from "../../types/common"
import './style.less'
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter"
import SubclassingSkill from "../SubclassingSkill"

interface EmptySkillSquareProps {
    skill: SubclassingSkillType | undefined
    skillLineName?: string,
    class?: string
    id: string
}

const EmptySkillSquare = (props: EmptySkillSquareProps) => {
    const ref = useRef(null);
    const [isDraggedOver, setIsDraggedOver] = useState(false);

    useEffect(() => {
        const el = ref.current;

        return dropTargetForElements({
            element: el!,
            onDragEnter: () => setIsDraggedOver(true),
            onDragLeave: () => setIsDraggedOver(false),
            onDrop: () => setIsDraggedOver(false),
            getData: () => ({ location })
        });
    }, []);

    function getColor(isDraggedOver: boolean): string {
        if (isDraggedOver) {
            return '#191919';
        }
        return "transparent"
    }

    return (
        <div className="emptySkillSquare" ref={ref} style={{ backgroundColor: getColor(isDraggedOver) }} id={props.id}>
            {props.skill !== undefined &&
                <SubclassingSkill skill={props.skill} skillLineName={props.skillLineName? props.skillLineName : ""} class={props.class? props.class : ""} id={`skill_bar_slot_${props.id}`}/>
            }
        </div>
    )
}

export default EmptySkillSquare
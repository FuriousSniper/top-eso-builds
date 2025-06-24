import { useEffect, useRef, useState } from 'react'
import './style.less'
import * as _ from "lodash";
import { SubclassingSkillType } from '../../../types/common'
import GenericModal from '../../Modals/GenericModal'
import Sidebar from '..';

interface SubclassingSidebarProps {
    saveBuildFunction: (name: string) => void
    selectBuild: (index: number) => void,
    deleteBuild: (index: number) => void,
    subclassingBuilds: Array<Record<string, Array<SubclassingSkillType>>>,
    skills: Array<SubclassingSkillType | undefined>,
}

const SubclassingSidebarRight = (props: SubclassingSidebarProps) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [effects, setEffects] = useState<Array<string>>([])

    const saveBuild = () => {
        let name = ""
        if (inputRef !== undefined) {
            name = inputRef.current!.value
        }
        props.saveBuildFunction(name)
    }

    useEffect(() => {
        const effectsTmp: Array<string> = []
        for (const skill of props.skills) {
            if (_.isUndefined(skill) || _.isUndefined(skill?.effects)) {
                continue
            }

            for (const skillEffect of skill.effects) {
                if (!effectsTmp.includes(skillEffect)) {
                    effectsTmp.push(skillEffect)
                }
            }
        }
        setEffects(effectsTmp.sort())
    }, [props.skills])

    return (
        <Sidebar side='right'>
            <>
                <h4 className="sidebarTitle">Details</h4>
                <div className="sidebarRow">
                    <label htmlFor="buildName">Build name</label>
                    <input type="text" name="buildName" id="buildName" ref={inputRef} max={30} />
                </div>
                <div className="sidebarRow">
                    <button type='button' onClick={saveBuild}>Save build</button>
                    <GenericModal subclassingBuilds={props.subclassingBuilds} selectBuild={props.selectBuild} deleteBuild={props.deleteBuild} buttonName="Show builds" />
                </div>
                <div className="sidebarRow">
                    <span>Effects</span>
                </div>
                {
                    effects.map((effect: string, key: number) => {
                        return (<div className="sidebarRow effectItem" key={key}>
                            <span>{effect}</span>
                        </div>
                        )
                    })
                }
            </>
        </Sidebar>
    )
}

export default SubclassingSidebarRight;



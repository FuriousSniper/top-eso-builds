import './style.less'
import '../style.less'
import * as _ from "lodash";
import { SubclassingSkillType } from '../../../types/common'

interface SubclassingBuildsModalProps {
    onClose: () => void,
    subclassingBuilds: Array<Record<string, Array<SubclassingSkillType>>>
    selectBuild: (index: number) => void,
    deleteBuild: (index: number) => void
}

const SubclassingBuildsModal = (props: SubclassingBuildsModalProps) => {
    const modalClick = () => {
        props.onClose()
    }

    const handleLoadClick = (buildIndex: number) =>{
        props.selectBuild(buildIndex)
    }

    const handleDeleteClick = (buildIndex: number) =>{
        props.deleteBuild(buildIndex)
    }

    return (
        <div className="backdrop">
            <div className="modal">
                <div className='modalTitle'>Builds</div>
                <div className="modalBuildsWrapper">
                    {
                        props.subclassingBuilds.map((value: Record<string, SubclassingSkillType[]>, key: number) => {
                            const object = Object.keys(value)
                            return (
                                <div className="modalGrid" key={key}>
                                    <span>{object[0]}</span>
                                    <div className="modalSkills">
                                        {value[object[0]].map((skill: SubclassingSkillType | null, _key: number) => {
                                            if (!_.isNull(skill) && !_.isUndefined(skill) ) {
                                                return (
                                                    <img src={`/icons/subclassing/${skill.icon}`}
                                                        id={`modal_${skill.id}`}
                                                        key={_key}
                                                        style={{ width: 16, height: 16 }}
                                                    />
                                                )
                                            }
                                            else {
                                                return (
                                                    <div className='emptySkill' key={_key}></div>
                                                )
                                            }
                                        })
                                        }
                                    </div>
                                    <div className='subclassControls'>
                                        <button type='button' onClick={()=>handleLoadClick(key)}>Load</button>
                                        <button type='button' onClick={()=>handleDeleteClick(key)}>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="modalRow">
                    <button onClick={modalClick}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default SubclassingBuildsModal

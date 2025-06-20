import FooterMenu from "../../components/FooterMenu"
import HeaderMenu from "../../components/HeaderMenu"
import { SubclassingSkillType } from "../../types/common";
import { useEffect, useState } from "react";
import { subclassingSkills } from "../../objects/skills/allSkillsArray";
import SkillLineGroup from "../../components/SkillLineGroup";
import './style.less'
import EmptySkillSquare from "../../components/EmptySkillSquare";
import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import SubclassingSidebarLeft from "../../components/SubclassingSidebarLeft";
import useTitle from "../../hooks/useTitle";
import SubclassingSidebarRight from "../../components/SubclassingSidebarRight";
import { checkLsObjectExistence, getFromLS, initSubclassing, setToLS } from "../../utils/utils";
import toast, { Toaster } from "react-hot-toast";

const SubclassingPage = () => {
    const [groupedSkills] = useState<Record<string, Record<string, Array<SubclassingSkillType>>>>(subclassingSkills)
    const [skills, setSkills] = useState<Array<SubclassingSkillType | undefined>>(Array<SubclassingSkillType | undefined>(12))
    const [selectedDebuffList, setSelectedDebuffList] = useState<Array<string>>([])
    const [allBuilds, setAllBuilds] = useState<Array<Record<string, Array<SubclassingSkillType>>>>([])
    useTitle(`Top ESO Builds: Subclassing`)
    const lsObjectKey = "subclassingBuilds"

    useEffect(() => {
        initializeSkills()

        if (!checkLsObjectExistence(lsObjectKey)) {
            initSubclassing(lsObjectKey)
        }

        const allItems = JSON.parse(getFromLS(lsObjectKey)!)
        setAllBuilds(allItems)
    }, [])


    useEffect(() => {
        monitorForElements({
            onDrop({ source, location }) {
                const destination = location.current.dropTargets[0];
                if (!destination) {
                    // if dropped outside of any drop targets
                    const draggedSkill = source.data.skill as SubclassingSkillType
                    const index = skills.findIndex((skill: SubclassingSkillType | undefined) => {
                        return skill?.id === draggedSkill.id
                    })
                    if (index === -1) {
                        return
                    }

                    const updatedSkills = [...skills]
                    updatedSkills[index] = undefined
                    setSkills(updatedSkills)
                    return;
                }
                else {
                    const updatedSkills = [...skills]
                    const draggedSkill = source.data.skill as SubclassingSkillType
                    const index = skills.findIndex((skill: SubclassingSkillType | undefined) => {
                        return skill?.id === draggedSkill.id
                    })

                    if (index !== -1) {
                        updatedSkills[index] = undefined
                    }

                    const destinationLocationIndex = Number(destination.element.id.split("_")[1]);

                    updatedSkills[destinationLocationIndex] = draggedSkill
                    setSkills(updatedSkills)
                }
            },
        });
    }, [skills])

    const initializeSkills = () => {
        const defaultValue = new Array<undefined>(12)
        for (let i = 0; i < defaultValue.length; i++) {
            defaultValue[i] = undefined
        }
        setSkills(defaultValue)
    }

    const toggleDebuff = (debuff: string) => {
        const tmp = [...selectedDebuffList]
        const index = tmp.indexOf(debuff)

        if (index !== -1) {
            tmp.splice(index, 1)
        }
        else {
            tmp.push(debuff)
        }
        setSelectedDebuffList(tmp)
    }

    useEffect(() => {
        if (selectedDebuffList.length === 0) {
            const selectedElements = document.getElementsByClassName("invalid_skill")
            for (let i = 0; i < selectedElements.length; i + 2) {
                //for some reason it only works for half elements. loop unrolling fixes the issue
                selectedElements[i].classList.remove("invalid_skill")
                selectedElements[i + 1]?.classList.remove("invalid_skill")
            }
            return
        }

        Object.entries(groupedSkills).forEach((value: [string, Record<string, SubclassingSkillType[]>]) => {
            Object.keys(value[1]).forEach((skillLineName: string) => {
                value[1][skillLineName].forEach((skill: SubclassingSkillType) => {
                    const skillEffects = skill.effects
                    let includes = false
                    for (let i = 0; i < skillEffects.length; i++) {
                        if (selectedDebuffList.includes(skillEffects[i])) {
                            includes = true
                            break
                        }
                    }

                    const skillHtml = document.getElementById(`ability_${skill.id}`)
                    const classPresent = skillHtml?.classList.contains("invalid_skill")

                    if (includes) {
                        if (classPresent) {
                            skillHtml?.classList.remove("invalid_skill")
                        }
                    }
                    else {
                        skillHtml?.classList.add("invalid_skill")
                    }
                })
            })
        })
    }, [groupedSkills, selectedDebuffList])

    const removeSkills = () => {
        initializeSkills()
    }

    const swapBars = () => {
        const bar1 = skills.slice(0, 6)
        const bar2 = skills.slice(6, 12)
        setSkills([...bar2, ...bar1])
    }

    const resetDebuffs = () => {
        setSelectedDebuffList([])
    }

    const sanitizeName = (name: string): string => {
        let tmp = name
        tmp = tmp.replace("'", "")
        tmp = tmp.replace('"', "")
        tmp = tmp.replace('`', "")
        return tmp
    }

    const saveBuild = (name: string) => {
        const safeName = sanitizeName(name)
        if (skills.length === 0 || skills === undefined || safeName === "") {
            return
        }

        const obj: Record<string, Array<SubclassingSkillType>> = {
            [safeName]: skills as Array<SubclassingSkillType>
        }

        const updatedBuilds = [...allBuilds, obj]
        setToLS(lsObjectKey, JSON.stringify(updatedBuilds))
        setAllBuilds(updatedBuilds)
        toast.success("Build saved")
    }

    const loadBuild = (index: number) => {
        const selectedBuild = Object.keys(allBuilds[index])
        const newArray = []

        for (const value of allBuilds[index][selectedBuild[0]]) {
            if (value === null) {
                newArray.push(undefined)
            }
            else {
                newArray.push(value)
            }
        }
        setSkills(newArray)
        toast.success("Build loaded")
    }

    const deleteBuild = (index: number) => {
        const updatedBuilds = [...allBuilds]
        updatedBuilds.splice(index, 1)
        setAllBuilds(updatedBuilds)
        toast.success("Build deleted")
    }

    return (
        <div className="content">
            <HeaderMenu />
            <div className="main">
                <div className="titleBanner">
                    <h2>Subclassing simulator (U46)</h2>
                </div>
                <div className="titleBanner stickyBars">
                    <div className="barControlButton" title="Remove skills" onClick={removeSkills}>
                        <svg width="50" height="50" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49985 0.877045C3.84216 0.877045 0.877014 3.84219 0.877014 7.49988C0.877014 9.1488 1.47963 10.657 2.47665 11.8162L1.64643 12.6464C1.45117 12.8417 1.45117 13.1583 1.64643 13.3535C1.8417 13.5488 2.15828 13.5488 2.35354 13.3535L3.18377 12.5233C4.34296 13.5202 5.85104 14.1227 7.49985 14.1227C11.1575 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 5.85107 13.5202 4.34299 12.5233 3.1838L13.3535 2.35354C13.5488 2.15827 13.5488 1.84169 13.3535 1.64643C13.1583 1.45117 12.8417 1.45117 12.6464 1.64643L11.8162 2.47668C10.657 1.47966 9.14877 0.877045 7.49985 0.877045ZM11.1422 3.15066C10.1567 2.32449 8.88639 1.82704 7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.88642 2.32446 10.1568 3.15063 11.1422L11.1422 3.15066ZM3.85776 11.8493C4.84317 12.6753 6.11343 13.1727 7.49985 13.1727C10.6328 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 6.11346 12.6753 4.8432 11.8493 3.85779L3.85776 11.8493Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    </div>
                    <div className="subclassingSkillBarsWrapper">
                        {skills.map((skill: SubclassingSkillType | undefined, key: number) => {
                            return <EmptySkillSquare skill={skill} key={key} id={`skill_${key}`} />
                        })}
                    </div>
                    <div className="barControlButton" title="Swap bars" onClick={swapBars}>
                        <svg width="50" height="50" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    </div>
                </div>
                <div className="menuWrapper">
                    <SubclassingSidebarLeft toggleFunction={toggleDebuff} resetFunction={resetDebuffs} />
                    <div className="skillLinesWrapper">
                        {Object.entries(groupedSkills).map((value: [string, Record<string, SubclassingSkillType[]>]) => {
                            return Object.keys(value[1]).map((skillLineName: string, key: number) => {
                                return <SkillLineGroup skillLineName={skillLineName} skills={value[1][skillLineName]} key={key} class={value[0]} />
                            })
                        })}
                    </div>
                    <SubclassingSidebarRight saveBuildFunction={saveBuild} subclassingBuilds={allBuilds} selectBuild={loadBuild} deleteBuild={deleteBuild} skills={skills} />
                </div>
                <Toaster
                    toastOptions={{
                        success: {
                            icon: <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="rgb(23, 184, 23)" fillRule="evenodd" clipRule="evenodd"></path></svg>,
                        },
                        error: {
                            icon: <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="rgb(182, 32, 32)" fillRule="evenodd" clipRule="evenodd"></path></svg>,
                        },
                        className: "toast",
                        duration: 3000
                    }}
                />
            </div>
            <FooterMenu />
        </div>
    )
}

export default SubclassingPage

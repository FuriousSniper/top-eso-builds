import { useRef, useState } from 'react'
import * as _ from "lodash";
import Sidebar from '..'
import './style.less'

interface SubclassingSidebarProps {
    toggleFunction: (debuff: string) => void,
    resetFunction: () => void,
}

const SubclassingSidebarLeft = (props: SubclassingSidebarProps) => {
    const [debuffName, setDebuffName] = useState<string>('')
    const ref = useRef<HTMLFormElement>(null)    
    const inputRef = useRef<HTMLInputElement>(null)
    const debuffs = { 'Major': ['Aegis', 'Berserk', 'Breach', 'Brittle', 'Brutality', 'Courage', 'Cowardice', 'Defile', 'Endurance', 'Enervation', 'Evasion', 'Expedition', 'Force', 'Fortitude', 'Heroism', 'Intellect', 'Lifesteal', 'Magickasteal', 'Maim', 'Mangle', 'Mending', 'Prophecy', 'Protection', 'Resolve', 'Savagery', 'Slayer', 'Sorcery', 'Timidity', 'Toughness', 'Uncertainty', 'Vitality', 'Vulnerability'], 'Minor': ['Aegis', 'Berserk', 'Breach', 'Brittle', 'Brutality', 'Courage', 'Cowardice', 'Defile', 'Endurance', 'Enervation', 'Evasion', 'Expedition', 'Force', 'Fortitude', 'Gallop', 'Heroism', 'Intellect', 'Lifesteal', 'Magickasteal', 'Maim', 'Mangle', 'Mending', 'Prophecy', 'Protection', 'Resolve', 'Savagery', 'Slayer', 'Sorcery', 'Timidity', 'Toughness', 'Uncertainty', 'Vitality', 'Vulnerability'], 'Other': ['Empower'] }

    const resetDebuffs = () => {
        props.resetFunction()
        const checkboxes = ref.current?.querySelectorAll("input")
        checkboxes?.forEach((checkbox: HTMLInputElement) => {
            checkbox.checked = false
        });
    }

    const handleChange = _.debounce(function () {
        if (!inputRef.current) {
            return
        }
        setDebuffName(inputRef.current?.value)
    }, 300)

    const deleteDebuffName = () => {
        setDebuffName('')
        if (!inputRef.current) {
            return
        }
        inputRef.current.value=""
    }

    const determineEffect = (category: string, effect: string) => {
        if (category === "Other") {
            return effect
        }

        return `${category} ${effect}`
    }

    return (
        <Sidebar side='left'>
            <form ref={ref}>
                <h4 className="sidebarTitle">Effects</h4>
                <div className="resetDebuffsWrapper">
                    <label htmlFor="debuffName"><span>Debuff name</span><div><input type="text" id='debuffName' ref={inputRef} onChange={handleChange} /><button type='button' onClick={deleteDebuffName}>X</button></div></label>
                </div>
                <div className="resetDebuffsWrapper">
                    <button onClick={resetDebuffs} type='button' className='resetDebuffsButton'>Reset</button>
                </div>
                {
                    Object.entries(debuffs).map((value: [string, string[]], _key: number) => {
                        return (
                            <>
                                <div className='category' key={_key}>{value[0]}</div>
                                {
                                    value[1].map((effect: string, key: number) => {
                                        if (effect.toLowerCase().includes(debuffName.toLowerCase())) {
                                            return (
                                                <label className="effect" key={key}>
                                                    <span>{effect}</span>
                                                    <input type="checkbox" name="effects" id={`effect_${key}`} onChange={() => props.toggleFunction(determineEffect(value[0], effect))} />
                                                </label>
                                            )
                                        }
                                    })
                                }
                            </>
                        )
                    })
                }
            </form>
        </Sidebar>
    )
}

export default SubclassingSidebarLeft;
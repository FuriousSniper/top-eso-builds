import { useEffect, useRef, useState } from 'react'
import './style.less'
interface SubclassingSidebarProps {
    toggleFunction: (debuff: string) => void,
}

const SubclassingSidebar = (props: SubclassingSidebarProps) => {
    const [isOpen, setIsOpen] = useState(true)
    const [width, setWidth] = useState(250)
    const ref = useRef<HTMLFormElement>(null)
    const debuffs = [
        "Empower",
        "Major Aegis",
        "Major Berserk",
        "Major Breach",
        "Major Brittle",
        "Major Brutality",
        "Major Courage",
        "Major Cowardice",
        "Major Defile",
        "Major Endurance",
        "Major Enervation",
        "Major Evasion",
        "Major Expedition",
        "Major Force",
        "Major Fortitude",
        "Major Heroism",
        "Major Intellect",
        "Major Lifesteal",
        "Major Magickasteal",
        "Major Maim",
        "Major Mangle",
        "Major Mending",
        "Major Prophecy",
        "Major Protection",
        "Major Resolve",
        "Major Savagery",
        "Major Slayer",
        "Major Sorcery",
        "Major Timidity",
        "Major Toughness",
        "Major Uncertainty",
        "Major Vitality",
        "Major Vulnerability",
        "Minor Aegis",
        "Minor Berserk",
        "Minor Breach",
        "Minor Brittle",
        "Minor Brutality",
        "Minor Courage",
        "Minor Cowardice",
        "Minor Defile",
        "Minor Endurance",
        "Minor Enervation",
        "Minor Evasion",
        "Minor Expedition",
        "Minor Force",
        "Minor Fortitude",
        "Minor Gallop",
        "Minor Heroism",
        "Minor Intellect",
        "Minor Lifesteal",
        "Minor Magickasteal",
        "Minor Maim",
        "Minor Mangle",
        "Minor Mending",
        "Minor Prophecy",
        "Minor Protection",
        "Minor Resolve",
        "Minor Savagery",
        "Minor Slayer",
        "Minor Sorcery",
        "Minor Timidity",
        "Minor Toughness",
        "Minor Uncertainty",
        "Minor Vitality",
        "Minor Vulnerability",
    ]

    useEffect(() => {
        if (isOpen) {
            const rect = ref.current?.getBoundingClientRect()

            if (rect) {
                setWidth(250);
            }
        }
        else {
            setWidth(0);
        }
    }, [isOpen]);

    const toggleTooltip = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="filtersWrapper" style={{ width: width }}>
            <form className="sidebarFilters" ref={ref}>
                {isOpen &&
                    <>
                        <h4 className="sidebarTitle">Effects</h4>
                        {debuffs.map((effect: string, key: number) => {
                            return (
                                <label className="effect" key={key}>
                                    <span>{effect}</span>
                                    <input type="checkbox" name="effects" id={`effect_${key}`} onChange={() => props.toggleFunction(effect)} />
                                </label>
                            )
                        })}
                    </>
                }
            </form>
            <button className='hideTooltipButton' onClick={toggleTooltip}>
                {isOpen &&
                    <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                }
                {
                    !isOpen &&
                    <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                }
            </button>
        </div>
    )
}

export default SubclassingSidebar;
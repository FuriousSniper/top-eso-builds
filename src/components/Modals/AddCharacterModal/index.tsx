import { useState } from 'react'
import './style.less'
import { classArray } from '../../../objects/misc'
interface AddCharacterModalProps {
    onClose: () => void,
    createChar: (className: string, name: string) => void
}

export default function AddCharacterModal(props: AddCharacterModalProps) {
    const [charName, setCharName] = useState("")
    const [selectClass, setSelectClass] = useState<string>("Arcanist")
    const modalClick = () => {
        props.onClose()
    }
    const changeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value
        if (!classArray.includes(value)) {
            return
        }
        setSelectClass(value)
    }
    const handleAdd = () => {
        if (!classArray.includes(selectClass)) {
            return
        }
        
        props.createChar(selectClass, charName==="" ? selectClass : charName)
        modalClick()
    }
    return (
        <div className="backdrop">
            <div className="modal">
                <div className='modalTitle'>Add character</div>
                <div className="modalRow">
                    <label htmlFor="charName">Character name</label><input type="text" value={charName} onChange={(event) => setCharName(event.target.value)} name='charName' id="charName" maxLength={30}/>
                </div>
                <div className="modalRow">
                    <label htmlFor="className">Class</label>
                    <select value={selectClass} onChange={(event) => changeSelect(event)} id="className">
                        <option value="Arcanist">Arcanist</option>
                        <option value="Dragonknight">Dragonknight</option>
                        <option value="Necromancer">Necromancer</option>
                        <option value="Nightblade">Nightblade</option>
                        <option value="Sorcerer">Sorcerer</option>
                        <option value="Templar">Templar</option>
                        <option value="Warden">Warden</option>
                    </select>
                </div>
                <div className="modalRow">
                    <button onClick={modalClick}>Close</button><button onClick={handleAdd}>Add</button>
                </div>
            </div>
        </div>
    );
}

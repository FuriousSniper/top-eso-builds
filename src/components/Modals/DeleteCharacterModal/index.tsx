import './style.less'
import '../style.less'

interface DeleteCharacterModalProps {
    onClose: () => void,
    deleteChar: () => void,
}

const DeleteCharacterModal = (props: DeleteCharacterModalProps) => {
    const modalClick = () => {
        props.onClose()
    }
    
    const handleDelete = () => {
        props.deleteChar()
        modalClick()
    }

    return (
        <div className="backdrop">
            <div className="modal">
                <div className='modalTitle'>Delete character</div>
                <div className="modalRow">
                    <p>Are you sure you want to delete that character?</p>
                </div>
                <div className="modalRow">
                    <button onClick={modalClick}>Close</button><button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteCharacterModal

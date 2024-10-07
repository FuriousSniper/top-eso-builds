import { useState } from 'react';
import { createPortal } from 'react-dom';
import AddCharacterModal from '../AddCharacterModal';

interface AddCharacterModalProps{
    createChar:(className: string, name: string) => void
}

interface GenericModalProps{
    buttonName: string,
    className?: string
}

type Props = GenericModalProps & AddCharacterModalProps
export default function GenericModal(props: Props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)} className={props.className}>
        {props.buttonName}
      </button>
      {showModal && createPortal(
        <AddCharacterModal onClose={() => setShowModal(false)} createChar={props.createChar}/>,
        document.body
      )}
    </>
  );
}

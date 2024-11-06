import { useState } from 'react';
import { createPortal } from 'react-dom';
import AddCharacterModal from '../AddCharacterModal';
import DeleteCharacterModal from '../DeleteCharacterModal';

type SpecificModalProps =
  | {
    createChar?: (className: string, name: string) => void
    deleteChar?: never;
  }
  | {
    createChar?: never;
    deleteChar?: () => void;
  };

interface GenericModalProps {
  buttonName: string,
  className?: string
}

type Props = GenericModalProps & SpecificModalProps
export default function GenericModal(props: Props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className={props.className}>
        {props.buttonName}
      </button>
      {(showModal && props.createChar) && createPortal(
        <AddCharacterModal onClose={() => setShowModal(false)} createChar={props.createChar} />,
        document.body
      )}
      {(showModal && props.deleteChar) && createPortal(
        <DeleteCharacterModal onClose={() => setShowModal(false)} deleteChar={props.deleteChar} />,
        document.body
      )}
    </>
  );
}

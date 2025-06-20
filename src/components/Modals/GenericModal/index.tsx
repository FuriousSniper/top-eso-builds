import { useState } from 'react';
import { createPortal } from 'react-dom';
import AddCharacterModal from '../AddCharacterModal';
import DeleteCharacterModal from '../DeleteCharacterModal';
import { SubclassingSkillType } from '../../../types/common';
import SubclassingBuildsModal from '../SubclassingBuildsModal';

type SpecificModalProps =
  | {
    createChar?: (className: string, name: string) => void
    deleteChar?: never;
    subclassingBuilds?: never
    selectBuild?: never,
    deleteBuild?: never
  }
  | {
    createChar?: never;
    deleteChar?: () => void;
    subclassingBuilds?: never
    selectBuild?: never,
    deleteBuild?: never
  }| {
    createChar?: never;
    deleteChar?: never;
    subclassingBuilds?: Array<Record<string,Array<SubclassingSkillType>>>
    selectBuild?: (index: number) => void,
    deleteBuild?: (index: number) => void
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
      <button onClick={() => setShowModal(true)} className={props.className} type='button'>
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
      {(showModal && props.selectBuild && props.subclassingBuilds && props.deleteBuild) && createPortal(
        <SubclassingBuildsModal onClose={() => setShowModal(false)} subclassingBuilds={props.subclassingBuilds} selectBuild={props.selectBuild} deleteBuild={props.deleteBuild} />,
        document.body
      )}
    </>
  );
}

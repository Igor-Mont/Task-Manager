import { useContext } from 'react';
import Modal from "react-modal";
import { ModalContext } from '../../contexts/ModalProvider';
import { Container } from './styles';

function DeleteTaskModal(): JSX.Element {
  const {
    handleOpenModal,
    isDeleteTaskModalOpen,
  } = useContext(ModalContext);

  const onRequestClose = () => handleOpenModal('delete', false);

  return (
    <Modal
      isOpen={isDeleteTaskModalOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h1>Delete Task Modal</h1>
      </Container>
    </Modal>
  );
}

export { DeleteTaskModal };
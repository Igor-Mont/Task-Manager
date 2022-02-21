import { useContext } from 'react';
import Modal from "react-modal";
import { ModalContext } from '../../contexts/ModalProvider';
import { Container } from './styles';

function CreateTaskModal(): JSX.Element {
  const {
    handleOpenModal,
    isCreateTaskModalOpen,
  } = useContext(ModalContext);

  const onRequestClose = () => handleOpenModal('create', false);

  return (
    <Modal
      isOpen={isCreateTaskModalOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h1>Create Task Modal</h1>
      </Container>
    </Modal>
  );
}

export { CreateTaskModal };
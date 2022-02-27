import { useContext } from 'react';
import Modal from "react-modal";
import { ModalContext } from '../../contexts/ModalProvider';
import { FormTask } from '../FormTask';
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
        <h2>Create Task Modal</h2>
        <FormTask action_word='Create' />
      </Container>
    </Modal>
  );
}

export { CreateTaskModal };
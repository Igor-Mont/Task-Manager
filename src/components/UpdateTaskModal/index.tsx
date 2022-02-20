import { useContext } from 'react';
import Modal from "react-modal";
import { ModalContext } from '../../contexts/ModalProvider';
import { Container } from './styles';

function UpdateTaskModal(): JSX.Element {
  const {
    handleOpenModal,
    isUpdateTaskModalOpen,
  } = useContext(ModalContext);

  const onRequestClose = () => handleOpenModal('update', false);

  return (
    <Modal
      isOpen={isUpdateTaskModalOpen}
      onRequestClose={onRequestClose}
    >
      <Container>
        <h1>Delete Task Modal</h1>
      </Container>
    </Modal>
  );
}

export { UpdateTaskModal };
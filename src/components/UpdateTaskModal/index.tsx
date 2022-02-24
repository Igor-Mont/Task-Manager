import { useContext } from 'react';
import Modal from "react-modal";
import { ModalContext } from '../../contexts/ModalProvider';
import { Container } from './styles';
import closeImg from '../../assets/close.svg'
import { FormTask } from '../FormTask';


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
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
      <button 
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={closeImg} alt="Fechar modal" />
        </button>
        <h2>Update Task Modal</h2>
        <FormTask />
      </Container>
    </Modal>
  );
}

export { UpdateTaskModal };
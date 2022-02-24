import { useContext } from 'react';
import Modal from "react-modal";
import { ModalContext } from '../../contexts/ModalProvider';
import { Container } from './styles';
import closeImg from '../../assets/close.svg'

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
        <button 
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={closeImg} alt="Fechar modal" />
        </button>
        <h2>Delete Task nameTask</h2>
        <div className='box-btn'>
          <button className='cancel' onClick={onRequestClose}>Cancel</button>
          <button type='submit'>Confirm</button>
        </div>

      </Container>
    </Modal>
  );
}

export { DeleteTaskModal };
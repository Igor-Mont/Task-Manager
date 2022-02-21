import { Container } from './styles';
import editIMG from '../../assets/edit.svg'
import deleteIMG from '../../assets/delete.svg'
import completeIMG from '../../assets/complete.svg'
import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalProvider';

function Task(): JSX.Element {

  const { isCreateTaskModalOpen, handleOpenModal } = useContext(ModalContext);

  return (
    <Container>
      <div className="box-title">
        <h3>Title</h3>
      </div>
      <div className="functional-box">
        <button onClick={() => handleOpenModal('delete', true)}>
          <img src={deleteIMG} alt="Delete" />
        </button>
        <button onClick={() => handleOpenModal('update', true)}>
          <img src={editIMG} alt="Edit" />
        </button>
        <button>
          <img src={completeIMG} alt="Complete" />
        </button>
      </div>
    </Container>
  );
}

export { Task };
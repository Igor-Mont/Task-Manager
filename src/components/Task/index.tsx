import { Container } from './styles';
import { useDrag, useDrop } from 'react-dnd';
import editIMG from '../../assets/edit.svg'
import deleteIMG from '../../assets/delete.svg'
import completeIMG from '../../assets/complete.svg'
import { useContext, useRef } from 'react';
import { ModalContext } from '../../contexts/ModalProvider';

type TaskProps = {
  title: string;
  id: number;
  index: number;
}

type Item = {
  type: string;
  index: number;
}

function Task({ id, title, index }: TaskProps): JSX.Element {
  const ref = useRef();
  const { handleOpenModal } = useContext(ModalContext);

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'TASK', index},
    collect: monitor => ({
      isDragging: monitor.isDragging,
    }),
    type: 'TASK'
  });

  const [, dropRef ] = useDrop({
    accept: 'TASK',
    hover(item: Item , monitor) {
      console.log(item.index);
      console.log(index)
    }
  });

  dragRef(dropRef(ref))

  return (
    <Container ref={ref}>
      <div className="box-title">
        <h3>{title}</h3>
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
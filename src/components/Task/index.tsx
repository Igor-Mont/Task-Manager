import { Container } from './styles';
import { useDrag, useDrop } from 'react-dnd';
import editIMG from '../../assets/edit.svg'
import deleteIMG from '../../assets/delete.svg'
import completeIMG from '../../assets/complete.svg'
import { useContext, useRef } from 'react';
import { ModalContext } from '../../contexts/ModalProvider';
import { TaskContext } from '../../contexts/TasksContext';

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
  const { move } = useContext(TaskContext);

  const ref = useRef<HTMLDivElement>();
  const { handleOpenModal } = useContext(ModalContext);

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'TASK', index},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
    type: 'TASK'
  });

  const [, dropRef ] = useDrop({
    accept: 'TASK',
    hover(item: Item , monitor) {
      const draggedIndex = item.index;
      const targetIndex = index;

      if(draggedIndex === targetIndex) return;

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if(draggedIndex < targetIndex && draggedTop < targetCenter) return;

      if(draggedIndex > targetIndex && draggedTop > targetCenter) return;

      move(draggedIndex, targetIndex);

      item.index = targetIndex;
    }
  });

  dragRef(dropRef(ref))

  return (
    <Container isDragging={isDragging} ref={ref}>
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
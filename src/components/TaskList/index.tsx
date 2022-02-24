import { useContext } from 'react';
import { TaskContext } from '../../contexts/TasksContext';
import { Task } from '../Task';
import { Container } from './styles';

const colors = ['green', 'pink', 'red', 'black'];

function TaskList(): JSX.Element {
  const { tasks } = useContext(TaskContext);

  return (
    <Container>
      {tasks.map((task, index) => (<Task key={index} id={task.id} title={task.title} index={index}/>))}
    </Container>
  );
}

export { TaskList };
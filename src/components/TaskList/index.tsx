import { useContext } from 'react';
import { TaskContext } from '../../contexts/TasksContext';
import { Task } from '../Task';
import { Container } from './styles';
type Task = {
  title: string;
  id: number;
  index: number;
}

type TaskListProps = {
  tasks: Task[];
}


function TaskList({ tasks }: TaskListProps): JSX.Element {
  
  return (
    <Container>
      {tasks.map((task, index) => (<Task key={index} id={task.id} title={task.title} index={index}/>))}
    </Container>
  );
}

export { TaskList };
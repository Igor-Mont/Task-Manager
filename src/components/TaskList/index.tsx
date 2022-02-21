import { Task } from '../Task';
import { Container } from './styles';

const data = [
  {
    id: 1,
    title: 'Title 1'
  },
  {
    id: 2,
    title: 'Title 2'
  },
  {
    id: 3,
    title: 'Title 3'
  },
  {
    id: 4,
    title: 'Title 4'
  },
  

]

function TaskList(): JSX.Element {
  return (
    <Container>
      {data.map((task, index) => (<Task id={task.id} title={task.title} index={index}/>))}
    </Container>
  );
}

export { TaskList };
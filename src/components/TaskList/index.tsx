import { Task } from '../Task';
import { Container } from './styles';

function TaskList(): JSX.Element {
  return (
    <Container>
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </Container>
  );
}

export { TaskList };
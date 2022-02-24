import { Container } from "./styles";
import { TaskList } from "../TaskList";


function MainBox() {

  return (
    <Container>
      <h2>Hello, Igor</h2>
      <input type="search" placeholder="Search Task" />
      <TaskList />
    </Container>
  );
}

export { MainBox };
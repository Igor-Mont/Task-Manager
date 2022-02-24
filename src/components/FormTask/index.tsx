import { Container } from "./styles";

function FormTask() {
  return (
    <Container>
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Description" />
      <input type="date" placeholder="Due date" />
      <input type="number" max={5} min={1} value={0} placeholder="Priorty Level" />
      <button type="submit">
        Update
      </button>
    </Container>
  );
}

export { FormTask };
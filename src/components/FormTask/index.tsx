import { Container } from "./styles";

type FormTaskProps = {
  action_word: string;
}

function FormTask({ action_word }: FormTaskProps) {
  return (
    <Container>
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Description" />
      <input type="date" placeholder="Due date" />
      <input type="number" max={5} min={1} value={0} placeholder="Priorty Level" />
      <button type="submit">
        {action_word}
      </button>
    </Container>
  );
}

export { FormTask };
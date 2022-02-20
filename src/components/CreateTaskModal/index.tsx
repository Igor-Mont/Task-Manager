import { Container } from './styles';

type CreateTaskModalProps = {
  isOpen: boolean;
  onRequestClose: (modal: string, isOn: boolean) => void;
}

function CreateTaskModal({ isOpen, onRequestClose }: CreateTaskModalProps): JSX.Element {
  return (
    <Container>
      <h1>Create Task Modal</h1>
    </Container>
  );
}

export { CreateTaskModal };
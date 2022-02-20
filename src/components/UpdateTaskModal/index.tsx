import { Container } from './styles';

type UpdateTaskModalProps = {
  isOpen: boolean;
  onRequestClose: (modal: string, isOn: boolean) => void;
}

function UpdateTaskModal({ isOpen, onRequestClose }: UpdateTaskModalProps): JSX.Element {
  return (
    <Container>
      <h1>Create Task Modal</h1>
    </Container>
  );
}

export { UpdateTaskModal };
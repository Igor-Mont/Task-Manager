import { Container } from './styles';

type DeleteTaskModalProps = {
  isOpen: boolean;
  onRequestClose: (modal: string, isOn: boolean) => void;
}

function DeleteTaskModal({ isOpen, onRequestClose }: DeleteTaskModalProps): JSX.Element {
  return (
    <Container>
      <h1>Delete Task Modal</h1>
    </Container>
  );
}

export { DeleteTaskModal };
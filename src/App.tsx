import { HTML5Backend } from 'react-dnd-html5-backend';
import { CreateTaskModal } from "./components/CreateTaskModal";
import { DeleteTaskModal } from "./components/DeleteTaskModal";
import { TaskList } from "./components/TaskList";
import { UpdateTaskModal } from "./components/UpdateTaskModal";
import { DndProvider } from 'react-dnd';
import { GlobalStyle } from "./styles/global";
import { ModalContextProvider } from './contexts/ModalProvider'
import Modal from "react-modal";

Modal.setAppElement('#root');

function App() {

  return (
    <ModalContextProvider>
      <DndProvider backend={HTML5Backend}>
        <GlobalStyle />
        <TaskList />
        <CreateTaskModal />
        <UpdateTaskModal />
        <DeleteTaskModal />
      </DndProvider>
    </ModalContextProvider>
  )
}

export { App };
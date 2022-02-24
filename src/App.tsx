import { HTML5Backend } from 'react-dnd-html5-backend';
import { CreateTaskModal } from "./components/CreateTaskModal";
import { DeleteTaskModal } from "./components/DeleteTaskModal";
import { UpdateTaskModal } from "./components/UpdateTaskModal";
import { DndProvider } from 'react-dnd';
import { GlobalStyle } from "./styles/global";
import { ModalContextProvider } from './contexts/ModalProvider'
import Modal from "react-modal";
import { TaskContextProvider } from './contexts/TasksContext';
import { MainBox } from './components/MainBox';

Modal.setAppElement('#root');

function App() {

  return (
    <ModalContextProvider>
        <GlobalStyle />
      <DndProvider backend={HTML5Backend}>
        <TaskContextProvider>
          <MainBox />
        </TaskContextProvider>
      </DndProvider>
        <CreateTaskModal />
        <UpdateTaskModal />
        <DeleteTaskModal />
    </ModalContextProvider>
  )
}

export { App };
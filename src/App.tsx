import { useContext } from "react";
import { CreateTaskModal } from "./components/CreateTaskModal";
import { DeleteTaskModal } from "./components/DeleteTaskModal";
import { TaskList } from "./components/TaskList";
import { UpdateTaskModal } from "./components/UpdateTaskModal";
import { ModalContext } from "./contexts/ModalProvider";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";

Modal.setAppElement('#root');

function App() {
  const {
    handleOpenModal,
    isCreateTaskModalOpen,
    isDeleteTaskModalOpen,
    isUpdateTaskModalOpen
  } = useContext(ModalContext);

  return (
    <>
      <GlobalStyle />
      <TaskList />
      <CreateTaskModal />
      <UpdateTaskModal />
      <DeleteTaskModal />
    </>
  )
}

export { App };
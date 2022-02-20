import { useContext, useState } from "react";
import { CreateTaskModal } from "./components/CreateTaskModal";
import { DeleteTaskModal } from "./components/DeleteTaskModal";
import { TaskList } from "./components/TaskList";
import { UpdateTaskModal } from "./components/UpdateTaskModal";
import { ModalContext } from "./contexts/ModalProvider";
import { GlobalStyle } from "./styles/global";

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
      <CreateTaskModal
        isOpen={isCreateTaskModalOpen}
        onRequestClose={handleOpenModal}
      />
      <UpdateTaskModal
        isOpen={isUpdateTaskModalOpen}
        onRequestClose={handleOpenModal}
      />
      <DeleteTaskModal
        isOpen={isDeleteTaskModalOpen}
        onRequestClose={handleOpenModal}
      />
    </>
  )
}

export { App };
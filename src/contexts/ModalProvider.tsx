import { createContext, ReactNode, useState } from "react";

type ModalContextProviderProps = {
  children: ReactNode
}

type ModalContextType = {
  isCreateTaskModalOpen: boolean;
  isUpdateTaskModalOpen: boolean;
  isDeleteTaskModalOpen: boolean;
  handleOpenModal(modal: string, isOn: boolean): void;
}

export const ModalContext = createContext({} as ModalContextType);

function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);
  const [isUpdateTaskModalOpen, setIsUpdateTaskModalOpen] = useState(false);
  const [isDeleteTaskModalOpen, setIsDeleteTaskModalOpen] = useState(false);

  function handleOpenModal(modal: string, isOn: boolean): void {
    const changeState = {
      create: () => {
        console.log('Modal CreateTask!')
        setIsCreateTaskModalOpen(isOn)
      },
      update: () => {
        console.log('Modal UpdateTask!')
        setIsUpdateTaskModalOpen(isOn)
      },
      delete: () => {
        console.log('Modal DeleteTask!')
        setIsDeleteTaskModalOpen(isOn)
      }
    };

    const setState = changeState[modal]

    setState();
  }
  
  return (
  <ModalContext.Provider value={{
    isCreateTaskModalOpen,
    isUpdateTaskModalOpen,
    isDeleteTaskModalOpen,
    handleOpenModal
  }}>
    {children}
  </ModalContext.Provider>    
  );
}

export { ModalContextProvider };



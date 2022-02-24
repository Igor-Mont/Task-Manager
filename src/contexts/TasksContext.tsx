import { createContext, ReactNode, useState } from 'react';
import produce from 'immer';

type Task = {
  title: string;
  id: number;
  index: number;
}

type TaskContentType = {
  tasks: Task[];
  move: (from: number, to: number) => void;
}

type TaskContextProviderProps = {
  children: ReactNode;
}
const data = [
  {
    id: 1,
    title: 'Title 1',
    index: 0
  },
  {
    id: 2,
    title: 'Title 2',
    index: 1
  },
  {
    id: 3,
    title: 'Title 3',
    index: 2
  },
  {
    id: 4,
    title: 'Title 4',
    index: 3
  },
  {
    id: 5,
    title: 'Title 5',
    index: 4
  },
  {
    id: 6,
    title: 'Title 6',
    index: 5
  },
  {
    id: 7,
    title: 'Title 7',
    index: 7
  }
]


export const TaskContext = createContext({} as TaskContentType);

function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [tasks, setTasks] = useState<Task[]>(data);

  function move(from: number, to: number) {
    setTasks(produce(tasks, draft => {
      const dragged = draft[from];

      draft.splice(from, 1);
      draft.splice(to, 0, dragged);
    }));

  }

  return (
    <TaskContext.Provider value={{ tasks, move }}>
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContextProvider };
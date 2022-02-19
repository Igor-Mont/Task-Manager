import { Task } from "./components/Task";
import { TaskList } from "./components/TaskList";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <TaskList />
    </>
  )
}

export { App };
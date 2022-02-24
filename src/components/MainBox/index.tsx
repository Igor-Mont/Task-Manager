import { Container } from "./styles";
import { TaskList } from "../TaskList";
import { useContext, useState } from "react";
import { TaskContext } from "../../contexts/TasksContext";
import { Task } from "../Task";


function MainBox() {
  const { tasks } = useContext(TaskContext);
  const [searchValue, setSearchValue] = useState('');

  const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(searchValue.trim()))

  return (
    <Container>
      <h2>Hello, Igor</h2>
      <input value={searchValue} onChange={e => setSearchValue(e.target.value)} type="search" placeholder="Search Task" />
      {!searchValue ? <TaskList tasks={tasks} /> : <TaskList tasks={filteredTasks} />}
    </Container>
  );
}

export { MainBox };
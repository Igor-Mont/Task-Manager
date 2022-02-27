import { Container } from "./styles";
import { TaskList } from "../TaskList";
import { useContext, useState } from "react";
import { TaskContext } from "../../contexts/TasksContext";
import addImg from '../../assets/add.svg'
import { ModalContext } from "../../contexts/ModalProvider";

function MainBox() {
  const { tasks } = useContext(TaskContext);
  const { handleOpenModal, isCreateTaskModalOpen } = useContext(ModalContext);
  const [searchValue, setSearchValue] = useState('');

  const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(searchValue.trim()))

  return (
    <Container>
      <div className="top">
        <h2>Hello, Igor</h2>
        <div>
          <input value={searchValue} onChange={e => setSearchValue(e.target.value)} type="search" placeholder="Search Task" />
          <button onClick={() => handleOpenModal('create', true)}>
            <img src={addImg} alt="Add" />
          </button>
        </div>
      </div>
      {!searchValue ? <TaskList tasks={tasks} /> : <TaskList tasks={filteredTasks} />}
    </Container>
  );
}

export { MainBox };
import TaskProvider from "../../context/TaskContext";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const MainTask = () => {
  return (
    <>
      <h1>Welcome CRUD App...... </h1>
      <TaskProvider>
        <AddTask />
        <TaskList />
      </TaskProvider>
    </>
  );
};
export default MainTask;

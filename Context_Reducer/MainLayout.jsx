import AddTask from "./AddTask";
import TaskList from "./TaskList";
import TaskProvider from "../context/TasksContext";

const MainLayout = () => {
  return (
    <>
      <TaskProvider>
        <AddTask />
        <TaskList />
      </TaskProvider>
    </>
  );
};
export default MainLayout;

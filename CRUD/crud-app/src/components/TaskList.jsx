import { useTasks } from "../../context/TaskContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default TaskList;

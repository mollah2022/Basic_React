import { useTasks } from "../context/TasksContext";
import Task from "./Task";

const TaskList = () => {
  const { todos } = useTasks();
  return (
    <>
      <div className="todo-list">
        {
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <Task todo={todo} />
              </li>
            ))}
          </ul>
        }
      </div>
    </>
  );
};
export default TaskList;

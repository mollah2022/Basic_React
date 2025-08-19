import { createContext, useContext, useReducer } from "react";
import initialTaskData from "../data/initialTaskData";
import Reducer from "../reducers/Reducer";

export const TasksContext = createContext(null);

export default function TaskProvider({ children }) {
  const [todos, dispatch] = useReducer(Reducer, initialTaskData);

  const TaskDeleteHandler = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  };

  const TaskUpdateHandler = (updateTask) => {
    dispatch({
      type: "updated",
      task: updateTask,
    });
  };

  const AddTaskHandler = (addTask) => {
    dispatch({
      type: "added",
      task: addTask,
    });
  };
  return (
    <TasksContext.Provider
      value={{
        todos,
        onAddTask: AddTaskHandler,
        onDeleteTask: TaskDeleteHandler,
        onUpdateTask: TaskUpdateHandler,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export const useTasks = () => {
  return useContext(TasksContext);
};

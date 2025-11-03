import { createContext, useContext, useReducer } from "react";
import Reducer from "../reducer/Reducer";
import initialTask from "./../data/initialTask";

export const TaskContext = createContext(null);

export default function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(Reducer, initialTask);

  const ChangeTaskHandler = (updateTask) => {
    dispatch({
      type: "Changed",
      updateTask,
    });
  };

  const DeleteTaskHandler = (taskId) => {
    dispatch({
      type: "Delete",
      taskId,
    });
  };

  const AddTaskHandler = (addTask) => {
    dispatch({
      type: "Added",
      addTask,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        onChangeTask: ChangeTaskHandler,
        onDeleteTask: DeleteTaskHandler,
        onAddTask: AddTaskHandler,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export const useTasks = () => {
  return useContext(TaskContext);
};

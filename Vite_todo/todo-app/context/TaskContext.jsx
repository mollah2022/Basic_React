import { createContext, useReducer, useContext } from "react";
import reducer from "../reducer/reducer";
import initialTask from "../data/initialTask";

export const TaskContext = createContext(null);

export default function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(reducer, initialTask);

  const ChnageTaskHandler = (updateTask) => {
    dispatch({
      type: "Change",
      updateTask,
    });
  };

  const AddTaskHandler = (recTask) => {
    dispatch({
      type: "Added",
      text: recTask.text,
    });
  };

  const DeleteTaskHandler = (taskId) => {
    dispatch({
      type: "Delete",
      taskId,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        onChangeTask: ChnageTaskHandler,
        onAddTask: AddTaskHandler,
        onDeleteTask: DeleteTaskHandler,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export const useTask = () => {
  return useContext(TaskContext);
};

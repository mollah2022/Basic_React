import { createContext, useContext, useReducer } from "react";
import initialTask from "../data/initialTask";
import reducer from "../reducer/reducer";

export const TaskContext = createContext(null);

let indexId = 7;

export default function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(reducer, initialTask);
  function handleChange(task) {
    // const chnageTask = tasks.map((t) => {
    //   if (t.id === task.id) {
    //     return {
    //       ...t,
    //       text: task.text,
    //       done: task.done,
    //     };
    //   } else {
    //     return t;
    //   }
    // });
    // setTask(chnageTask);
    dispatch({
      type: "changed",
      task,
    });
  }

  function deleteTask(taskId) {
    // const deleteValue = tasks.filter((task) => {
    //   if (task.id !== taskId) {
    //     return { ...task };
    //   }
    // });
    // setTask(deleteValue);
    dispatch({
      type: "delete",
      id: taskId,
    });
  }

  function handleAddTask(text) {
    // setTask([
    //   ...tasks,
    //   {
    //     id: indexId++,
    //     text: text,
    //     done: false,
    //   },
    // ]);
    dispatch({
      type: "added",
      text: text,
      id: indexId++,
    });
  }
  return (
    <TaskContext.Provider
      value={{
        tasks,
        onAddTask: handleAddTask,
        onchange: handleChange,
        ondelete: deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
export const useTasks = () => {
  return useContext(TaskContext);
};

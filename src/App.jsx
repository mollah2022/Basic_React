import AddTask from "./component/AddTask";
import Tasklist from "./component/TaskList";
import initialTask from "./data/initialTask";
import { useReducer, useState } from "react";
import reducer from "./reducers/reducer";

let nextId = 7;

function App() {
  // const [tasks, setTasks] = useState(initialTask);
  const [tasks, dispatch] = useReducer(reducer, initialTask);

  const handleAddTask = (text) => {
    // setTasks([
    //   ...tasks,
    //   {
    //     id: nextId++,
    //     text: text,
    //     done: false,
    //   },
    // ]);
    dispatch({
      type: "added",
      text: text,
      id: nextId++,
    });
  };

  const handleChangeTask = (task) => {
    // const chnageTask = tasks.map((t) => {
    //   if (t.id === task.id) {
    //     return { ...t, text: task.text, done: task.done };
    //   } else {
    //     return t;
    //   }
    // });
    // setTasks(chnageTask);
    dispatch({
      type: "changed",
      task,
    });
  };

  const handleDeleteTask = (taskId) => {
    // const DeleteTask = tasks.filter((t) => {
    //   if (t.id !== taskId) {
    //     return { ...t };
    //   }
    // });
    // setTasks(DeleteTask);
    dispatch({
      type: "delete",
      id: taskId,
    });
  };

  return (
    <>
      <h1>Todo APP</h1>
      <AddTask onAddTask={handleAddTask} />
      <Tasklist
        tasks={tasks}
        onChnageTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

export default App;

import { useState } from "react";
import AddTask from "./component/AddTask";
import TaskList from "./component/TaskList";
import initialTask from "./data/initialTask";

let indexId = 7;

function App() {
  const [tasks, setTask] = useState(initialTask);

  function handleChange(task) {
    const chnageTask = tasks.map((t) => {
      if (t.id === task.id) {
        return {
          ...t,
          text: task.text,
          done: task.done,
        };
      } else {
        return t;
      }
    });
    setTask(chnageTask);
  }

  function deleteTask(taskId) {
    const deleteValue = tasks.filter((task) => {
      if (task.id !== taskId) {
        return { ...task };
      }
    });
    setTask(deleteValue);
  }

  function handleAddTask(text) {
    setTask([
      ...tasks,
      {
        id: indexId++,
        text: text,
        done: false,
      },
    ]);
  }

  return (
    <>
      <h1>Todo APP</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onchange={handleChange} ondelete={deleteTask} />
    </>
  );
}

export default App;

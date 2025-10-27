import { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import initialTask from "./../data/initialTask";

let nextId = 5;
const MainTask = () => {
  const [tasks, setTasks] = useState(initialTask);

  const AddTaskHandler = (value) => {
    let newTask = {
      id: nextId++,
      text: value,
      done: false,
    };
    setTasks([...tasks, newTask]);
  };

  const ChangeHandler = (updateTask) => {
    let changeTask = tasks.map((t) => {
      if (t.id === updateTask.id) {
        return {
          ...t,
          text: updateTask.text,
          done: updateTask.done,
        };
      } else {
        return t;
      }
    });
    setTasks(changeTask);
  };

  const DeleteTaskHandler = (taskId) => {
    const dlete = tasks.filter((t) => t.id !== taskId);
    setTasks(dlete);
  };

  return (
    <>
      <div className="h-screen w-full bg-gray-400 text-white text-center">
        <AddTask onAddTask={AddTaskHandler} />
        <TaskList
          tasks={tasks}
          onDeleteTask={DeleteTaskHandler}
          onChnageTask={ChangeHandler}
        />
      </div>
    </>
  );
};

export default MainTask;

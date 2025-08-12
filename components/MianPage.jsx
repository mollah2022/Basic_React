import { useState } from "react";
import TaskData from "../Data/TaskData";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const MainPage = () => {
  const [tasks, setTask] = useState(TaskData);

  const DeleteHandler = (taskId) => {
    let NewValue = tasks.filter((task) => task.id !== taskId);
    setTask(NewValue);
  };

  const TaskUpdateHandler = (updateValue) => {
    let updateTask = tasks.map((task) => {
      if (task.id === updateValue.id) {
        return {
          ...task,
          task: updateValue.task,
          complete: updateValue.complete,
        };
      }
      return task;
    });
    setTask(updateTask);
  };

  const CreateTaskHandler = (TaskValue) => {
    if (TaskValue.trim() === "") return;
    let newTask = {
      id: Date.now(),
      task: TaskValue,
      complete: false,
    };
    setTask([...tasks, newTask]);
  };

  return (
    <>
      <AddTask onCreateTask={CreateTaskHandler} />
      <TaskList
        tasks={tasks}
        onDeleteTask={DeleteHandler}
        onTaskUpdateHandler={TaskUpdateHandler}
      />
    </>
  );
};
export default MainPage;

import { useReducer } from "react";
import TaskData from "../Data/TaskData";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import TaskReducer from "../Reducers/TaskReducer";

const MainPage = () => {
  const [tasks, dispatch] = useReducer(TaskReducer, TaskData);

  const CreateTaskHandler = (taskValue) => {
    dispatch({ type: "added", payload: { task: taskValue } });
  };

  const DeleteHandler = (taskId) => {
    dispatch({ type: "deleted", payload: { id: taskId } });
  };

  const TaskUpdateHandler = (updateValue) => {
    dispatch({ type: "updated", payload: updateValue });
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

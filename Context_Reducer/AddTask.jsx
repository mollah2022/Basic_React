import { useState } from "react";
import { useTasks } from "../context/TasksContext";

const AddTask = () => {
  const [text, setText] = useState("");
  const { onAddTask } = useTasks();

  const AddButton = () => {
    onAddTask(text);
    setText("");
  };

  return (
    <>
      <div>
        <h1>Welcome ToDo App</h1>
      </div>
      <div className="add-task">
        <input
          type="text"
          placeholder="Add New Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />{" "}
        <button onClick={AddButton}>AddToDo</button>
      </div>
    </>
  );
};
export default AddTask;

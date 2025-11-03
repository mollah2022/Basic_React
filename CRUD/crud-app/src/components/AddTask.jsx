import { useState } from "react";
import { useTasks } from "../../context/TaskContext";

const AddTask = () => {
  const [text, setText] = useState("");
  const { onAddTask } = useTasks();

  const AddTask = () => {
    if (text.trim() === "") return;
    onAddTask(text);
    setText("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Add Task......"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={AddTask}>Crate</button>
    </>
  );
};
export default AddTask;

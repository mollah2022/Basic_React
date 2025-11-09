import { useState } from "react";
import { useTask } from "../../context/TaskContext";

const AddTask = () => {
  const [text, setText] = useState("");
  const { onAddTask } = useTask();

  const AddHandler = () => {
    if (text.trim() === "") return;
    onAddTask({ text });
    setText("");
  };

  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Add Task...."
      />
      <button onClick={AddHandler}>Create</button>
    </>
  );
};
export default AddTask;

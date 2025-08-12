import { useState } from "react";

const AddTask = ({ onCreateTask }) => {
  const [text, setText] = useState("");

  const addTaskHandler = () => {
    onCreateTask(text);
    setText("");
  };

  return (
    <>
      <h1>ToDo app</h1>
      <input
        type="text"
        placeholder="Add ToDo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTaskHandler}>AddToDo</button>
    </>
  );
};
export default AddTask;

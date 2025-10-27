import { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState("");

  const addValue = () => {
    if (text.trim() === "") return;
    onAddTask(text);
    setText("");
  };

  return (
    <>
      <div className="pt-10">
        <h1 className="text-5xl mb-5 p-5 bg-white text-black font-bold w-5xl m-auto rounded-2xl shadow-2xl">
          Welcome Todo App...
        </h1>
        <div className="mb-5 p-5 bg-white text-black  w-5xl m-auto rounded-2xl shadow-2xl">
          <input
            className="text-black rounded-2xl shadow-2xs mr-12 px-5 py-2 border border-2"
            type="text"
            placeholder="add task......"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={addValue}
            className="bg-gray-200 text to-black px-5  py-2 rounded-2xl shadow-2xl focus:border backdrop-blur-2xl"
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
};
export default AddTask;

import { useState } from "react";

const Task = ({ task, DeleteTask, ChangeTask }) => {
  const [isEditing, setIsEditing] = useState(true);

  let content = isEditing ? (
    <>
      <span className=" inline-block w-[200px] text-black px-5 py-2  shadow-2xs mr-5">
        {task.text}
      </span>
      <button
        className="bg-yellow-200
          text
          to-black
          px-5
          py-2
          rounded-2xl
          shadow-2xl
          focus:border
          backdrop-blur-2xl mr-5"
        onClick={() => setIsEditing(false)}
      >
        Edit
      </button>
    </>
  ) : (
    <>
      <input
        className="inline-block w-[200px] bg-white text-black px-5 py-2  shadow-3xl mr-5 rounded-2xl"
        type="text"
        value={task.text}
        onChange={(e) => ChangeTask({ ...task, text: e.target.value })}
      />
      <button
        className="bg-green-200
          text
          to-black
          px-5
          py-2
          rounded-2xl
          shadow-2xl
          focus:border
          backdrop-blur-2xl mr-5"
        onClick={() => setIsEditing(true)}
      >
        Save
      </button>
    </>
  );

  return (
    <>
      <div className="mb-5 p-5 bg-white text-black  w-xxl m-auto rounded-2xl shadow-2xl">
        <input
          className="mr-12 w-5 h-5"
          type="checkbox"
          checked={task.done}
          onChange={(e) => ChangeTask({ ...task, done: e.target.checked })}
        />
        {content}
        <button
          className="bg-red-200
          text
          to-black
          px-5
          py-2
          rounded-2xl
          shadow-2xl
          focus:border
          backdrop-blur-2xl mr-5"
          onClick={() => DeleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Task;

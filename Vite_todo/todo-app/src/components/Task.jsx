import { useState } from "react";
import { useTask } from "../../context/TaskContext";

const Task = ({ task }) => {
  const [IsEditing, setIsEditing] = useState(false);
  const { onChangeTask, onDeleteTask } = useTask();

  let content = IsEditing ? (
    <>
      {" "}
      <input
        type="text"
        value={task.text}
        onChange={(e) => onChangeTask({ ...task, text: e.target.value })}
      />
      <button onClick={() => setIsEditing(false)}>Save</button>
    </>
  ) : (
    <>
      <span>{task.text}</span>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </>
  );

  return (
    <>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => onChangeTask({ ...task, done: e.target.checked })}
      />
      {content}
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </>
  );
};
export default Task;

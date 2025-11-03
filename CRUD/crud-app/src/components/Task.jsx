import { useState } from "react";
import { useTasks } from "../../context/TaskContext";

const Task = ({ task }) => {
  const [isEditing, setIsediting] = useState(false);
  const { onChangeTask, onDeleteTask } = useTasks();

  let content = isEditing ? (
    <>
      <input
        type="text"
        value={task.text}
        onChange={(e) => onChangeTask({ ...task, text: e.target.value })}
      />
      <button onClick={() => setIsediting(false)}>Save</button>
    </>
  ) : (
    <>
      <span>{task.text}</span>
      <button onClick={() => setIsediting(true)}>Edit</button>
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

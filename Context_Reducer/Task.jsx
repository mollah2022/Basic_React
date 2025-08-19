import { useState } from "react";
import { useTasks } from "../context/TasksContext";

const Task = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { onDeleteTask, onUpdateTask } = useTasks();

  const content = isEditing ? (
    <>
      {" "}
      <input
        type="text"
        value={todo.task}
        onChange={(e) => onUpdateTask({ ...todo, task: e.target.value })}
      />
      <button onClick={() => setIsEditing(false)}>Save</button>
    </>
  ) : (
    <>
      {todo.task}
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </>
  );

  return (
    <>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={(e) => onUpdateTask({ ...todo, complete: e.target.checked })}
      />
      {content}
      <button onClick={() => onDeleteTask(todo.id)}>Delete</button>
    </>
  );
};
export default Task;

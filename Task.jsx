import { useState } from "react";

function Task({ task, onChangeTask, onDeleteTask }) {
  const [isEdit, setIsEdit] = useState(true);
  const content = isEdit ? (
    <>
      {task.text}
      <button onClick={() => setIsEdit(false)}>Edit</button>
    </>
  ) : (
    <>
      <input
        type="text"
        value={task.text}
        onChange={(e) => onChangeTask({ ...task, text: e.target.value })}
      />
      <button onClick={() => setIsEdit(true)}>Save</button>
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
}
export default Task;

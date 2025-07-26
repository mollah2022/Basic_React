import { useState } from "react";

function Task({ task, onChanged, onDelete }) {
  const [isEdit, setIsedit] = useState(false);
  const content = isEdit ? (
    <>
      <input
        type="text"
        value={task.text}
        onChange={(e) =>
          onChanged({
            ...task,
            text: e.target.value,
          })
        }
      />
      <button onClick={() => setIsedit(false)}>Save</button>
    </>
  ) : (
    <>
      {task.text}
      <button onClick={() => setIsedit(true)}>Edit</button>
    </>
  );
  return (
    <>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) =>
          onChanged({
            ...task,
            done: e.target.checked,
          })
        }
      />
      {content}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </>
  );
}
export default Task;

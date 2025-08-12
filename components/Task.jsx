import { useState } from "react";

const Task = ({ task, onDelete, onUpdate }) => {
  const [isUpdate, setIsUpdate] = useState(false);

  const UpdateHandler = () => {
    setIsUpdate(true);
  };

  const SaveHandler = () => {
    setIsUpdate(false);
  };

  let content = isUpdate ? (
    <>
      <input
        type="text"
        value={task.task}
        onChange={(e) => onUpdate({ ...task, task: e.target.value })}
      />
      <button onClick={SaveHandler}>Save</button>
    </>
  ) : (
    <>
      {task.task}
      <button onClick={setIsUpdate}>Update</button>
    </>
  );

  return (
    <>
      <input
        type="checkbox"
        checked={task.complete}
        onChange={(e) => onUpdate({ ...task, complete: e.target.checked })}
      />
      {content}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </>
  );
};
export default Task;

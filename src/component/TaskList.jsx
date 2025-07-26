import Task from "./Task";

function Tasklist({ tasks, onChnageTask, onDeleteTask }) {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task
              task={task}
              onChanged={onChnageTask}
              onDelete={onDeleteTask}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
export default Tasklist;

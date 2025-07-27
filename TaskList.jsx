import Task from "./Task";

function TaskList({ tasks, onchange, ondelete }) {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} onChangeTask={onchange} onDeleteTask={ondelete} />
          </li>
        ))}
      </ul>
    </>
  );
}
export default TaskList;

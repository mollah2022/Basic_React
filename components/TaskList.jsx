import Task from "./Task";

const TaskList = ({ tasks, onDeleteTask, onTaskUpdateHandler }) => {
  return (
    <>
      <ul style={{ listStyle: "none" }}>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task
              task={task}
              onDelete={onDeleteTask}
              onUpdate={onTaskUpdateHandler}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
export default TaskList;

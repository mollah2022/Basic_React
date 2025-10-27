import Task from "./Task";

const TaskList = ({ tasks, onDeleteTask, onChnageTask }) => {
  return (
    <>
      <ul className="mb-5 p-5 bg-white text-black  w-5xl m-auto rounded-2xl shadow-2xl">
        {tasks.map((task) => (
          <li key={task.id}>
            <Task
              task={task}
              DeleteTask={onDeleteTask}
              ChangeTask={onChnageTask}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
export default TaskList;

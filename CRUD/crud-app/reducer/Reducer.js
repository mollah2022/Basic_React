let nextId = 5;

const Reducer = (tasks, action) => {
  switch (action.type) {
    case "Added":
      return [
        ...tasks,
        {
          id: nextId++,
          text: action.addTask,
          done: false,
        },
      ];

    case "Changed":
      return tasks.map((task) => {
        if (task.id === action.updateTask.id) {
          return {
            ...task,
            text: action.updateTask.text,
            done: action.updateTask.done,
          };
        } else {
          return task;
        }
      });

    case "Delete":
      return tasks.filter((task) => task.id !== action.taskId);

    default:
      throw new Error("Invalid Case");
  }
};
export default Reducer;

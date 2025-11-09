const reducer = (tasks, action) => {
  let nextId = 5;

  switch (action.type) {
    case "Added":
      return [
        ...tasks,
        {
          id: nextId++,
          text: action.recTask.text,
          done: false,
        },
      ];
    case "Chnage":
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
      return tasks.filter((fil) => fil.id !== action.taskId);
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};
export default reducer;

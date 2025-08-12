const TaskReducer = (tasks, action) => {
  switch (action.type) {
    case "added":
      if (action.payload.task.trim() === "") return tasks;
      return [
        ...tasks,
        {
          id: Date.now(),
          task: action.payload.task,
          complete: false,
        },
      ];

    case "deleted":
      return tasks.filter((t) => t.id !== action.payload.id);

    case "updated":
      return tasks.map((t) =>
        t.id === action.payload.id
          ? {
              ...t,
              task: action.payload.task,
              complete: action.payload.complete,
            }
          : t
      );

    default:
      throw new Error("Invalid action type");
  }
};

export default TaskReducer;

const Reducer = (todos, action) => {
  switch (action.type) {
    case "added": {
      if (action.task.trim() === "") return todos;

      const newTask = {
        id: Date.now(),
        task: action.task,
        complete: false,
      };
      return [...todos, newTask];
    }

    case "updated": {
      return todos.map((todo) =>
        todo.id === action.task.id
          ? {
              ...todo,
              task: action.task.task,
              complete: action.task.complete,
            }
          : todo
      );
    }

    case "deleted": {
      return todos.filter((todo) => todo.id !== action.id);
    }

    default: {
      throw new Error("Unknown Action: " + action.type);
    }
  }
};

export default Reducer;

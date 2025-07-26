export default function reducer(tasks, action) {
  switch (action.type) {
    case "added":
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    case "changed":
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return { ...t, text: action.task.text, done: action.task.done };
        } else {
          return t;
        }
      });
    case "delete":
      return tasks.filter((t) => {
        if (t.id !== action.id) {
          return { ...t };
        }
      });
    default:
      throw new Error("NO action Match");
  }
}

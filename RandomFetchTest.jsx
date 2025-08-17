import { useEffect, useState } from "react";

const RandomFetchTest = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  const FilterOption = () => {
    if (filter === "success") {
      return "done=true";
    } else if (filter === "pending") {
      return "done=false";
    } else {
      return "";
    }
  };

  const getAllTodos = () => {
    fetch(`http://localhost:3000/todos?${FilterOption()}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setTodos(data));
  };

  useEffect(() => {
    getAllTodos();
  }, [filter]);

  const AddTaskHandler = () => {
    if (text.trim() === "") return;
    const newTask = {
      task: text,
      done: false,
    };

    fetch(`http://localhost:3000/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    getAllTodos();
    setText("");
  };

  const RemoveTaskHandler = (TaskId) => {
    fetch(`http://localhost:3000/todos/${TaskId}`, {
      method: "DELETE",
    });
    getAllTodos();
  };

  const UpdateTaskHandler = (todo) => {
    fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...todo, done: !todo.done }),
    });
    getAllTodos();
  };

  return (
    <>
      <div className="todo-app">
        <h1>Welcome Todo App </h1>
        <div className="todo-render-part">
          <input
            type="text"
            placeholder="Add New Todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />{" "}
          <button onClick={AddTaskHandler}>Add-Todo</button> <br />
        </div>
        <br />

        <div className="filterOption">
          <select
            name=""
            id=""
            value={filter}
            onChange={(w) => setFilter(w.target.value)}
          >
            <option value="all">All</option>
            <option value="success">Success</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        <div className="todo-list">
          <h2>Todo List...</h2>
          <ul style={{ listStyle: "none" }}>
            {todos.map((todo) => (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => UpdateTaskHandler(todo)}
                />
                <span>{todo.task}</span>{" "}
                <button onClick={() => RemoveTaskHandler(todo.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default RandomFetchTest;

import { useEffect, useState } from "react";

const FetchApiPreac = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const filterOption = () => {
    if (filter === "done") {
      return "done=true";
    } else if (filter === "pending") {
      return "done=false";
    } else {
      return "";
    }
  };

  const getAllTodo = async () => {
    await fetch(`http://localhost:3000/todos?${filterOption()}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setTodos(data));
  };

  useEffect(() => {
    getAllTodo();
  }, [filter]);

  const AddTodoHandler = async () => {
    if (text.trim() === "") return;
    const newTodo = {
      task: text,
      done: false,
    };
    await fetch(`http://localhost:3000/todos`, {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await getAllTodo();
    setText(" ");
  };

  const RemoveHandler = async (todoID) => {
    await fetch(`http://localhost:3000/todos/${todoID}`, {
      method: "DELETE",
    });
    await getAllTodo();
  };

  const UpdateHandler = async (todo) => {
    await fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "PUT",
      body: JSON.stringify({ ...todo, done: !todo.done }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    getAllTodo();
  };

  return (
    <>
      <div>
        <h1>Welcome To-Do app</h1>
        <div className="add-task">
          <input
            type="text"
            placeholder="Add Todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />{" "}
          <button onClick={AddTodoHandler}>Add Todo</button>
        </div>
        <br />
        <div
          className="optionButton"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <select>
            <option value="all">AllValue</option>
            <option value="done">DoneValue</option>
            <option value="pending">PendingValue</option>
          </select>
        </div>
        <div className="renderlist">
          <ul style={{ listStyle: "none" }}>
            {todos.map((todo) => (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => UpdateHandler(todo)}
                />{" "}
                <span>{todo.task}</span>{" "}
                <button onClick={() => RemoveHandler(todo.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default FetchApiPreac;

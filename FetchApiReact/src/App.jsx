import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  const AddAllTodos = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/posts?${ChnageFilterHandler()}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    AddAllTodos();
  }, [filter]);

  const AddTaskHandler = async (e) => {
    e.preventDefault();
    const newTask = {
      title: text,
      complete: false,
    };
    fetch(`http://localhost:3000/posts`, {
      method: "POST",
      body: JSON.stringify(newTask),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setText("");
    AddAllTodos();
  };

  const DeleteTaskHandler = async (todoId) => {
    fetch(`http://localhost:3000/posts/${todoId}`, {
      method: "DELETE",
    });
    AddAllTodos();
  };

  const ChnageFilterHandler = () => {
    if (filter === "complete") {
      return "complete=true";
    }
    if (filter === "pending") {
      return "complete=false";
    }
    if (filter === "all") {
      return "";
    }
  };

  const UpdateTaskHandler = async (updateTodo) => {
    await fetch(`http://localhost:3000/posts/${updateTodo.id}`, {
      method: "PUT",
      body: JSON.stringify({
        ...updateTodo,
        complete: !updateTodo.complete,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    AddAllTodos();
  };

  return (
    <>
      <h1>Welcome Todo App..</h1>
      <div>
        <form onSubmit={AddTaskHandler}>
          <input
            type="text"
            placeholder="Add Todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">CreateTodo</button>
        </form>

        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="pending">Pending</option>
        </select>

        <div>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.complete}
                  onChange={() => UpdateTaskHandler(todo)}
                />
                {todo.title}
                <button onClick={() => DeleteTaskHandler(todo.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;

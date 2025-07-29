import { useEffect, useState } from "react";

function RandomUseEffect() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        setValue(data);
      });
  }, []);

  function handlClick() {
    setCount((c) => c + 1);
  }
  console.log("Hello");

  return (
    <>
      <h1>Now I am Practice UseEffect</h1>
      <h2>Counter Aplication</h2>
      <p>Value of Counter : {count}</p>
      <button onClick={handlClick}>Increase By One </button>

      <ul>
        {value.map((val) => (
          <li key={val.id}>{val.title}</li>
        ))}
      </ul>
    </>
  );
}
export default RandomUseEffect;

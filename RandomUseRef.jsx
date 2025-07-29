import { useRef, useState } from "react";

const RandomUseRef = () => {
  const InputRef = useRef(null);
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount((c) => c + 1);
    if (InputRef.current) {
      InputRef.current.focus();
    }
  }

  return (
    <>
      <h1>Now I am Practic in UseRef </h1>
      <p>Counter Value : {count}</p>
      <button onClick={handleCount}>Increase By One</button>
      <br /> <br />
      <input ref={InputRef} type="text" value={text} />
      <br /> <br />
      <button>submit</button>
    </>
  );
};
export default RandomUseRef;

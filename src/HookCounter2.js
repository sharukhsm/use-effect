import React, { useState, useEffect } from "react";

function HookCounter2() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const handleClick = () => {
    setCount(count + 1);
  };

  /* - useEffect runs after every re-render of the component. 
     - It runs both, after the first render and after every update. 
     - This is an alternate for componentDidMount and componentDidUpdate. */

  useEffect(() => {
    document.title = `you clicked ${count} times`;
    console.log("I got rendered");
    /* Conditionally run useEffect when the count value changes. 
    Not everytime we need re-rendering to occour. Here the useEffect causes unnecessary re-render. 
    To prevent this, we mention props or state in the dependency array. This only re-renders when the count changes */
  }, [count]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>{count}</h1>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default HookCounter2;

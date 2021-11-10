import React, { useState, useEffect } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  //This runs after every re-render
  useEffect(() => {
    document.title = `you clicked ${count} times`;
  });

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default HookCounter;

import React, { useState, useEffect } from "react";

function HookCounter1() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  /* - useEffect without dependency array. */
  useEffect(() => {
    document.title = `you clicked ${count} times`;
    console.log("I got rendered");
  });

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default HookCounter1;

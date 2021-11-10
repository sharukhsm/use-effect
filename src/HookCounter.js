import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default HookCounter;

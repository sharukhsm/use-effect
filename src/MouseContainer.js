import React, { useState } from "react";
import HookMouse from "./HookMouse";

/* useEffect with cleanup.
When you unmount a component, make sure you cancel all the subscriptions & listeners,
In other words cleanup after unmounting a component. This is an optimization method.
Cleanup code should be written as a return function inside useEffect hook.
In our case it is written in HookMouse.js */
function MouseContainer() {
  const [display, setDisplay] = useState(true);

  //Unmounting component
  const handleClick = () => {
    setDisplay(!display);
  };

  return (
    <div>
      <button onClick={handleClick}>Toggle</button>
      {display && <HookMouse />}
    </div>
  );
}

export default MouseContainer;

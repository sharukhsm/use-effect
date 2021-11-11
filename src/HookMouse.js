import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (event) => {
    console.log("Mouse event");
    setX(event.clientX);
    setY(event.clientY);
  };

  //Empty dependency array only calls the useEffect in the initial rendere and not on every re-renders.
  //empty dependecy array implies this useEffect is not dependent on any props or state.
  //This is an alternative for componentDidMount.
  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);

    //cleanup code or Component unmount code. This only works when the component is unmounted.
    return () => {
      console.log("Component unmounted");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
}

export default HookMouse;

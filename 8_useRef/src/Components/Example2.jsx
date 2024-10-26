import React, { useRef } from "react";

const Example2 = () => {
    const buttonRef = useRef();

    const handlerChangeColor = () => {
     buttonRef.current.style.backgroundColor = "Beige"  
     buttonRef.current.style.color = "Black"  
    }
  return (
    <div>
      <div className="card">
        <button ref={buttonRef}>Change my color</button>
      </div>
      <div className="card">
        <button onClick={handlerChangeColor}>Click me</button>
      </div>
    </div>
  );
};

export default Example2;

// Scenario : Whenever I want to select a particular element, or give a
// reference to that element. We use, useRef hook.
import React, { useEffect, useState, useRef } from "react";

const Example1 = () => {
    const [count, setCount] = useState(0);
    const valueRef = useRef(0);

    const handlerIncrease = () => {
        valueRef.current = valueRef.current + 1;
        console.log(valueRef.current)
        setCount(count + 1)
    }

  return (
    <>
      <h1>Count : {count}</h1>
      <div className="card">
        <button onClick={handlerIncrease}>Increase</button>
      </div>
    </>
  );
};

export default Example1;

// Scenario - If you want to persist the change of a variable, then we
// use useRef hook. So that whenever my component is re-rendering. My 
// changes will be preserved

// What is the difference between useState and useRef : 
// useState : This hook makes your component re-render.
// useRef : It is going to preserve my changes from re-render.
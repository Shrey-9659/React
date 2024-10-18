import { useState, useEffect } from 'react';
import React from "react";
import './App.css'

const Task = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log("Counter component is mounted on the screen")

    return function(){
      document.title = "Counter unmounted"
    }
  }, [])
  useEffect(()=>{
    document.title = `Count : ${count}`
  },[count])

  const increment = () => {
    setCount((previousValue) => previousValue + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Understanding useState {count}</h1>
      <h2>Counter Value is : {count}</h2>
      <button onClick={increment}>Increment {count}</button>
      <button onClick={decrement}>Decrement {count}</button>
    </div>
  );
};

export default Task;

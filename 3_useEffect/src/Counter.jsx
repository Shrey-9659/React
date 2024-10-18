import React, { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    // useEffect(()=>{
    //     alert("I am mounted")

    //     return function(){
    //         alert("I am unmounted")
    //     }
    // }, [])
    // useEffect(()=>{
    //     alert("Count value : " + count)

    //     return function(){
    //         alert("Count value before previous value getting unmounted : " + count)
    //     }
    // }, [count])

    useEffect(function(){
        document.title = `Counter : ${count}`
    },[count])

  return (
    <div>
      <h1>Counter Value : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};

export default Counter;




import React, { useRef, useState } from "react";

const Example3 = () => {
  const [time, setTime] = useState(0);
  let timerRef = useRef(null);
  const isTimerOn = useRef(false);

  const handlerStart = () => {
    if (!isTimerOn.current) {
      isTimerOn.current = true;
      timerRef.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
  };
  const handlerStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    isTimerOn.current = false;
  };
  const handlerReset = () => {
    clearInterval(timerRef.current);
    setTime(0);
    timerRef.current = null;
    isTimerOn.current = false;
  };

  return (
    <>
      <h1>Timer : {time} Seconds</h1>
      <div className="card">
        <button onClick={handlerStart}>Start</button>
      </div>
      <div className="card">
        <button onClick={handlerStop}>Stop</button>
      </div>
      <div className="card">
        <button onClick={handlerReset}>Reset</button>
      </div>
    </>
  );
};

export default Example3;

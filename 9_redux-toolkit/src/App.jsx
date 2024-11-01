import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "./features/counter/counterSlice";

function App() {
  const [amount, setAmount] = useState(0)
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handlerIncrease = () => {
    dispatch(increment());
  };
  const handlerDecrease = () => {
    dispatch(decrement());
  };
  const handlerReset = () => {
    dispatch(reset());
  };
  const handlerIncrementByAmount = () => {
    dispatch(incrementByAmount(amount));
  };
  return (
    <>
      <h1>Count : {count}</h1>
      <input
        type="number"
        style={{ height: "30px", width: "250px" }}
        placeholder="Enter an amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <br />
      <br />
      <div>
        <button onClick={handlerIncrease}>Increase</button>
        <button onClick={handlerDecrease}>Decrease</button>
        <button onClick={handlerReset}>Reset</button>
        <button onClick={handlerIncrementByAmount}>Increment By Amount</button>
      </div>
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import "./App.css";
import Task from "./task";

function App() {



  const [state, setState] = useState(true);
  return (
    <>
      <button onClick={()=> setState(!state)}>Switch</button>
      {state ? <Task /> : ""}
    </>
  );
}

export default App;

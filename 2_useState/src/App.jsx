import { useState } from "react";
;
import "./App.css";

function App() {
  const [color, setColor] = useState("none");
  

  return (
    <>
      <div className="card" style={{backgroundColor : color, borderRadius: "1rem"}}>
        <button onClick={() => setColor("white")}>White</button>
        <button onClick={() => setColor("Green")}>Green</button>
        <button onClick={() => setColor("Blue")}>Blue</button>
        <button onClick={() => setColor("Beige")}>Beige</button>
        <button onClick={() => setColor("Purple")}>Purple</button>
      </div>
    </>
  );
}

export default App;



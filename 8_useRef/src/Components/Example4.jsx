import React, { useRef } from "react";

const Example4 = () => {
  const inputRef = useRef();

  const handlerFocus = () => {
    inputRef.current.focus();
  }
  const handlerCopy = () => {
    inputRef.current.select();
    document.execCommand('copy');
    alert("Text Copied")
    inputRef.current.blur();
  }

  return (
    <div>
      <input
        ref={inputRef}
        style={{
          height: "50px",
          width: "350px",
          textAlign: "center",
          fontSize: "18px",
        }}
        type="text"
      />
      <div className="card">
        <button onClick={handlerFocus} style={{ marginRight: "7px" }}>Click to focus</button>
        <button onClick={handlerCopy}>Click to copy</button>
      </div>
    </div>
  );
};

export default Example4;

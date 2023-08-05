import React, { useState } from "react";
import "../App Styles/App8.css";

const App8 = () => {
  const [inputValue, setInputValue] = useState("");

  const inputChanges = (event) => {
    setInputValue(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <>
      <div className="App8">
        <input type="text" onChange={inputChanges} />
        <h1>{inputValue}</h1>
      </div>
    </>
  );
};

export default App8;

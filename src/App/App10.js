import React, { useState } from "react";
import "../App Styles/App10.css";

const App10 = () => {
  const [textColor, setTextColor] = useState("red");

  const handleTextColor = () => {
    setTextColor(textColor === "red" ? "blue" : "red");
  };

  return (
    <>
      <div className="App10">
        <button onClick={handleTextColor}>Change Color</button>
        <h1 style={{ color: textColor }}>Hey, my color is {textColor}</h1>
      </div>
    </>
  );
};

export default App10;

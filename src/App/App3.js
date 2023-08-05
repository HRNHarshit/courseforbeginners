import React from "react";
import "./App3.css";

const App3 = () => {
  const age = 19;
  return (
    <div className="App3">
      <h1> {age >= 18 ? "Over Age!" : "Under Age!"}</h1>
      <p style={{ color: "green", background: "wheat" }}> This has color </p>
      {true && <button>Click Me</button>}
    </div>
  );
};

export default App3;

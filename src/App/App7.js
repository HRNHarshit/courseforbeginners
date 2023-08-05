import React, { useState } from "react";
import "./App7.css";

const App7 = () => {
  const [age, setAge] = useState(0);

  const ageIncreased = () => {
    // setAge((prevAge) => prevAge + 1);
    setAge(age + 1);
  };

  return (
    <>
      <div className="App7">
        <h1> {age} </h1>
        <button onClick={ageIncreased}>Increased</button>
      </div>
    </>
  );
};

export default App7;

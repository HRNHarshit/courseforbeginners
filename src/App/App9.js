import React, { useState } from "react";
import "../App Styles/App9.css";

const App9 = () => {
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow((prevValue) => !prevValue);
  };

  return (
    <>
      <div className="App9">
        <button onClick={handleShow}> {show ? `Hide` : `Show`} </button>
        {show && <h1> Hey, I am playing hide and seek </h1>}
      </div>
    </>
  );
};

export default App9;

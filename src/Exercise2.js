import React, { useState } from "react";
import "./Exercise2.css";

const Exercise2 = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <div className="container">
        <div className="btn">
          <button className="change" onClick={() => setValue(value + 1)}>
            Increase
          </button>
          <button className="change" onClick={() => setValue(value - 1)}>
            Decrease
          </button>
          <button className="change" onClick={() => setValue(0)}>
            Return to 0
          </button>
        </div>
        <h1>{value}</h1>
      </div>
    </>
  );
};

export default Exercise2;

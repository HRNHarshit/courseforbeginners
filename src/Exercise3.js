import React, { useState } from "react";
import "./Exercise3.css";
import axios from "axios";

const Exercise3 = () => {
  const [excuse, setExecuse] = useState([]);
  const [num, setNum] = useState(0);

  const handleExecuse = (ex) => {
    if (num < 0) alert("Please Enter valid number");
    else axios.get(`https://excuser-three.vercel.app/v1/excuse/${ex}/${num}/`).then((response) => setExecuse(response.data));
  };

  return (
    <>
      <div className="App">
        <h1>Generate an Execuse</h1>
        <input type="number" min="0" placeholder="Enter total no. of execuses..." onChange={(event) => setNum(event.target.value)} />
        <button className="btn" onClick={() => handleExecuse("party")}>
          Party
        </button>
        <button className="btn" onClick={() => handleExecuse("family")}>
          Family
        </button>
        <button className="btn" onClick={() => handleExecuse("office")}>
          Office
        </button>

        {excuse.map((ex) => {
          return <p>{ex?.excuse}</p>;
        })}
      </div>
    </>
  );
};

export default Exercise3;

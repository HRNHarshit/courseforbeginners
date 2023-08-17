import React, { useState } from "react";
import "../App Styles/App14.css";
import axios from "axios";

const App14 = () => {
  const [info, setInfo] = useState(null);
  const [name, setName] = useState("");

  const checkAge = () => {
    axios.get(`https://api.agify.io/?name=${name}`).then((response) => setInfo(response.data));
  };

  return (
    <>
      <div className="App14">
        <div className="form">
          <input type="text" placeholder="Write your name here..." onChange={(event) => setName(event.target.value)} />
          <button className="btn" onClick={checkAge}>
            Predict age
          </button>
        </div>
        <h1>Name: {info?.name}</h1>
        <h1>Predicted Age: {info?.age}</h1>
        <h1>Predicted count: {info?.count}</h1>
      </div>
    </>
  );
};

export default App14;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App Styles/App13.css";

const App13 = () => {
  const [catFact, setCatFact] = useState("");

  const newFact = () => {
    axios.get("https://catfact.ninja/fact").then((response) => setCatFact(response.data.fact));
  };

  useEffect(() => newFact(), []);

  return (
    <>
      <div className="App13">
        <button className="btn" onClick={newFact}>
          Generate Cat Fact
        </button>
        <p className="text">{catFact}</p>
      </div>
    </>
  );
};

export default App13;

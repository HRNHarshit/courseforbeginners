import React, { useState } from "react";
import "../App Styles/App12.css";
import Text from "../components/Text";

const App12 = () => {
  const [showText, setShowText] = useState(false);
  return (
    <>
      <div className="App12">
        <button onClick={() => setShowText(!showText)}>Show Text</button>
        {showText && <Text />}
      </div>
    </>
  );
};

export default App12;

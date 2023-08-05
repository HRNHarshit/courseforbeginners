import React from "react";

const App4 = () => {
  const names = ["Harshit", "Nishant", "Subham", "Ankit", "Harsh"];

  return (
    <>
      <div className="App4">
        {names.map((name, key) => {
          return <h1 key={key}> {name} </h1>;
        })}
      </div>
    </>
  );
};

export default App4;

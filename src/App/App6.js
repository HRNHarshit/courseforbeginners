import React from "react";
import User from "./components/User";

const App5 = () => {
  const users = [
    { name: "Harshit", age: 21 },
    { name: "Nishant", age: 22 },
    { name: "Subham", age: 22 },
  ];

  return (
    <>
      <div className="App5">
        {users.map((user, key) => (
          <User name={user.name} age={user.age} key={key} />
        ))}
      </div>
    </>
  );
};

export default App5;

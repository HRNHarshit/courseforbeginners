import React from "react";

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

const User = (props) => {
  return (
    <div key={props.key}>
      <h1>
        {props.name} {props.age}
      </h1>
    </div>
  );
};

export default App5;

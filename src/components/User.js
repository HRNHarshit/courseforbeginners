import React from "react";

const User = (props) => {
  return (
    <div key={props.key}>
      <h1>
        {props.name} {props.age}
      </h1>
    </div>
  );
};

export default User;

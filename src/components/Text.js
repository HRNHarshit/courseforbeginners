import React, { useState, useEffect } from "react";

const Text = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Hello");
    return () => {
      console.log("Bye");
    };
  }, []);

  // // In following useEffect will comes in action whenever there is any changes in 'text',
  // // whereas in above it will only take action during mounting and unmounting
  // useEffect(() => {
  //   console.log("Hello");
  // }, [text]);

  return (
    <>
      <div className="text">
        <input type="text" onChange={(event) => setText(event.target.value)} />
        <h1>{text}</h1>
      </div>
    </>
  );
};

export default Text;

// Lifecycle in ReactJS:

// 1. mounting: come into the existence of a project
// 2. updating: make changes in praject depending on something
// 3. unmounting: disapper from the project

import React, { useState } from "react";

const ChangeProfile = (props) => {
  const [newUserName, setNewUserName] = useState("");

  return (
    <div className="changeProfile">
      <input onChange={(event) => setNewUserName(event.target.value)} />
      <button
        onClick={() => {
          props.setUserName(newUserName);
        }}
      >
        Change
      </button>
    </div>
  );
};

export default ChangeProfile;

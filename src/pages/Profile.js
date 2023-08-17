import React, { useContext } from "react";
import ChangeProfile from "../components/ChangeProfile";
import { AppContext } from "../App/App17";

const Profile = (props) => {
  const { userName, setUserName } = useContext(AppContext);

  return (
    <div className="profile">
      <h1>
        Profile {userName}
        <ChangeProfile setUserName={setUserName} />
      </h1>
    </div>
  );
};

export default Profile;

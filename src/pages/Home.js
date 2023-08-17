import React, { useContext } from "react";
import { AppContext } from "../App/App17";

const Home = () => {
  const { userName, setUserName } = useContext(AppContext);
  
  return (
    <div>
      <h1>This is the Home Page and user is {userName}.</h1>
    </div>
  );
};

export default Home;

import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AppContext } from "../App/App17";
import Axios from "axios";

const Home = () => {
  // const { userName, setUserName } = useContext(AppContext);
  const { data, isLoading, isError, refetch } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((response) => response.data);
  });

  if (isError) {
    return <h1>Sorry, there was an error🥹</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="home">
      <h1>Cat Fact</h1>
      <p>{data?.fact}</p>
      <div className="btn">
        <button onClick={refetch}> Update </button>
      </div>
    </div>
  );
};

export default Home;

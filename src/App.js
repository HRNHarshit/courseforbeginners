import React from "react";
import "./App.css";

const App = () => {
  const User = (props) => {
    return (
      <div>
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
        <h3>{props.email}</h3>
      </div>
    );
  };

  return (
    <>
      <div className="App">
        <User name="Ganga Sagar" age={21} email="gangasagar0908@gmail.com" />
        <User name="Nishant Verma" age={22} email="nishantverma1.knp2019@gmail.com" />
        <User name="Subham Singh" age={22} email="singhsubham62810@gmail.com" />
      </div>
    </>
  );
};

export default App;

import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Profile, Contact, Error, Navbar } from "../pages";
import "../App Styles/App16.css";

export const AppContext = createContext();

const App16 = () => {
  const [userName, setUserName] = useState("Harshit");
  return (
    <>
      <div className="App16">
        <AppContext.Provider value={{ userName, setUserName }}>
          <BrowserRouter>
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </BrowserRouter>
        </AppContext.Provider>
      </div>
    </>
  );
};

export default App16;

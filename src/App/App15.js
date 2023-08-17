import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App Styles/App15.css";
import { Home, Menu, Contact, Error, Navbar } from "../pages";

// "BrowseRouter" tells us that it can contain both "Route" and jsx but "Routes" only allowed "Route" to perform
const App15 = () => {
  return (
    <>
      <div className="App15">
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App15;

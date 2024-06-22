import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Profile, Contact, Error, Navbar } from "../pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../App Styles/App17.css";

const App17 = () => {
  // const client = new QueryClient();
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <>
      <div className="App17">
        <QueryClientProvider client={client}>
          <BrowserRouter>
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </div>
    </>
  );
};

export default App17;

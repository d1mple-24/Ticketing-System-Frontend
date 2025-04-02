import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Ticket Designs/Home";
import Trouble from "./Ticket Designs/Trouble";
import Upload from "./Ticket Designs/Upload";
import Technical from "./Ticket Designs/Technical"; // Import the Technical component
import Account from "./Ticket Designs/Account"; // Import the Account component

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/troubleshooting" element={<Trouble />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/technical" element={<Technical />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
};

export default App;

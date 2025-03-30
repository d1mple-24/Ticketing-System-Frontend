import React from "react";
import Home from "./Ticket Designs/Home";
import Trouble from "./Ticket Designs/Trouble";
import Upload from "./Ticket Designs/Upload";
import Technical from "./Ticket Designs/Technical"; // Import the Technical component
import Account from "./Ticket Designs/Account"; // Import the Account component

const App = () => {
  const currentPath = window.location.pathname;

  return (
    <>
      {currentPath === "/" && <Home />}
      {currentPath === "/troubleshooting" && <Trouble />}
      {currentPath === "/upload" && <Upload />}
      {currentPath === "/technical" && <Technical />} {/* Add route for Technical Assistance */}
      {currentPath === "/account" && <Account />} {/* Add route for Account Management */}
    </>
  );
};

export default App;

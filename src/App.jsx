import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import Header from "./components/Header";
// import React, { useState, useEffect } from "react";

const App = () => {
  return (
    <main className="font-agdasima">
      <div className="fixed top-0">
        <Navbar />
      </div>

      <div className="bg-[#03123D] min-h-screen pt-[5rem]">
        <Outlet />
      </div>
    </main>
  );
};

export default App;

import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="">
      <Navbar />
      <main className="flex-1   p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;

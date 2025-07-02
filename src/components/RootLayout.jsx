import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="min-h-screen bg-[#EFEFEF]">
      <Navbar />

      <main className="mt-4 p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;

import React from "react";
import Navbar from "../pages/Navbar";
import { Outlet } from "react-router-dom";
function MainLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;

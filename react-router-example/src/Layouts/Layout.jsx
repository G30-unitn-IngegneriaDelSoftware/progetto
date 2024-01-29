import { Outlet } from "react-router-dom";
import React from "react";
import "../App.css";

export default function Layout() {
  return (
    <div className="site-wrapper" style={{ height: "10vh", width: "100vw" }}>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

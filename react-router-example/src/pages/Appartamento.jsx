import React from "react";
import { Outlet } from "react-router-dom";

export default function Appartamento() {
  return (
    <div>
      <p>Appartamento page</p>
      <Outlet />
    </div>
  );
}

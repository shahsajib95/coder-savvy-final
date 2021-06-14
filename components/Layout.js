import React from "react";
import NavData from "./NavData";

function Layout({ children }) {
  return (
    <div>
      <NavData />
      <div className="container">{children}</div>
    </div>
  );
}

export default Layout;

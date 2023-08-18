import React from "react";
import "./Sidebar.css";
import logo from "../../../../public/vite.svg";
import Items from "../Items/Items";
function Sidebar() {
  return (
    <div className="admin__sidebar">
      <img src={logo} width={50} alt="" className="logo" />
      {/* list items */}
      <Items />
    </div>
  );
}

export default Sidebar;

import React from "react";
import "./Sidebar.css";
import logo from "../../../../public/vite.svg";
import Items from "../Items/Items";
import { useSelector } from "react-redux";
function Sidebar() {
  const sidebar = useSelector((state) => state.sidebar);

  return (
    <div className="admin__sidebar">
      <img src={logo} width={50} alt="" className="logo" />

      {/* list items */}
      <Items />
    </div>
  );
}

export default Sidebar;

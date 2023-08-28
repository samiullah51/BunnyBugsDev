import React from "react";
import "./Sidebar.css";
import Items from "../Items/Items";
import { useSelector } from "react-redux";
import logo from "../../../assets/img/logo.png";
function Sidebar() {
  const sidebar = useSelector((state) => state.sidebar);

  return (
    <div className="admin__sidebar">
      <img src={logo} width={130} height={50} className="logo" alt="" />
      {/* list items */}
      <Items />
    </div>
  );
}

export default Sidebar;

import React from "react";
import "./Items.css";
import { Link, NavLink } from "react-router-dom";
function SingleItem({ title, icon, status, to }) {
  return (
    <NavLink to={to} className="single__item">
      {icon}
      <span>{title}</span>
    </NavLink>
  );
}

export default SingleItem;

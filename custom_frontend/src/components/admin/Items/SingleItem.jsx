import React from "react";
import "./Items.css";
function SingleItem({ title, icon, status, to }) {
  return (
    <a to={to} className="single__item">
      {icon}
      <span>{title}</span>
    </a>
  );
}

export default SingleItem;

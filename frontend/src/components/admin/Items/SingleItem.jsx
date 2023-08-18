import React from "react";
import "./Items.css";

function SingleItem({ title, icon, status }) {
  return (
    <div className={status ? "single__item active" : "single__item"}>
      {icon}
      <span>{title}</span>
    </div>
  );
}

export default SingleItem;

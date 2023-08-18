import React from "react";
import "./AdminHeader.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import searchIcon from "../../../assets/img/search2.svg";
function AdminHeader() {
  return (
    <div className="admin__header">
      <div className="header__left">
        <div>
          <img src={searchIcon} width={20} alt="" />
          <input type="text" placeholder="Search here..." />
        </div>
      </div>
      <div className="header__right">
        <div>
          <p>right</p>
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;

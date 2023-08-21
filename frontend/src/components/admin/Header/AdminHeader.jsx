import React from "react";
import "./AdminHeader.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import searchIcon from "../../../assets/img/search2.svg";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_SIDEBAR } from "../../../redux/User/userTypes";
import logo from "../../../../public/vite.svg";

function AdminHeader() {
  const sidebar = useSelector((state) => state.sidebar);

  const dispatch = useDispatch();
  return (
    <div className="admin__header">
      <div className="header__left">
        {/* <MenuOutlinedIcon onClick={() => dispatch({ type: TOGGLE_SIDEBAR })} /> */}
        <div>
          <img src={searchIcon} width={20} alt="" />
          <input type="text" placeholder="Search here..." />
        </div>
      </div>
      <div className="header__right">
        <DarkModeOutlinedIcon />
        <ShoppingCartOutlinedIcon />
        <TurnedInNotIcon />
        <NotificationsNoneOutlinedIcon />
        <PeopleOutlinedIcon />
      </div>
    </div>
  );
}

export default AdminHeader;

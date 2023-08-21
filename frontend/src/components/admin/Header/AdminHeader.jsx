import React, { useState } from "react";
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
  const [show, setShow] = useState(true);

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
        <div className="icon__main">
          <DarkModeOutlinedIcon onClick={() => setShow(!show)} />
          <div className={show ? "icon__menu" : "icon__menu active"}>
            <p>icon</p>
            <p>title</p>
          </div>
        </div>
        <div className="icon__main">
          <ShoppingCartOutlinedIcon />
          <div className="icon__menu">
            <p>icon</p>
            <p>title</p>
          </div>
        </div>
        <div>
          <TurnedInNotIcon />
        </div>
        <div>
          <NotificationsNoneOutlinedIcon />
        </div>
        <div>
          <PeopleOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;

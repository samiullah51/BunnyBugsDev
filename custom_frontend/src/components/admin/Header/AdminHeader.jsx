import React, { useState } from "react";
import "./AdminHeader.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import searchIcon from "../../../assets/img/search2.svg";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PlayForWorkOutlinedIcon from "@mui/icons-material/PlayForWorkOutlined";
import logo from "../../../../public/vite.svg";

function AdminHeader() {
  // const sidebar = useSelector((state) => state.sidebar);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  // const dispatch = useDispatch();
  return (
    <div className="admin__header">
      <div className="header__left">
        {/* <MenuOutlinedIcon onClick={() => dispatch({ type: TOGGLE_SIDEBAR })} /> */}
        <div>
          {/* <img src={searchIcon} width={20} alt="" /> */}
          <input type="text" placeholder="Search here..." />
        </div>
      </div>
      <div className="header__right">
        <div
          className="icon__main"
          onClick={() => setShow(!show)}
          style={{ display: "flex", alignItems: "baseline" }}
        >
          <AccountCircleOutlinedIcon style={{ fontSize: "35px" }} />
          <div className={!show ? "icon__menu" : "icon__menu active"}>
            <p>
              <AccountCircleOutlinedIcon /> Setting
            </p>
            <p>
              {" "}
              <LockOutlinedIcon /> Change Password
            </p>
            <p>
              {" "}
              <PlayForWorkOutlinedIcon /> Log Out
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;

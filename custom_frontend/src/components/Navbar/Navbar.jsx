import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
function Navbar() {
  const [handleShow, setHandleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setHandleShow(true);
      } else {
        setHandleShow(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  return (
    <div className={!handleShow ? "navbar" : "navbar active"}>
      <div className="navbar__left">
        <img src={logo} alt="" />
      </div>
      <div className="navbar__middle">
        <a href="" className="active">
          Home
        </a>
        <a href="">About</a>
        <a href="">Service</a>
        <a href="">Contact</a>
        <a href="">Carrier</a>
      </div>
      <div className="navbar__right">
        <button className="register__btn">Register</button>
        <button className="login__btn">Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;

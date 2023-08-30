import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
function Navbar() {
  const [handleShow, setHandleShow] = useState(false);
  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);
  const [showContent4, setShowContent4] = useState(false);
  const [showContent5, setShowContent5] = useState(false);
  const [showContent6, setShowContent6] = useState(false);
  const [showContent7, setShowContent7] = useState(false);
  const [name, setName] = useState("Mohsin");
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
        <a
          href=""
          className="active"
          onMouseEnter={() => setShowContent1(true)}
          onMouseLeave={() => setShowContent1(false)}
        >
          Why BunnyBugsDev
          <div className={!showContent1 ? "contents" : "contents active"}>
            <span> Why BunnyBugsDev</span>
          </div>
        </a>
        <a
          href=""
          onMouseEnter={() => setShowContent2(true)}
          onMouseLeave={() => setShowContent2(false)}
        >
          What we do
          <div className={!showContent2 ? "contents" : "contents active"}>
            <span> What we do</span>
          </div>
        </a>
        {/* <a
          href=""
          onMouseEnter={() => setShowContent3(true)}
          onMouseLeave={() => setShowContent3(false)}
        >
          What we do
          <div className={!showContent3 ? "contents" : "contents active"}>
            <span> What we work with</span>
          </div>
        </a> */}
        {/* <a
          href=""
          onMouseEnter={() => setShowContent4(true)}
          onMouseLeave={() => setShowContent4(false)}
        >
          What we do
          <div className={!showContent4 ? "contents" : "contents active"}>
            <span> Our Products</span>
          </div>
        </a> */}
        <a
          href=""
          onMouseEnter={() => setShowContent5(true)}
          onMouseLeave={() => setShowContent5(false)}
        >
          Our Work
          <div className={!showContent5 ? "contents" : "contents active"}>
            <span> What we do</span>
          </div>
        </a>
        <a
          href=""
          onMouseEnter={() => setShowContent6(true)}
          onMouseLeave={() => setShowContent6(false)}
        >
          Inside BunnyBugsDev
          <div className={!showContent6 ? "contents" : "contents active"}>
            <span> What we do</span>
          </div>
        </a>
        <a
          href=""
          onMouseEnter={() => setShowContent7(true)}
          onMouseLeave={() => setShowContent7(false)}
        >
          Careers
          <div className={!showContent7 ? "contents" : "contents active"}>
            <span> What we do</span>
          </div>
        </a>
        <button className="login__btn">Apply</button>
      </div>
    </div>
  );
}

export default Navbar;

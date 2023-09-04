import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
function Navbar() {
  const [handleShow, setHandleShow] = useState(false);
  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);

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
        <Link to="/about" className="active">
          Why BunnyBugsDev
          <div className={!showContent1 ? "contents" : "contents active"}>
            <span> Why BunnyBugsDev</span>
          </div>
        </Link>
        <a
          href=""
          onMouseEnter={() => setShowContent2(true)}
          onMouseLeave={() => setShowContent2(false)}
        >
          What we do
          <div className={!showContent2 ? "contents" : "contents active"}>
            <div className="container">
              <div className="row border-bottom">
                <div className="col-12">
                  <h3
                    className="mt-4 mb-4"
                    style={{ color: "var(--bs-theme)" }}
                  >
                    Services We Provide
                  </h3>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <h5 className="mt-3" style={{ color: "var(--bs-orange)" }}>
                    <span className="me-1" style={{ color: "var(--bs-theme" }}>
                      {" "}
                      <ArrowForwardIcon />
                    </span>
                    Web Development
                  </h5>
                  <h5 className="mt-3" style={{ color: "var(--bs-orange)" }}>
                    <span className="me-1" style={{ color: "var(--bs-theme" }}>
                      {" "}
                      <ArrowForwardIcon />
                    </span>
                    Mobile App Development
                  </h5>
                  <h5 className="mt-3" style={{ color: "var(--bs-orange)" }}>
                    <span className="me-1" style={{ color: "var(--bs-theme" }}>
                      {" "}
                      <ArrowForwardIcon />
                    </span>
                    Digital Marketing
                  </h5>
                </div>
                <div className="col-4">
                  <h5 className="mt-3" style={{ color: "var(--bs-orange)" }}>
                    <span className="me-1" style={{ color: "var(--bs-theme" }}>
                      {" "}
                      <ArrowForwardIcon />
                    </span>
                    UX, Product, and Design
                  </h5>
                  <h5 className="mt-3" style={{ color: "var(--bs-orange)" }}>
                    <span className="me-1" style={{ color: "var(--bs-theme" }}>
                      {" "}
                      <ArrowForwardIcon />
                    </span>
                    DevOps Solutions
                  </h5>
                  <h5 className="mt-3" style={{ color: "var(--bs-orange)" }}>
                    <span className="me-1" style={{ color: "var(--bs-theme" }}>
                      {" "}
                      <ArrowForwardIcon />
                    </span>
                    QA and Software Testing
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </a>
        <Link to="/ourwork">Our Work</Link>
        <a href="">Inside BunnyBugsDev</a>
        <a href="">Careers</a>
        <button className="login__btn">Apply</button>
      </div>
    </div>
  );
}

export default Navbar;

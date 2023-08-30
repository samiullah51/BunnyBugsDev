import React, { useEffect, useState } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
        <a href="" className="active">
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
            <div className="container">
            <div className="row border-bottom">
              <div className="col-12">
                  <h3 class="mt-4 mb-4" style={{color:'var(--bs-theme)'}}>Services We Provide</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                  <h5 class="mt-3"  style={{color:'var(--bs-orange)'}}><span className="me-1" style={{color:'var(--bs-theme'}}> <ArrowForwardIcon /></span>Web Development</h5>
                  <h5 class="mt-3"  style={{color:'var(--bs-orange)'}}><span className="me-1" style={{color:'var(--bs-theme'}}> <ArrowForwardIcon /></span>Mobile App Development</h5>
                  <h5 class="mt-3"  style={{color:'var(--bs-orange)'}}><span className="me-1" style={{color:'var(--bs-theme'}}> <ArrowForwardIcon /></span>Digital Marketing</h5>

              </div>
              <div className="col-4">
                  <h5 class="mt-3"  style={{color:'var(--bs-orange)'}}><span className="me-1" style={{color:'var(--bs-theme'}}> <ArrowForwardIcon /></span>UX, Product, and Design</h5>
                  <h5 class="mt-3"  style={{color:'var(--bs-orange)'}}><span className="me-1" style={{color:'var(--bs-theme'}}> <ArrowForwardIcon /></span>DevOps Solutions</h5>
                  <h5 class="mt-3"  style={{color:'var(--bs-orange)'}}><span className="me-1" style={{color:'var(--bs-theme'}}> <ArrowForwardIcon /></span>QA and Software Testing</h5>

              </div>
            </div>
            </div>
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
          // onMouseEnter={() => setShowContent5(true)}
          // onMouseLeave={() => setShowContent5(false)}
        >
          Our Work
          <div className={!showContent5 ? "contents" : "contents active"}>
            <span> What we do </span>
          </div>
        </a>
        <a
          href=""
          // onMouseEnter={() => setShowContent6(true)}
          // onMouseLeave={() => setShowContent6(false)}
        >
          Inside BunnyBugsDev
          <div className={!showContent6 ? "contents" : "contents active"}>
            <h2> What we do</h2>
          </div>
        </a>
        <a
          href=""
          // onMouseEnter={() => setShowContent7(true)}
          // onMouseLeave={() => setShowContent7(false)}
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

import React from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

function Header({ route }) {
  return (
    <>
      <header className="header">
        <div className="top-header">
          <div className="container">
            <div className="top-header-wrap">
              <div className="top-left-content">
                <div className="top-icon"></div>
                <p>Our company has 25+ years' experience!</p>
              </div>
              <div className="top-mid-content">
                <h4>
                  <a href="contact.html">Login/Sign in</a>
                </h4>
              </div>
              <div className="top-right-content">
                <ul className="top-social">
                  <li className="social-item">
                    <div className="dot"></div>
                    <a href="#">Facebook</a>
                  </li>
                  <li className="social-item">
                    <div className="dot"></div>
                    <a href="#">Twitter</a>
                  </li>
                  <li className="social-item">
                    <div className="dot"></div>
                    <a href="#">Linkedin</a>
                  </li>
                  <li className="social-item">
                    <a href="#">Instagram</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="primary-header primary-header">
          <div className="container">
            <div className="primary-header-inner">
              <div className="header-logo">
                <a href="index-2.html">
                  <img className="light" src={logo} alt="Logo" />
                  <img className="dark" src={logo} alt="Logo" />
                </a>
              </div>
              <div className="header-menu-wrap">
                <ul className="slider-menu">
                  <li className={route === "home" ? "active" : ""}>
                    <Link to="/">Home</Link>
                  </li>
                  <li className={route === "about" ? "active" : ""}>
                    <Link to="/about">About</Link>
                  </li>
                  <li className={route === "service" ? "active" : ""}>
                    <Link to="/service">Services</Link>
                    <ul className="menu-item">
                      <li className={route === "service" ? "active" : ""}>
                        <Link to="/service">Service</Link>
                      </li>
                      <li
                        className={route === "serviceDetails" ? "active" : ""}
                      >
                        <Link to="/service/details">Service Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li className={route === "team" ? "active" : ""}>
                    <Link href="#">Pages</Link>
                    <ul className="menu-item">
                      <li className={route === "team" ? "active" : ""}>
                        <Link to="/team">Team</Link>
                      </li>
                      <li className={route === "teamDetails" ? "active" : ""}>
                        <Link to="/team/details">Team Details</Link>
                      </li>
                      <li className={route === "pricing" ? "active" : ""}>
                        <Link to="/pricing">Pricing</Link>
                      </li>
                      <li className={route === "projects" ? "active" : ""}>
                        <Link to="/projects">Project</Link>
                      </li>
                      <li
                        className={route === "projectsDetails" ? "active" : ""}
                      >
                        <Link to="/project/details">Project Details</Link>
                      </li>
                      <li className={route === "faq" ? "active" : ""}>
                        <Link to="/faq">Faq</Link>
                      </li>
                    </ul>
                  </li>
                  <li className={route === "contact" ? "active" : ""}>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="header-right">
                <div className="search-icon dl-search-icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <Link className="default-btn" href="contact.html">
                  Get in Touch<span></span>
                </Link>
                <div className="mobile-menu-icon">
                  <div className="burger-menu">
                    <div className="line-menu line-half first-line"></div>
                    <div className="line-menu"></div>
                    <div className="line-menu line-half last-line"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="popup-search-box">
        <div class="box-inner-wrap d-flex align-items-center">
          <form
            id="form"
            class="popup-search"
            action="#"
            method="get"
            role="search"
          >
            <input
              id="popup-search"
              type="text"
              name="s"
              placeholder="Type keywords here..."
            />
            <button
              id="popup-search-button"
              type="submit"
              name="submit"
            ></button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Header;

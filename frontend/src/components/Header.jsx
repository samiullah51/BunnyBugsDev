import React from "react";
import logo from "../assets/img/logo.png";

function Header() {
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
                  <li className="active">
                    <a href="index-2.html">Home</a>
                    <ul className="menu-item">
                      <li>
                        <a href="index-2.html">Home One</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home Two</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="service.html">Services</a>
                    <ul className="menu-item">
                      <li>
                        <a href="service.html">Service</a>
                      </li>
                      <li>
                        <a href="service-details.html">Service Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul className="menu-item">
                      <li>
                        <a href="team.html">Team</a>
                      </li>
                      <li>
                        <a href="team-details.html">Team Details</a>
                      </li>
                      <li>
                        <a href="pricing.html">Pricing</a>
                      </li>
                      <li>
                        <a href="project.html">Project</a>
                      </li>
                      <li>
                        <a href="project-details.html">Project Details</a>
                      </li>
                      <li>
                        <a href="faq.html">Faq</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog-grid.html">Blog</a>
                    <ul className="menu-item">
                      <li>
                        <a href="blog-grid.html">Blog Grid</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="header-right">
                <div className="search-icon dl-search-icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <a className="default-btn" href="contact.html">
                  Get in Touch<span></span>
                </a>
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

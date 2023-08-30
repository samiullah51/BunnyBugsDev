import React from "react";
import logo from "../assets/img/logo.png";

function WidgetSection() {
  return (
    <section className="widget-section padding">
      <div className="container">
        <div className="section-heading text-center mb-60">
          <h2>
            Our vertical solutions expertise allows your <br />
            business to streamline workflow
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 sm-padding">
            <div className="widget-item item-1">
              <img src={logo} alt="logo" />
              <p className="desc">
                Duis aute irure dolor in voluptate velit esse cillum dolore eu
                fugiat nulla Excepteur sint.
              </p>
              <p>
                Sunt in culpa qui officia deserunt mollit on anim id est
                laborum.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 sm-padding">
            <div className="widget-item item-2">
              <div className="widget-header">
                <h3>Main Menu</h3>
              </div>
              <ul className="widget-list">
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li>
                  <a href="service.html">Our Services</a>
                </li>
                <li>
                  <a href="team.html">Our Team</a>
                </li>
                <li>
                  <a href="pricing.html">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 sm-padding">
            <div className="widget-item">
              <div className="widget-header">
                <h3>Our Services</h3>
              </div>
              <ul className="widget-list">
                <li>
                  <a href="service-details.html">Business</a>
                </li>
                <li>
                  <a href="service-details.html">Development</a>
                </li>
                <li>
                  <a href="service-details.html">Consulting</a>
                </li>
                <li>
                  <a href="service-details.html">It Mangement</a>
                </li>
                <li>
                  <a href="service-details.html">Financial</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 sm-padding">
            <div className="widget-item">
              <div className="widget-header">
                <h3>Get In Touch</h3>
              </div>
              <div className="widget-content">
                <p>
                  The USA — <br />
                  785 15h Street, Office 478 Boston MA, 02116
                </p>
                <a href="mailto:contact@gmail.com">contact@gmail.com</a>
                <a className="number" href="%2b17006662569.html">
                  +1 700 666 25 69
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WidgetSection;

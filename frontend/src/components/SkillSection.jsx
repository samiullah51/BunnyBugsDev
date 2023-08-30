import React from "react";
import skillImg from "../assets/img/skill-shape.png";

function SkillSection() {
  return (
    <section className="skill-section">
      <div className="bg-shape">
        <img src={skillImg} alt="shape" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 sm-padding">
            <h2>Skills progress bar</h2>
            <h2>Skills progress bar</h2>
          </div>
          <div className="col-lg-6 sm-padding">
            <div className="skill-box">
              <div className="skill-video-wrap">
                <div className="skill-bg"></div>
                <div className="video-box">
                  <div className="skill-video-popup-box">
                    <a
                      className="video-popup play-btn"
                      data-autoplay="true"
                      data-vbtype="video"
                      href="https://youtu.be/iyd7qUH3oH0"
                    >
                      <i className="fa-solid fa-play"></i>
                      <div className="ripple"></div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="skill-info">
                <h3>25+ Years of Superior Quality</h3>
                <a href="contact.html" className="default-btn">
                  Start With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillSection;

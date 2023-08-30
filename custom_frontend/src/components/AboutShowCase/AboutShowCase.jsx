import React from "react";
import "./AboutShowCase.css";
import Navigator from "../Navigator/Navigator";
import Featured from "../Featured/Featured";
import CollaborateWith from "../CollaborateWith/CollaborateWith";
import CollaborateLeftSection from "../CollaborateWith/CollaborateLeftSection";
import aboutImg from "../../assets/images/about.png";
function AboutShowCase() {
  return (
    <div className="about__showcase">
      <Navigator title="About Us" to="/" />

      <div className="showcase__contents">
        <div className="about__left">
          <CollaborateLeftSection title="An Exceptionally unique experience Tailored to you" />
        </div>
        <div className="about__middle">
          <img src={aboutImg} alt="" />
        </div>
        <div className="about__right">
          <div>
            <p className="about__title">Our Customer</p>
            <p className="about__desc">
              Business advisory service advises current and future business
              prospects of a client, with the aim of customers.
            </p>
          </div>
          <div>
            <p className="about__title">Our Customer</p>
            <p className="about__desc">
              Business advisory service advises current and future business
              prospects of a client, with the aim of customers.
            </p>
          </div>
          <div>
            <p className="about__title">Our Customer</p>
            <p className="about__desc">
              Business advisory service advises current and future business
              prospects of a client, with the aim of customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutShowCase;

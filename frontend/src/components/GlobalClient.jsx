import React from "react";
import sponser1 from "../assets/img/sponsor-1.png";
import sponser2 from "../assets/img/sponsor-2.png";
import sponser3 from "../assets/img/sponsor-3.png";
import sponser4 from "../assets/img/sponsor-4.png";

function GlobalClient() {
  return (
    <>
      <div className="sponsor-section bg-grey padding">
        <div className="container">
          <div className="section-heading text-center mb-50">
            <h2>We Have More Then 1540+ Global Clients</h2>
          </div>
          <div className="outside-spacing">
            <div className="sponsor-carousel swipper">
              <div className="swiper-wrapper swiper-container">
                <div className="swiper-slide">
                  <div className="sponsor-item text-center">
                    <a href="#">
                      <img src={sponser1} alt="sponsor" />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="sponsor-item text-center">
                    <a href="#">
                      <img src={sponser2} alt="sponsor" />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="sponsor-item text-center">
                    <a href="#">
                      <img src={sponser3} alt="sponsor" />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="sponsor-item text-center">
                    <a href="#">
                      <img src={sponser4} alt="sponsor" />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="sponsor-item text-center">
                    <a href="#">
                      <img src={sponser4} alt="sponsor" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-box">
            <div className="about-text">
              <h2>Newsletter</h2>
            </div>
            <div className="message-box-wrap">
              <div className="message-form">
                <form action="#" className="wt-subscribe-form">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Enter Your Email Address"
                    required=""
                  />
                  <input
                    type="hidden"
                    name="action"
                    value="mailchimpsubscribe"
                  />
                  <button className="submit">
                    Subscribe<i className="fa fa-location-arrow"></i>
                  </button>
                  <div className="clearfix"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GlobalClient;

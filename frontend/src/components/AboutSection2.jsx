import React from "react";
import img1 from "../assets/img/about-img-1.png";
import authorImg from "../assets/img/author-group.png";

function AboutSection2() {
  return (
    <section className="about-section-2 bg-grey-2">
      <div className="about-bg"></div>
      <div className="container">
        <div className="about-top padding">
          <div className="row align-items-center">
            <div
              className="col-lg-6 sm-padding wow fade-in-left"
              data-wow-delay="400ms"
            >
              <div className="about-thumb">
                <img src={img1} alt="about" />
              </div>
            </div>
            <div
              className="col-lg-6 sm-padding wow fade-in-right"
              data-wow-delay="400ms"
            >
              <div className="about-content-box">
                <div className="section-heading mb-40">
                  <div className="sub-heading">
                    <h4>
                      <span>03</span>About Company
                    </h4>
                  </div>
                  <h2>
                    Innovative Solutions for
                    <br /> Financial Company
                  </h2>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequunturs magni ipsum quia
                    dolor
                  </p>
                </div>
                <div className="about-item-box">
                  <div className="about-item-list">
                    <i className="fa-regular fa-square-check"></i>
                    <div className="about-item-content">
                      <h3>Best Quality</h3>
                      <p>
                        Duis aute irure dolor voluptate <br />
                        velit esse cillum cupidatat
                      </p>
                    </div>
                  </div>
                  <div className="about-item-list">
                    <i className="fa-regular fa-square-check"></i>
                    <div className="about-item-content">
                      <h3>Variety Size</h3>
                      <p>
                        Duis aute irure dolor voluptate <br />
                        velit esse cillum cupidatat
                      </p>
                    </div>
                  </div>
                  <div className="about-item-list">
                    <i className="fa-regular fa-square-check"></i>
                    <div className="about-item-content">
                      <h3>Trusted Service</h3>
                      <p>
                        Duis aute irure dolor voluptate <br />
                        velit esse cillum cupidatat
                      </p>
                    </div>
                  </div>
                  <div className="about-item-list">
                    <i className="fa-regular fa-square-check"></i>
                    <div className="about-item-content">
                      <h3>Free Cutting</h3>
                      <p>
                        Duis aute irure dolor voluptate <br />
                        velit esse cillum cupidatat
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about-btn-box">
                  <div className="about-btn">
                    <a href="about-us.html" className="default-btn">
                      Discover Now
                    </a>
                    <div className="at-box">
                      <div className="author-group">
                        <img src={authorImg} alt="author" />
                      </div>
                      <div className="rating-box">
                        <ul className="ratings">
                          <li>
                            <i className="fa-sharp fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-sharp fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-sharp fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-sharp fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-sharp fa-solid fa-star"></i>
                          </li>
                        </ul>
                        <h4>Original reviews</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-bottom">
          <div className="about-text">
            <h2>Company</h2>
            <div className="counter-wrap">
              <div className="row odometer-wrapper">
                <div className="col-lg-3 col-md-6 sm-padding">
                  <div className="counter-box text-center">
                    <h3>
                      <span className="odometer" data-count="10">
                        0
                      </span>
                      k+
                    </h3>
                    <p>Successful Projects</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 sm-padding">
                  <div className="counter-box text-center">
                    <h3>
                      <span className="odometer" data-count="31">
                        0
                      </span>
                      +
                    </h3>
                    <p>Years Experience</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 sm-padding">
                  <div className="counter-box text-center">
                    <h3>
                      <span className="odometer" data-count="1400">
                        0
                      </span>{" "}
                      +
                    </h3>
                    <p>Satisfied Clients</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 sm-padding">
                  <div className="counter-box text-center">
                    <h3>
                      <span className="odometer" data-count="50">
                        0
                      </span>
                      +
                    </h3>
                    <p>Expert Consultants</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection2;

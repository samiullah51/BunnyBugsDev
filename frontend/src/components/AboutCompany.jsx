import React from "react";
import about1 from "../assets/img/about-img-1.png";
import author from "../assets/img/author-group.png";

function AboutCompany() {
  return (
    <section className="about-section-2 minus-pd bg-grey">
      <div className="container">
        <div className="about-top p-0">
          <div className="row align-items-center">
            <div className="col-lg-6 sm-padding">
              <div className="about-thumb">
                <img src={about1} alt="about" />
              </div>
            </div>
            <div className="col-lg-6 sm-padding">
              <div className="about-content-box">
                <div className="section-heading mb-40">
                  <div className="sub-heading">
                    <h4>// About Company</h4>
                  </div>
                  <h2>
                    We’re Delivering The Best <br />
                    Customer Experience
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCompany;

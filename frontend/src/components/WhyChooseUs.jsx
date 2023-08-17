import React from "react";
import teamImg from "../assets/img/team-img-1.jpg";
function WhyChooseUs() {
  return (
    <section className="service-section-3 bg-grey padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 sm-padding">
            <div className="service-thumb">
              <img src={teamImg} alt="team" />
            </div>
          </div>
          <div className="col-lg-6 sm-padding">
            <div className="service-info-box">
              <div className="section-heading mb-20">
                <div className="sub-heading">
                  <h4>// Why Choose Us</h4>
                  <h2>
                    Innovative Solutions For <br />
                    Financial Company
                  </h2>
                  <p>
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' web sites versions have evolved over the
                    years,{" "}
                  </p>
                </div>
              </div>
              <div className="piechart-wrapper">
                <div className="pie-item text-center">
                  <div className="piechart" data-percent="80">
                    <span>80</span>%
                  </div>
                  <h4>Printing Services</h4>
                </div>
                <div className="pie-item text-center">
                  <div className="piechart" data-percent="90">
                    <span>90</span>%
                  </div>
                  <h4>Our Creativity</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

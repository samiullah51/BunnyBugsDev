import React from "react";

function AboutSection() {
  return (
    <section className="about-section bg-grey-2 padding">
      <div className="container">
        <div
          className="section-heading text-center mb-50 wow fade-in-bottom"
          data-wow-delay="200ms"
        >
          <div className="sub-heading">
            <h4>
              <span>02</span>About Experience
            </h4>
          </div>
          <h2>
            We Have Than 25 Years Experience in <br />
            Business Services
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 sm-padding">
            <div
              className="about-item wow fade-in-bottom"
              data-wow-delay="300ms"
            >
              <span>01</span>
              <h3>Best Services in Town</h3>
              <p>Neque porro quisquam dolorem ipsum quia dolor sit amet.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 sm-padding">
            <div
              className="about-item wow fade-in-bottom"
              data-wow-delay="500ms"
            >
              <span>02</span>
              <h3>Professional Team</h3>
              <p>Neque porro quisquam dolorem ipsum quia dolor sit amet.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 sm-padding">
            <div
              className="about-item wow fade-in-bottom"
              data-wow-delay="700ms"
            >
              <span>03</span>
              <h3>24 Hour Support</h3>
              <p>Neque porro quisquam dolorem ipsum quia dolor sit amet.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 sm-padding">
            <div
              className="about-item wow fade-in-bottom"
              data-wow-delay="800ms"
            >
              <span>04</span>
              <h3>Trusted Services</h3>
              <p>Neque porro quisquam dolorem ipsum quia dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

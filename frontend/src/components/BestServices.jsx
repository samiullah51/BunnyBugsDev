import React from "react";

function BestServices() {
  return (
    <section className="cta-section padding">
      <div className="cta-shape"></div>
      <div className="container">
        <div className="cta-content text-center">
          <div
            className="section-heading text-center mb-40 wow fade-in-bottom"
            data-wow-delay="200ms"
          >
            <div className="sub-heading">
              <h4>
                <span>09</span>Best Services
              </h4>
            </div>
            <h2>
              Do you have any question? <br />
              Feel free to contact us
            </h2>
          </div>
          <a
            href="contact.html"
            className="default-btn wow fade-in-bottom"
            data-wow-delay="400ms"
          >
            Contact With Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default BestServices;

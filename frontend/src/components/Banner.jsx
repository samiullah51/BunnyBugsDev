import React from "react";

function Banner() {
  return (
    <section className="hero-section bg-grey padding">
      <div className="container">
        <div className="hero-content">
          <h3>Welcome To Our Company</h3>
          <h1>Unlock Your Business's Full Potential with Consultiva</h1>
          <div className="hero-btn-wrap">
            <div className="hero-btn">
              <a href="service.html" className="default-btn-2">
                <span>Explore</span>
                <span>
                  Our Services<i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;

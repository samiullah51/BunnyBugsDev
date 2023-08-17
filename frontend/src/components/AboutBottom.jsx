import React from "react";

function AboutBottom() {
  return (
    <>
      <section className="about-bottom-2">
        <div className="container">
          <div className="about-text">
            <h2>Company</h2>
            <div className="counter-wrap">
              <div className="row odometer-wrapper">
                <div className="col-lg-3 col-md-6 sm-padding">
                  <div className="counter-box text-center">
                    <h3>
                      <span className="odometer" data-count="15">
                        0
                      </span>
                      k+
                    </h3>
                    <p>Projects Done</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 sm-padding">
                  <div className="counter-box text-center">
                    <h3>
                      <span className="odometer" data-count="155">
                        0
                      </span>
                      +
                    </h3>
                    <p>Years Experiance</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 sm-padding">
                  <div className="counter-box text-center">
                    <h3>
                      <span className="odometer" data-count="3825">
                        0
                      </span>
                      +
                    </h3>
                    <p>Happy Customer</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 sm-padding">
                  <div className="counter-box text-center">
                    <h3>
                      <span className="odometer" data-count="98">
                        0
                      </span>
                      +
                    </h3>
                    <p>Proffesional Worker</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutBottom;

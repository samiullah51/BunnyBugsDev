import React from "react";

function SocialSection() {
  return (
    <section className="social-section bg-grey bd-top bd-bottom">
      <div className="container">
        <div className="row social-wrap">
          <div className="col-md-3 col-sm-6 sm-padding">
            <div className="social-item bd-right">
              <div className="social-icon">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
              <h4>
                <a href="#">Facebook</a>
              </h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 sm-padding">
            <div className="social-item bd-right">
              <div className="social-icon icon-2">
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <h4>
                <a href="#">Instagram</a>
              </h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 sm-padding">
            <div className="social-item bd-right">
              <div className="social-icon icon-3">
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              <h4>
                <a href="#">Linkedin</a>
              </h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 sm-padding">
            <div className="social-item">
              <div className="social-icon icon-5">
                <a href="#">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </div>
              <h4>
                <a href="#">Whatsapp</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialSection;

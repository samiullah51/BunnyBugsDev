import React from "react";

function SocialSection() {
  return (
    <section class="social-section bg-grey bd-top bd-bottom">
      <div class="container">
        <div class="row social-wrap">
          <div class="col-md-3 col-sm-6 sm-padding">
            <div class="social-item bd-right">
              <div class="social-icon">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </div>
              <h4>
                <a href="#">Facebook</a>
              </h4>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 sm-padding">
            <div class="social-item bd-right">
              <div class="social-icon icon-2">
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
              <h4>
                <a href="#">Instagram</a>
              </h4>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 sm-padding">
            <div class="social-item bd-right">
              <div class="social-icon icon-3">
                <a href="#">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
              <h4>
                <a href="#">Linkedin</a>
              </h4>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 sm-padding">
            <div class="social-item">
              <div class="social-icon icon-5">
                <a href="#">
                  <i class="fa-brands fa-whatsapp"></i>
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

import React from "react";

function ShortContact() {
  return (
    <section className="short-contact-2 bg-grey-2">
      <div className="bg-half"></div>
      <div className="container">
        <div className="row short-contact-wrap align-items-center">
          <div className="col-lg-7 sm-padding">
            <div className="short-contact-content">
              <div className="section-heading mb-30">
                <div className="sub-heading">
                  <h4>Contact With Us</h4>
                </div>
                <h2>
                  We can tackle just about any task! <br />
                  contact us to get the best possible quote!
                </h2>
              </div>
              <a href="#" className="default-btn">
                Start Your Project
              </a>
            </div>
          </div>
          <div className="col-lg-5 sm-padding">
            <div className="short-contact-box text-center">
              <span>Or Call Us 24/7</span>
              <h3>
                <a href="#">+1 (700) 634 97 25</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShortContact;

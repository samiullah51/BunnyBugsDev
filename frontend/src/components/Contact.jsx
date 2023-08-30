import React from "react";

function Contact() {
  return (
    <section
      className="contact-section bg-grey-2 pt-0"
      style={{ marginTop: "100px" }}
    >
      <div className="container">
        <div className="row contact-wrap">
          <div className="col-lg-6 sm-padding">
            <div className="booking-form-2">
              <div className="contact-form">
                <form
                  action="https://creationic.com/html/consultiva/contact.php"
                  method="post"
                  id="ajax_contact"
                  className="form-horizontal"
                >
                  <div className="col-sm-12">
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      className="form-control"
                      placeholder="Your Name"
                      required=""
                    />
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="Phone"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <textarea
                        id="message"
                        name="message"
                        cols="30"
                        rows="5"
                        className="form-control address"
                        placeholder="Message"
                        required=""
                      ></textarea>
                    </div>
                  </div>
                  <button id="submit" className="default-btn" type="submit">
                    Send Message
                    <span></span>
                  </button>
                  <div id="form-messages" className="alert" role="alert"></div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 sm-padding">
            <div className="contact-box">
              <div className="contact-content">
                <div className="section-heading mb-30">
                  <div className="sub-heading">
                    <h4>// QUICK CONTACT</h4>
                  </div>
                  <h2>
                    Have Questions? <br />
                    Get in Touch!
                  </h2>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione
                  </p>
                </div>
              </div>
              <ul className="contact-list">
                <li>
                  <div className="contact-list-box">
                    <i className="fa-solid fa-phone-volume"></i>
                    <div className="contact-list-content">
                      <span>Have any question?</span>
                      <h3>
                        <a href="tel:+88 (7800) 0002">Free +88 (7800) 0002</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="contact-list-box">
                    <i className="fa-regular fa-envelope"></i>
                    <div className="contact-list-content">
                      <span>Write email</span>
                      <h3>
                        <a href="mailto: consultiva@gmail.com">
                          consultiva@gmail.com
                        </a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="contact-list-box">
                    <i className="fa-solid fa-location-dot"></i>
                    <div className="contact-list-content">
                      <span>Visit anytime</span>
                      <h3>golden street. New York</h3>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

import React from "react";
import teamImg from "../assets/img/team-details-img.jpg";
function TeamDetails() {
  return (
    <section className="team-details padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 sm-padding">
            <div className="team-details-thumb">
              <img src={teamImg} alt="team" />
            </div>
            <ul className="team-details-contact">
              <li>
                <i className="fa-solid fa-phone-volume"></i>
                <a href="tel:+256 3254 2654">+256 3254 2654</a>
              </li>
              <li>
                <i className="fa-regular fa-envelope"></i>
                <a href="tel:+256 3254 2654">supportalister@gmail.com</a>
              </li>
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <span>256 Avenue, Mark Street, Newyork City</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 sm-padding">
            <div className="team-details-content">
              <h4>Business Consulter</h4>
              <h2>Alistar Josefin</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered humour, or randomised words which
                don't look even slightly believable. If you are going to passage
                of Lorem Ipsum, you need to be sure there isn't anything
                embarrassing.
              </p>
              <div className="team-details-skills">
                <h3>My Skills</h3>
                {/* <ul className="skills-items">
                  <li className="skills-item">
                    <div className="progress-bar-wrap">
                      <h5>Business</h5>
                      <div className="progress">
                        <div
                          className="progress-bar wow slideInLeft"
                          data-wow-delay="0ms"
                          data-wow-duration="2000ms"
                          role="progressbar"
                          style="
                                                width: 92%;
                                                visibility: visible;
                                                animation-duration: 2000ms;
                                                animation-delay: 0ms;
                                                animation-name: slideInLeft;
                                            "
                        >
                          <span>92%</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="skills-item">
                    <div className="progress-bar-wrap">
                      <h5>Security</h5>
                      <div className="progress">
                        <div
                          className="progress-bar wow slideInLeft"
                          data-wow-delay="0ms"
                          data-wow-duration="2000ms"
                          role="progressbar"
                          style="
                                                width: 82%;
                                                visibility: visible;
                                                animation-duration: 2000ms;
                                                animation-delay: 0ms;
                                                animation-name: slideInLeft;
                                            "
                        >
                          <span>82%</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="skills-item">
                    <div className="progress-bar-wrap">
                      <h5>Financial</h5>
                      <div className="progress">
                        <div
                          className="progress-bar wow slideInLeft"
                          data-wow-delay="0ms"
                          data-wow-duration="2000ms"
                          role="progressbar"
                          style="
                                                width: 85%;
                                                visibility: visible;
                                                animation-duration: 2000ms;
                                                animation-delay: 0ms;
                                                animation-name: slideInLeft;
                                            "
                        >
                          <span>85%</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="skills-item">
                    <div className="progress-bar-wrap">
                      <h5>Investment</h5>
                      <div className="progress">
                        <div
                          className="progress-bar wow slideInLeft"
                          data-wow-delay="0ms"
                          data-wow-duration="2000ms"
                          role="progressbar"
                          style="
                                                width: 95%;
                                                visibility: visible;
                                                animation-duration: 2000ms;
                                                animation-delay: 0ms;
                                                animation-name: slideInLeft;
                                            "
                        >
                          <span>95%</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul> */}
                <h2>Progress</h2>
                <p className="mb-0">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered humour, or
                  randomised words which don't look even slightly believable. If
                  you are going to passage of Lorem Ipsum, you need to be sure
                  there isn't anything embarrassing hidden in the middle of
                  text. All the Lorem Ipsum Internet tend to repeat predefined
                  chunks as necessary, making this the first generator on the
                  Internet. It dictionary over combined with a handful of model
                  generate Lorem reasonable. The generated Lorem Ipsum is
                  therefore always free from repetition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamDetails;

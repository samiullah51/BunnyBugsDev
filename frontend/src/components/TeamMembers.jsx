import React from "react";
import team1 from "../assets/img/team-1.png";
import team2 from "../assets/img/team-2.png";
import team3 from "../assets/img/team-3.png";
import team4 from "../assets/img/team-4.png";

function TeamMembers() {
  return (
    <section className="team-section bg-grey padding">
      <div className="container">
        <div className="section-heading text-center mb-50">
          <div className="sub-heading">
            <h4>// Our Team Members</h4>
          </div>
          <h2>
            We Have A Professional <br />
            Consulting Team
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 sm-padding">
            <div className="team-item">
              <div className="team-thumb">
                <img src={team1} alt="team" />
              </div>
              <div className="team-content text-center">
                <h3>M.A. Himel Akond</h3>
                <h4>Senior Manager</h4>
                <ul className="team-social">
                  <li>
                    <a href="#" className="facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="google">
                      <i className="fab fa-google"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pinterest">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 sm-padding">
            <div className="team-item">
              <div className="team-thumb">
                <img src={team2} alt="team" />
              </div>
              <div className="team-content text-center">
                <h3>Alistar Josefin</h3>
                <h4>Senior Manager</h4>
                <ul className="team-social">
                  <li>
                    <a href="#" className="facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="google">
                      <i className="fab fa-google"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pinterest">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 sm-padding">
            <div className="team-item">
              <div className="team-thumb">
                <img src={team3} alt="team" />
              </div>
              <div className="team-content text-center">
                <h3>M.A. Velki Akida</h3>
                <h4>Web Developer</h4>
                <ul className="team-social">
                  <li>
                    <a href="#" className="facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="google">
                      <i className="fab fa-google"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pinterest">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 sm-padding">
            <div className="team-item">
              <div className="team-thumb">
                <img src={team4} alt="team" />
              </div>
              <div className="team-content text-center">
                <h3>Willam Mark</h3>
                <h4>Senior Developer</h4>
                <ul className="team-social">
                  <li>
                    <a href="#" className="facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="google">
                      <i className="fab fa-google"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pinterest">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamMembers;

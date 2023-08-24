import React from "react";
import prjectSvg from "../assets/img/project-element.svg";
import prject1 from "../assets/img/project-1.jpg";
import prject2 from "../assets/img/project-2.jpg";
import prject3 from "../assets/img/project-3.jpg";

function LatestProjectsSection() {
  return (
    <section className="project-section bg-grey padding">
      <div className="project-bg"></div>
      <div className="project-shape">
        <img src={prjectSvg} alt="element" />
      </div>
      <div className="container">
        <div
          className="section-heading text-center mb-50 className fade-in-bottom"
          data-classname-delay="200ms"
        >
          <div className="sub-heading">
            <h4>
              <span>05</span>Latest Project
            </h4>
          </div>
          <h2>
            Let's Have a Look All Our <br />
            Latest Projects.
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 sm-padding">
            <div
              className="project-item className fade-in-bottom"
              data-classname-delay="400ms"
            >
              <div className="project-thumb">
                <img src={prject1} alt="project" />
                <div className="project-icon">
                  <a href={prject1} className="img-popup">
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>
                  <a href="project-details.html">Business Planning</a>
                </h3>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit,
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 sm-padding">
            <div
              className="project-item className fade-in-bottom"
              data-classname-delay="600ms"
            >
              <div className="project-thumb">
                <img src={prject2} alt="project" />
                <div className="project-icon">
                  <a href={prject2} className="img-popup">
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>
                  <a href="project-details.html">Sales Analaysis</a>
                </h3>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit,
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 sm-padding">
            <div
              className="project-item className fade-in-bottom"
              data-classname-delay="800ms"
            >
              <div className="project-thumb">
                <img src={prject3} alt="project" />
                <div className="project-icon">
                  <a href={prject3} className="img-popup">
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>
                  <a href="project-details.html">Stock Investment</a>
                </h3>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestProjectsSection;

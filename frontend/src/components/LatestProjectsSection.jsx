import React from "react";
import prjectSvg from "../assets/img/project-element.svg";
import prject1 from "../assets/img/project-1.jpg";
import prject2 from "../assets/img/project-2.jpg";
import prject3 from "../assets/img/project-3.jpg";

function LatestProjectsSection() {
  return (
    <section class="project-section bg-grey padding">
      <div class="project-bg"></div>
      <div class="project-shape">
        <img src={prjectSvg} alt="element" />
      </div>
      <div class="container">
        <div
          class="section-heading text-center mb-50 className fade-in-bottom"
          data-className-delay="200ms"
        >
          <div class="sub-heading">
            <h4>
              <span>05</span>Latest Project
            </h4>
          </div>
          <h2>
            Let's Have a Look All Our <br />
            Latest Projects.
          </h2>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 sm-padding">
            <div
              class="project-item className fade-in-bottom"
              data-className-delay="400ms"
            >
              <div class="project-thumb">
                <img src={prject1} alt="project" />
                <div class="project-icon">
                  <a href={prject1} class="img-popup">
                    <i class="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
              <div class="project-content">
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
          <div class="col-lg-4 col-md-6 sm-padding">
            <div
              class="project-item className fade-in-bottom"
              data-className-delay="600ms"
            >
              <div class="project-thumb">
                <img src={prject2} alt="project" />
                <div class="project-icon">
                  <a href={prject2} class="img-popup">
                    <i class="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
              <div class="project-content">
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
          <div class="col-lg-4 col-md-12 sm-padding">
            <div
              class="project-item className fade-in-bottom"
              data-className-delay="800ms"
            >
              <div class="project-thumb">
                <img src={prject3} alt="project" />
                <div class="project-icon">
                  <a href={prject3} class="img-popup">
                    <i class="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
              <div class="project-content">
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

import React from "react";
import project1 from "../assets/img/project-img-1.jpg";
import project2 from "../assets/img/project-img-2.jpg";
import project3 from "../assets/img/project-img-3.jpg";
import project4 from "../assets/img/project-img-4.jpg";
function LatestProjects() {
  return (
    <section class="project-filter-section padding">
      <div class="container">
        <div class="section-heading text-center mb-50">
          <div class="sub-heading">
            <h4>// Latest Project</h4>
          </div>
          <h2>
            We’ve Done Lot’s Of Project! Have A Look
            <br />
            Our Recent Projects!
          </h2>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <ul class="project-filter text-center">
              <li class="active" data-filter="*">
                Show All{" "}
              </li>
              <li data-filter=".printing ">Development</li>
              <li data-filter=".branding">Branding</li>
              <li data-filter=".logo">Marketing</li>
              <li data-filter=".ofset">Security</li>
              <li data-filter=".shirt">Growth</li>
            </ul>
          </div>
        </div>
        <div class="filter-items row">
          <div class="col-lg-6 padding-15 single-item logo printing">
            <div class="filter-box">
              <div class="filter-thumb mb-20">
                <img src={project1} alt="project" />
                <div class="filter-content">
                  <h3>Business Consulting</h3>
                  <span>Development, Marketing</span>
                </div>
                <div class="filter-video-btn">
                  <a
                    class="img-popup"
                    data-autoplay="true"
                    data-vbtype="image"
                    href={project1}
                  >
                    <i class="fa-solid fa-expand"></i>
                  </a>
                </div>
              </div>
              <div class="filter-thumb">
                <img src={project2} alt="project" />
                <div class="filter-content">
                  <h3>Business Consulting</h3>
                  <span>Development, Marketing</span>
                </div>
                <div class="filter-video-btn">
                  <a
                    class="img-popup"
                    data-autoplay="true"
                    data-vbtype="image"
                    href={project2}
                  >
                    <i class="fa-solid fa-expand"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 padding-15 single-item ofset branding">
            <div class="filter-box">
              <div class="filter-thumb">
                <img src={project3} alt="project" />
                <div class="filter-content">
                  <h3>Business Consulting</h3>
                  <span>Development, Marketing</span>
                </div>
                <div class="filter-video-btn">
                  <a
                    class="img-popup"
                    data-autoplay="true"
                    data-vbtype="image"
                    href={project3}
                  >
                    <i class="fa-solid fa-expand"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 padding-15 single-item branding shirt">
            <div class="filter-box">
              <div class="filter-thumb">
                <img src={project4} alt="project" />
                <div class="filter-content">
                  <h3>Business Consulting</h3>
                  <span>Development, Marketing</span>
                </div>
                <div class="filter-video-btn">
                  <a
                    class="video-popup"
                    data-autoplay="true"
                    data-vbtype="video"
                    href="https://youtu.be/iyd7qUH3oH0"
                  >
                    <i class="fa-solid fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestProjects;

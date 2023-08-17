import React from "react";

function AboutVideoSection() {
  return (
    <section className="video-section-2">
      <div className="bg-half"></div>
      <div className="container">
        <div className="video-wrap-2">
          <div className="video-info text-center">
            <h2>
              Inspire. <span> Experiance.</span> Program
            </h2>
            <div className="video-box">
              <a
                className="video-popup play-btn"
                data-autoplay="true"
                data-vbtype="video"
                href="https://youtu.be/iyd7qUH3oH0"
              >
                <i className="fa-solid fa-play"></i>
                <div className="ripple"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutVideoSection;

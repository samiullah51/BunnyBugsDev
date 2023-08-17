import React from "react";
import sliderImg1 from "../assets/img/content-slider-1.jpg";
import sliderImg2 from "../assets/img/content-slider-2.jpg";
import sliderImg3 from "../assets/img/content-slider-3.jpg";

function AboutContentSlider() {
  return (
    <section className="about-content-slider bg-grey">
      <div className="container">
        <div className="outside-spacing">
          <div className="content-slider swiper-container swiper">
            <div className="consultiva-swiper-pagination"></div>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="content-item">
                  <div className="content-thumb">
                    <img src={sliderImg1} alt="content" />
                  </div>
                  <div className="content-caption">
                    <h2
                      data-animation="consultiva-fadeInUp"
                      data-delay="800ms"
                      data-duration="800ms"
                    >
                      Vision
                    </h2>
                    <h3
                      data-animation="consultiva-fadeInUp"
                      data-delay="1000ms"
                      data-duration="1000ms"
                    >
                      Transforming Visions into Reality
                    </h3>
                    <p
                      data-animation="consultiva-fadeInUp"
                      data-delay="1200ms"
                      data-duration="1200ms"
                    >
                      Our mission is to partner with businesses, leveraging our
                      expertise and passion to shape their future and turn their
                      visions into tangible success.
                    </p>
                  </div>
                  <div className="project-icon">
                    <a href={sliderImg1} className="img-popup">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="content-item">
                  <div className="content-thumb">
                    <img src={sliderImg2} alt="content" />
                  </div>
                  <div className="content-caption">
                    <h2
                      data-animation="consultiva-fadeInUp"
                      data-delay="800ms"
                      data-duration="800ms"
                    >
                      Matter
                    </h2>
                    <h3
                      data-animation="consultiva-fadeInUp"
                      data-delay="1000ms"
                      data-duration="1000ms"
                    >
                      Making Every Decision Count
                    </h3>
                    <p
                      data-animation="consultiva-fadeInUp"
                      data-delay="1200ms"
                      data-duration="1200ms"
                    >
                      At Consultiva, we understand that every decision matters.
                      Our expert consultants help businesses make informed
                      choices, navigate challenges.
                    </p>
                  </div>
                  <div className="project-icon">
                    <a href={sliderImg2} className="img-popup">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="content-item">
                  <div className="content-thumb">
                    <img src={sliderImg3} alt="content" />
                  </div>
                  <div className="content-caption">
                    <h2
                      data-animation="consultiva-fadeInUp"
                      data-delay="800ms"
                      data-duration="800ms"
                    >
                      About Us
                    </h2>
                    <h3
                      data-animation="consultiva-fadeInUp"
                      data-delay="1000ms"
                      data-duration="1000ms"
                    >
                      Driving Success Through Strategic Expertise
                    </h3>
                    <p
                      data-animation="consultiva-fadeInUp"
                      data-delay="1200ms"
                      data-duration="1200ms"
                    >
                      We are a leading business consulting firm, empowering
                      organizations with strategic insights and innovative
                      solutions to achieve sustainable growth and surpass their
                      goals.
                    </p>
                  </div>
                  <div className="project-icon">
                    <a href={sliderImg3} className="img-popup">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Carousel Control --> */}
            <div className="consultiva-slider-controls">
              <div className="consultiva-fraction">
                <div className="current-count"></div>
                <div className="sep">
                  <div className="swiper-slider-progress"></div>
                </div>
                <div className="total-count"></div>
              </div>
            </div>
            <div className="slider-preloader">
              <div className="dot-flashing"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutContentSlider;

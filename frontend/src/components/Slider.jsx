import React from "react";
import slider1 from "../assets/img/slider-img-1.jpg";
import slider2 from "../assets/img/slider-img-2.jpg";
import slider3 from "../assets/img/slider-img-3.jpg";

function Slider() {
  return (
    <>
      <div className="slider-section">
        <div className="consultiva-slider swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="slide-img-wrap">
                <img
                  decoding="async"
                  src={slider1}
                  alt="Home One Business"
                  className="slide-img kenburns kenburns-top"
                  //   style="animation-duration: 12000ms"
                />
              </div>
              <div className="slider-content-wrap">
                <div className="content-width">
                  <div className="slider-content">
                    <div className="consultiva-caption heading">
                      <div className="inner-layer">
                        <div
                          className="consultiva-cap"
                          data-animation="consultiva-fadeInUp"
                          data-delay="1200ms"
                          data-duration="1000ms"
                        >
                          Innovate. <span> Grow.</span> Thrive
                        </div>
                      </div>
                    </div>
                    <div
                      className="consultiva-btn-group"
                      data-animation="consultiva-fadeInUp"
                      data-delay="1600ms"
                      data-duration="1400ms"
                    >
                      <div className="video-popup-box">
                        <a
                          className="video-popup"
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
              </div>
            </div>
            <div className="swiper-slide">
              <div className="slide-img-wrap">
                <img
                  decoding="async"
                  src={slider2}
                  alt="Home One Business"
                  className="slide-img kenburns kenburns-top"
                  //   style="animation-duration: 12000ms"
                />
              </div>
              <div className="slider-content-wrap">
                <div className="content-width">
                  <div className="slider-content">
                    <div className="consultiva-caption heading">
                      <div className="inner-layer">
                        <div
                          className="consultiva-cap"
                          data-animation="consultiva-fadeInUp"
                          data-delay="1200ms"
                          data-duration="1000ms"
                        >
                          Inspire. <span> Evolve.</span> Soar
                        </div>
                      </div>
                    </div>
                    <div
                      className="consultiva-btn-group"
                      data-animation="consultiva-fadeInUp"
                      data-delay="1600ms"
                      data-duration="1400ms"
                    >
                      <div className="video-popup-box">
                        <a
                          className="video-popup"
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
              </div>
            </div>
            <div className="swiper-slide">
              <div className="slide-img-wrap">
                <img
                  decoding="async"
                  src={slider3}
                  alt="Home One Business"
                  className="slide-img kenburns kenburns-top"
                  //   style="animation-duration: 12000ms"
                />
              </div>
              <div className="slider-content-wrap">
                <div className="content-width">
                  <div className="slider-content">
                    <div className="consultiva-caption heading">
                      <div className="inner-layer">
                        <div
                          className="consultiva-cap"
                          data-animation="consultiva-fadeInUp"
                          data-delay="1200ms"
                          data-duration="1000ms"
                        >
                          Drive. <span> Elevate.</span> Conquer
                        </div>
                      </div>
                    </div>
                    <div
                      className="consultiva-btn-group"
                      data-animation="consultiva-fadeInUp"
                      data-delay="1600ms"
                      data-duration="1400ms"
                    >
                      <div className="video-popup-box">
                        <a
                          className="video-popup"
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
              </div>
            </div>
          </div>
          <div className="consultiva-slider-controls">
            <div className="consultiva-fraction">
              <div className="current-count"></div>
              <div className="sep">
                <div className="swiper-slider-progress"></div>
              </div>
              <div className="total-count"></div>
            </div>
            <div className="consultiva-swiper-pagination"></div>
          </div>
          <div className="slider-preloader">
            <div className="dot-flashing"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;

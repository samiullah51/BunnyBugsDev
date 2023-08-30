import React from "react";
import author1 from "../assets/img/testi-author-1.png";
import author2 from "../assets/img/testi-author-2.png";

function Testemonial() {
  return (
    <section className="testimonial-section bg-grey-2 padding">
      <div className="testi-bg"></div>
      <div className="container">
        <div className="testi-top-content mb-50">
          <div
            className="section-heading wow fade-in-bottom"
            data-wow-delay="200ms"
          >
            <div className="sub-heading">
              <h4>
                <span>//</span>Our Testimonials
              </h4>
            </div>
            <h2>
              What Our Customers Are Talking <br />
              About Our Services
            </h2>
          </div>
          {/* <!-- Carousel Arrows --> */}
          <div className="swiper-arrow">
            <div className="swiper-nav swiper-next">
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className="swiper-nav swiper-prev">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className="outside-spacing">
          <div className="testi-carousel swiper">
            <div className="swiper-wrapper swiper-container">
              <div className="swiper-slide">
                <div className="testi-item">
                  <i className="fa-solid fa-quote-left"></i>
                  <div className="testi-content">
                    <h3>"Great Team Work"</h3>
                    <p>
                      There are many variations of passages of Lorem but
                      majority have suffered alteration in some form, by
                      injected which even slightly believable. If you are going
                      to use
                    </p>
                  </div>
                  <div className="testi-author-box">
                    <div className="author-info">
                      <img src={author1} alt="author" />
                      <div className="author-content">
                        <h3>Jonson Marko</h3>
                        <span>Teacher</span>
                      </div>
                    </div>
                    <ul className="ratings">
                      <li>
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testi-item">
                  <i className="fa-solid fa-quote-left"></i>
                  <div className="testi-content">
                    <h3>"Best service ever"</h3>
                    <p>
                      There are many variations of passages of Lorem but
                      majority have suffered alteration in some form, by
                      injected which even slightly believable. If you are going
                      to use
                    </p>
                  </div>
                  <div className="testi-author-box">
                    <div className="author-info">
                      <img src={author2} alt="author" />
                      <div className="author-content">
                        <h3>Mhanda Lawson</h3>
                        <span>CEO & Founder</span>
                      </div>
                    </div>
                    <ul className="ratings">
                      <li>
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Carousel Dots --> */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}

export default Testemonial;

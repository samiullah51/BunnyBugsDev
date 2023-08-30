import React from "react";
import serviceDetails from "../assets/img/service-details.jpg";
import service2 from "../assets/img/service-details-2.jpg";

function ServiceDetails() {
  return (
    <section className="service-details bg-grey-2 pb-0 padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 sm-padding">
            <div className="service-details-item">
              <div className="service-details-info">
                <div className="service-details-thumb">
                  <img src={serviceDetails} alt="img" />
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered humour, or
                  randomised words which don't look even slightly believable. If
                  you are going to passage of Lorem Ipsum, you need to be sure
                  there isn't anything embarrassing hidden in the middle of
                  text. All the Lorem Ipsum Internet tend to repeat predefined
                  chunks as necessary, making this the first generator on the
                  Internet. It dictionary over combined with a handful of model
                  generate Lorem reasonable.{" "}
                </p>
                <p className="desc">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum doloramet, consectetur, adipisci velit, sed
                  quia non numquam eius modi tempora incidunt ut labore et
                  dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                  veniam, quis nostrum exercitationem ullam corporis suscipit
                  laboriosam, nisi ut aliquid ex ea commodi consequatur
                </p>
              </div>
              <div className="service-details-info">
                <h3>How We Work Here</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta Nemo enim ipsam voluptatem quia voluptas
                  sit aspernatur aut odit aut fugit,
                </p>
              </div>
              <div className="service-details-thumb">
                <img src={service2} alt="img" />
                <div className="content-video-box">
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
              <div className="service-details-info">
                <h3>How long does it take you to complete order?</h3>
                <p>
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod possimus, omnis voluptas
                  assumenda est, omnis dolor repellendus. Temporibus autem
                  quibusdam et aut officiis rerum necessitatibus saepe eveniet
                  ut et voluptates repudiandae
                </p>
              </div>
            </div>
            <div className="faq-section faq-2 bg-grey-2">
              <div className="faq-content text-center">
                {/* <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What Services Are You Get It?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                      style=""
                    >
                      <div className="accordion-body">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything hidden middle of text. All the Lorem
                        Ipsum generators on the Internet tend to repeat
                        predefined
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        How Much Price Our Services?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                      style=""
                    >
                      <div className="accordion-body">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything hidden middle of text. All the Lorem
                        Ipsum generators on the Internet tend to repeat
                        predefined
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Learn About Our Team Member?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything hidden middle of text. All the Lorem
                        Ipsum generators on the Internet tend to repeat
                        predefined
                      </div>
                    </div>
                  </div>
                </div> */}
                <h1>Accordian is here...</h1>
              </div>
            </div>
            {/* <!-- ./ faq-section --> */}
          </div>
          <div className="col-lg-4 sm-padding">
            <div className="service-details-content">
              <ul className="service-details-list">
                <li>
                  <a href="service-details.html">
                    <h3>Company Development</h3>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </a>
                </li>
                <li className="active">
                  <a href="service-details.html">
                    <h3>Business &amp; Strategy</h3>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </a>
                </li>
                <li>
                  <a href="service-details.html">
                    <h3>Business Consulting</h3>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </a>
                </li>
                <li>
                  <a href="service-details.html">
                    <h3>IT Management</h3>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </a>
                </li>
                <li>
                  <a href="service-details.html">
                    <h3>Financial Consulting</h3>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </a>
                </li>
                <li>
                  <a href="service-details.html">
                    <h3>Product Analaysis</h3>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </a>
                </li>
              </ul>
              <div className="help-box">
                <h3>Need Any Help?</h3>
                <p>
                  Lorem ipsum is simply free text used by copytyping refreshing.
                  Neque porro est qui dolorem ipsum quia quaed inventore
                  veritatis et quasi architecto{" "}
                </p>
                <div className="help-box-item text-center">
                  <h4>Call Us 24/7</h4>
                  <h3>
                    <a href="tel:+17006349725">+1 (700) 634 97 25</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetails;

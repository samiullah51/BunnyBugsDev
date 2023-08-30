import React from "react";
import img1 from "../assets/img/project-details-img.jpg";
import img2 from "../assets/img/project-details-img-2.jpg";
function ProjectDetails() {
  return (
    <section className="project-details bg-grey-2 padding">
      <div className="container">
        <div className="project-details-thumb">
          <img src={img1} alt="project" />
          <div className="project-details-text">
            <h3>Business Consulting</h3>
          </div>
        </div>
        <div className="row project-details-content">
          <div className="col-lg-9 sm-padding">
            <div className="project-details-info mb-60">
              <p className="mb-30">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised don't look even slightly
                believable. If you are going to use a passage of Lorem need to
                be sure there isn't anything embarrassing hidden in the middle
                of text. All Lorem Ipsum generators on the Internet tend to
                repeat predefined chunks as necessary, making this the first
                true generator on the Internet. It uses a dictionary structures.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore{" "}
              </p>
            </div>
            <div className="project-details-info">
              <h3>Detail project information</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now Lorem Ipsum
                as their default model text,
              </p>
            </div>
          </div>
          <div className="col-lg-3 sm-padding">
            <ul className="project-details-list">
              <li>
                <h3>Client</h3>
                <span>Alonso D. Nicolas</span>
              </li>
              <li>
                <h3>Date:</h3>
                <span>20 February, 2023</span>
              </li>
              <li>
                <h3>Category</h3>
                <span>Printing, Designing</span>
              </li>
              <li>
                <h3>Project Value</h3>
                <span>$375</span>
              </li>
              <li>
                <h3>Share:</h3>
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
              </li>
            </ul>
          </div>
        </div>
        <div className="project-details-thumb">
          <img src={img2} alt="project" />
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
      </div>
    </section>
  );
}

export default ProjectDetails;

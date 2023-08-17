import React from "react";
import shape1 from "../assets/img/blog-shape-1.png";
import post1 from "../assets/img/post-1.png";
import post2 from "../assets/img/post-2.png";
import post3 from "../assets/img/post-3.png";

function LatestNews() {
  return (
    <section class="blog-section bg-grey-2">
      <div class="bg-color"></div>
      <div class="blog-shape">
        <img src={shape1} alt="blog" />
      </div>
      <div class="container">
        <div
          class="section-heading text-center mb-50 wow fade-in-bottom"
          data-wow-delay="200ms"
        >
          <div class="sub-heading">
            <h4>
              <span>10</span>Latest News & Blog
            </h4>
          </div>
          <h2>
            Articles Daily Updated Latest Articles <br />
            Directly From The Blog
          </h2>
        </div>
        <div class="row grid-post">
          <div class="col-lg-4 col-md-6 sm-padding">
            <div class="post-card wow fade-in-bottom" data-wow-delay="400ms">
              <div class="post-content-wrap">
                <div class="post-content">
                  <div class="post-meta">
                    <h4>
                      <span>News </span> . 19 February, 2023
                    </h4>
                  </div>
                  <h3>
                    <a href="blog-details.html">
                      Finances And Accounting Are One Of The Hardest
                    </a>
                  </h3>
                </div>
                <div class="post-thumb">
                  <img src={post1} alt="post" />
                  <div class="post-icon">
                    <a href="blog-details.html">
                      <i class="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
                <p>
                  Duis aute irure dolor in voluptate velit esse on cillum dolore
                  eu fugiat nulla.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 sm-padding">
            <div class="post-card wow fade-in-bottom" data-wow-delay="500ms">
              <div class="post-content-wrap">
                <div class="post-content">
                  <div class="post-meta">
                    <h4>
                      <span>News </span> . 19 February, 2023
                    </h4>
                  </div>
                  <h3>
                    <a href="blog-details.html">
                      Developing Leaders And High Performance Teams.
                    </a>
                  </h3>
                </div>
                <div class="post-thumb">
                  <img src={post2} alt="post" />
                  <div class="post-icon">
                    <a href="blog-details.html">
                      <i class="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
                <p>
                  Duis aute irure dolor in voluptate velit esse on cillum dolore
                  eu fugiat nulla.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 sm-padding">
            <div class="post-card wow fade-in-bottom" data-wow-delay="600ms">
              <div class="post-content-wrap">
                <div class="post-content">
                  <div class="post-meta">
                    <h4>
                      <span>News </span> . 19 February, 2023
                    </h4>
                  </div>
                  <h3>
                    <a href="blog-details.html">
                      Innovation To Accelerate Business Success
                    </a>
                  </h3>
                </div>
                <div class="post-thumb">
                  <img src={post3} alt="post" />
                  <div class="post-icon">
                    <a href="blog-details.html">
                      <i class="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
                <p>
                  Duis aute irure dolor in voluptate velit esse on cillum dolore
                  eu fugiat nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestNews;

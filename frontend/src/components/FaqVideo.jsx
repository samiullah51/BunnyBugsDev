import React from "react";
import img from "../assets/img/cta-img.jpg";
function FaqVideo() {
  return (
    <section class="cta-section-2">
      <div class="container">
        <div class="cta-thumb">
          <img src={img} alt="cta" />
          <div class="cta-video-box">
            <a
              class="video-popup play-btn"
              data-autoplay="true"
              data-vbtype="video"
              href="https://youtu.be/iyd7qUH3oH0"
            >
              <i class="fa-solid fa-play"></i>
              <div class="ripple"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqVideo;

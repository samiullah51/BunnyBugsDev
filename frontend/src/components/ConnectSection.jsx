import React from "react";
import cn1 from "../assets/img/cn-1.png";
import cn2 from "../assets/img/cn-2.png";
import cn3 from "../assets/img/cn-3.png";
import cn4 from "../assets/img/cn-4.png";
import cn5 from "../assets/img/cn-5.png";
import cn6 from "../assets/img/cn-6.png";
import skillBg from "../assets/img/skill-bg.jpg";

function ConnectSection() {
  return (
    <div class="connect-section bg-grey">
      <div class="container">
        <div class="row connect-wrap">
          <div class="col-lg-2 col-md-4 col-sm-6 padding-15">
            <div class="cn-box">
              <div class="cn-thumb">
                <img src={cn1} alt="cn" />
                <div class="cn-icon">
                  <a href={skillBg} class="img-popup">
                    <span>instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 padding-15">
            <div class="cn-box">
              <div class="cn-thumb">
                <img src={cn2} alt="cn" />
                <div class="cn-icon">
                  <a href={skillBg} class="img-popup">
                    <span>instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 padding-15">
            <div class="cn-box">
              <div class="cn-thumb">
                <img src={cn3} alt="cn" />
                <div class="cn-icon">
                  <a href={skillBg} class="img-popup">
                    <span>instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 padding-15">
            <div class="cn-box">
              <div class="cn-thumb">
                <img src={cn4} alt="cn" />
                <div class="cn-icon">
                  <a href={skillBg} class="img-popup">
                    <span>instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 padding-15">
            <div class="cn-box">
              <div class="cn-thumb">
                <img src={cn5} alt="cn" />
                <div class="cn-icon">
                  <a href={skillBg} class="img-popup">
                    <span>instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 padding-15">
            <div class="cn-box">
              <div class="cn-thumb">
                <img src={cn6} alt="cn" />
                <div class="cn-icon">
                  <a href={skillBg} class="img-popup">
                    <span>instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectSection;

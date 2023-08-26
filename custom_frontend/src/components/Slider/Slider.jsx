import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./Slider.css";
// import required modules
import { EffectCards } from "swiper/modules";
import team1 from "../../assets/team/ins1.png";
import team2 from "../../assets/team/ins2.png";
import team3 from "../../assets/team/ins3.png";
import team4 from "../../assets/team/ins1.png";
import bg from "../../assets/team/bg.png";
export default function Sliderr() {
  const data = [
    {
      id: 1,
      username: "Sami Samiullah",
      position: "Senior MERN Stack Developer",
      desc: "lorem some random textz 151 in vain as Pakistan hold nerve in last-over thriller. Chasing 301, Pakistan needed 11 off the final over, and just about got over the line to seal the series",
    },
    {
      id: 2,
      username: "Abdul Rauf",
      position: "Full Stack Developer + DevOps Engineer",
      desc: "lorem some random text are goes here",
    },
    {
      id: 3,
      username: "Monis Ali",
      position: "Templete Expert & C++ Developer",
      desc: "lorem some random text arn vain as Pakistan asdf asdfasdfasd fasdfasfasfas fasdfasdfasfasdf asfaf asdfasfasfasdfasdfasdfasdfasdfasdfasfdasfasfdasdfasdfafasdf  hold nerve in last-over thriller. Chasing 301, Pakistan needed 11 off the final over, and just about got over the line to seal the series",
    },
    {
      id: 4,
      username: "Arsalan Khan",
      position: "Laravel Developer",
      desc: "loremgoes here WebGurbaz 151 in vain as Pakistan hold nerve in last-over thriller. Chasing 301, Pakistan needed 11 off the final over, and just about got over the line to seal the series",
    },
    {
      id: 5,
      username: "Ahsan Khan",
      position: "PHP Developer",
      desc: "lorem some random text are goes here WebGurbaz 151 in vain as Pakistan hold nerve in last-over thriller. Chasing 301, Pakistan needed 11 off the final over, and just about got over the line to seal the series",
    },
    {
      id: 5,
      username: "Mudassir Zaman",
      position: "Backend Developer",
      desc: "lorem some random text are goeskistan hold nerve in last-over thriller. Chasing 301, Pakistan needed 11 off the final over, and just about got over the line to seal the series",
    },
  ];
  const colors = [
    "#fd7e14",
    "#0dcaf0",
    "#0ab86f",
    "#6f42c1",
    "#76a30c",
    "#b40a2f",
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  return (
    <div className="main__slider">
      <img src={bg} alt="" className="bg__imaga" />
      <div className="slider__left">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          onSlideChange={handleSlideChange}
        >
          <SwiperSlide>
            <img src={team1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={team2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={team3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={team3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={team4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={team3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="slider__right">
        <h2 style={{ color: colors[activeSlide] }}>
          {data[activeSlide].username}
        </h2>
        <p className="position">{data[activeSlide].position}</p>
        <p className="desc">{data[activeSlide].desc}</p>

        {/* socal links */}
        <div className="social__links">
          <div
            className="single__link"
            style={{ backgroundColor: colors[activeSlide] }}
          >
            <LinkedInIcon />
          </div>
          <div
            className="single__link"
            style={{ backgroundColor: colors[activeSlide] }}
          >
            <GitHubIcon />
          </div>
          <div
            className="single__link"
            style={{ backgroundColor: colors[activeSlide] }}
          >
            <FacebookIcon />
          </div>
          <div
            className="single__link"
            style={{ backgroundColor: colors[activeSlide] }}
          >
            <InstagramIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

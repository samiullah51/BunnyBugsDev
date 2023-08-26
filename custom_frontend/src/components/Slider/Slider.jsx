import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./Slider.css";
// import required modules
import { EffectCards } from "swiper/modules";
import team1 from "../../assets/team/ins1.png";
import team2 from "../../assets/team/ins2.png";
import team3 from "../../assets/team/ins3.png";
export default function Sliderr() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  return (
    <>
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
          {" "}
          <img src={team2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={team3} alt="" />
        </SwiperSlide>
        <h2>sdfsdf {activeSlide + 1}</h2>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}

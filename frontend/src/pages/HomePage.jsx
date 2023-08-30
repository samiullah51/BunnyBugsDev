import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Slider from "../components/Slider";
import YearSection from "../components/YearSection";
import ServiceSection from "../components/ServiceSection";
import AboutSection from "../components/AboutSection";
import AboutContentSlider from "../components/AboutContentSlider";
import AboutSection2 from "../components/AboutSection2";
import SkillSection from "../components/SkillSection";
import LatestProjectsSection from "../components/LatestProjectsSection";
import GetInTouch from "../components/GetInTouch";
import Testemonial from "../components/Testemonial";
import CommonQuestions from "../components/CommonQuestions";
import BestServices from "../components/BestServices";
import LatestNews from "../components/LatestNews";
import GlobalClient from "../components/GlobalClient";
import ConnectSection from "../components/ConnectSection";
import SocialSection from "../components/SocialSection";
import WidgetSection from "../components/WidgetSection";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      {/* // header */}
      <Header route="home" />
      {/* // banner */}
      <Banner />
      {/* Slider */}
      <Slider />
      {/* Year Section */}
      <YearSection />
      {/* Service Section */}
      <ServiceSection />
      {/* About Section */}
      <AboutSection />
      {/* About Content Slider */}
      <AboutContentSlider />
      {/* Latest Projects Section */}
      <LatestProjectsSection />
      {/* Get in Touch */}
      <GetInTouch />
      {/* Testemonial */}
      <Testemonial />
      {/* Best Services */}
      <BestServices />
      {/* Latest News */}
      <GlobalClient />
      {/* Connect Sections */}
      <SocialSection />
      {/* Widget Section */}
      <WidgetSection />
      {/* Footer */}
      <Footer />
    </>
  );
}

export default HomePage;

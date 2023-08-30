import React from "react";
import Header from "../components/Header";
import AboutPageBanner from "../components/AboutPageBanner";
import CommonQuestions from "../components/CommonQuestions";
import WhyChooseUs from "../components/WhyChooseUs";
import FaqVideo from "../components/FaqVideo";
import GlobalClient from "../components/GlobalClient";
import ConnectSection from "../components/ConnectSection";
import SocialSection from "../components/SocialSection";
import WidgetSection from "../components/WidgetSection";
import Footer from "../components/Footer";

function FaqPage() {
  return (
    <>
      {/* header */}
      <Header route="faq" />
      {/* banner */}
      <AboutPageBanner title="FAQ’s" />
      {/* Common Question */}
      <CommonQuestions />
      {/* Why choose us */}
      <WhyChooseUs />
      {/* faq Video */}
      <FaqVideo />
      {/* Global clients */}
      <GlobalClient />
      {/* connect section */}
      <ConnectSection />
      {/* Social Section */}
      <SocialSection />
      {/* Widget Section */}
      <WidgetSection />
      {/* Footer */}
      <Footer />
    </>
  );
}

export default FaqPage;

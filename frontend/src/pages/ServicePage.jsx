import React from "react";
import Header from "../components/Header";
import AboutPageBanner from "../components/AboutPageBanner";
import LatestServices from "../components/LatestServices";
import AboutBottom from "../components/AboutBottom";
import AboutVideoSection from "../components/AboutVideoSection";
import AboutProcess from "../components/AboutProcess";
import ShortContact from "../components/ShortContact";
import GlobalClient from "../components/GlobalClient";
import ConnectSection from "../components/ConnectSection";
import SocialSection from "../components/SocialSection";
import WidgetSection from "../components/WidgetSection";
import Footer from "../components/Footer";

function ServicePage() {
  return (
    <>
      {/* header */}
      <Header route="service" />
      {/* banner */}
      <AboutPageBanner title="Service" desc="Grid" />
      {/* latest services */}
      <LatestServices />
      {/* our process */}
      <ShortContact />
      {/* Social Section */}
      <SocialSection />
      {/* Widget Section */}
      <WidgetSection />
      {/* Footer */}
      <Footer />
    </>
  );
}

export default ServicePage;

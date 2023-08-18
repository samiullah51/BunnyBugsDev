import React from "react";
import Header from "../components/Header";
import AboutPageBanner from "../components/AboutPageBanner";
import ServiceDetails from "../components/ServiceDetails";
import ConnectSection from "../components/ConnectSection";
import SocialSection from "../components/SocialSection";
import WidgetSection from "../components/WidgetSection";
import Footer from "../components/Footer";

function ServiceDetailsPage() {
  return (
    <>
      {/* header */}
      <Header route="serviceDetails" />
      {/* banner */}
      <AboutPageBanner title="Business & Strategy" />
      {/* service details */}
      <ServiceDetails />
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

export default ServiceDetailsPage;

import React from "react";
import Header from "../components/Header";
import AboutPageBanner from "../components/AboutPageBanner";
import PricingPlans from "../components/PricingPlans";
import GlobalClient from "../components/GlobalClient";
import ConnectSection from "../components/ConnectSection";
import SocialSection from "../components/SocialSection";
import WidgetSection from "../components/WidgetSection";
import Footer from "../components/Footer";

function PricingPage() {
  return (
    <>
      {/* header */}
      <Header route="pricing" />
      {/* banner */}
      <AboutPageBanner title="Pricing Plans" />
      {/* Pricing plans */}
      <PricingPlans />
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

export default PricingPage;

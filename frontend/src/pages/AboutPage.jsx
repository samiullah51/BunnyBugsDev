import React from "react";
import Header from "../components/Header";
import AboutPageBanner from "../components/AboutPageBanner";
import AboutCompany from "../components/AboutCompany";
import AboutPromoSection from "../components/AboutPromoSection";
import AboutProcess from "../components/AboutProcess";
import AboutBottom from "../components/AboutBottom";
import AboutVideoSection from "../components/AboutVideoSection";
import Testemonial from "../components/Testemonial";
import ShortContact from "../components/ShortContact";
import TeamMembers from "../components/TeamMembers";
import GlobalClient from "../components/GlobalClient";
import ConnectSection from "../components/ConnectSection";
import SocialSection from "../components/SocialSection";
import WidgetSection from "../components/WidgetSection";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <>
      {/* Header */}
      <Header route="about" />
      {/* Banner */}
      <AboutPageBanner title="About Us" />
      {/* About Company */}
      <AboutCompany />
      {/* About Promo Section */}
      <AboutPromoSection />
      {/* About Process */}
      <AboutProcess />
      {/* about Bottom */}
      <AboutBottom />
      {/* About Video Section */}
      <AboutVideoSection />
      {/* Testemonial */}
      <Testemonial />
      {/* Short Contact */}
      <ShortContact />
      {/* Team Members */}
      <TeamMembers />
      {/* Global Clients */}
      <GlobalClient />
      {/* Connection Section */}
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

export default AboutPage;

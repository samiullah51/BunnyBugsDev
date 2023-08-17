import React from "react";
import Header from "../components/Header";
import AboutPageBanner from "../components/AboutPageBanner";
import Map from "../components/Map";
import Contact from "../components/Contact";
import SocialSection from "../components/SocialSection";
import ConnectSection from "../components/ConnectSection";
import Footer from "../components/Footer";
import WidgetSection from "../components/WidgetSection";

function ContactPage() {
  return (
    <>
      {/* header */}
      <Header />
      {/* banner */}
      <AboutPageBanner title="Contact Us" />
      {/* Map */}
      {/* <Map /> */}
      <Contact />
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

export default ContactPage;

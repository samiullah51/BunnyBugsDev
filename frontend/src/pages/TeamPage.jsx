import React from "react";
import Header from "../components/Header";
import AboutPageBanner from "../components/AboutPageBanner";
import WhyChooseUs from "../components/WhyChooseUs";
import TeamMembers from "../components/TeamMembers";
import AboutBottom from "../components/AboutBottom";
import AboutVideoSection from "../components/AboutVideoSection";
import GlobalClient from "../components/GlobalClient";
import ConnectSection from "../components/ConnectSection";
import SocialSection from "../components/SocialSection";
import WidgetSection from "../components/WidgetSection";
import Footer from "../components/Footer";

function TeamPage() {
  return (
    <>
      {/* header */}
      <Header route="team" />
      {/* banner */}
      <AboutPageBanner title="Our Team" />
      {/* why choose us */}
      <WhyChooseUs />
      {/* Team members */}
      <TeamMembers />
      <AboutBottom />
      {/* about video section */}
      <AboutVideoSection />
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

export default TeamPage;

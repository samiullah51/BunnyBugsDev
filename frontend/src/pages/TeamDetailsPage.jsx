import React from "react";
import Header from "../components/Header";
import AboutPageBanner from "../components/AboutPageBanner";
import TeamDetails from "../components/TeamDetails";
import AboutBottom from "../components/AboutBottom";
import AboutVideoSection from "../components/AboutVideoSection";
import GlobalClient from "../components/GlobalClient";
import ConnectSection from "../components/ConnectSection";
import SocialSection from "../components/SocialSection";
import WidgetSection from "../components/WidgetSection";
import Footer from "../components/Footer";

function TeamDetailsPage() {
  return (
    <>
      {/* header */}
      <Header route="teamDetails" />
      {/* banner */}
      <AboutPageBanner title="Team Details" />
      {/* Team Details */}
      <TeamDetails />
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

export default TeamDetailsPage;

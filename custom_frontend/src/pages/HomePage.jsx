import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MainSection from "../components/MainSection/MainSection";
import HomeShowCase from "../components/HomeShowCase/HomeShowCase";
import Featured from "../components/Featured/Featured";
import OnePlaceSection from "../components/OnePlaceSection/OnePlaceSection";
import CollaborateWith from "../components/CollaborateWith/CollaborateWith";
import OurApps from "../components/OurApps/OurApps";
import Sliderr from "../components/Slider/Slider";

function HomePage() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <MainSection>
        <HomeShowCase />
      </MainSection>
      {/* featured */}
      <Featured />
      {/* oneplace section */}
      <OnePlaceSection />
      {/* Collaborate with team */}
      <CollaborateWith />
      {/* Our Apps */}
      <OurApps />
      {/* Slider */}
      <Sliderr />
    </div>
  );
}

export default HomePage;

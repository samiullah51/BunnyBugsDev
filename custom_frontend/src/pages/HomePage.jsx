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
      <h2
        style={{
          fontSize: "40px",
          color: "var(--bs-gray-dark)",
          textAlign: "center",
          margin: "30px 0",
        }}
      >
        Meet Our Team
      </h2>
      <Sliderr />
    </div>
  );
}

export default HomePage;

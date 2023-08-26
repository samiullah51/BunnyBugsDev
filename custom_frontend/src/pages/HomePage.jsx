import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MainSection from "../components/MainSection/MainSection";
import HomeShowCase from "../components/HomeShowCase/HomeShowCase";
import Featured from "../components/Featured/Featured";
import OnePlaceSection from "../components/OnePlaceSection/OnePlaceSection";
import CollaborateWith from "../components/CollaborateWith/CollaborateWith";

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
    </div>
  );
}

export default HomePage;

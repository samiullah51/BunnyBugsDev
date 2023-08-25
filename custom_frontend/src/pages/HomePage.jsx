import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MainSection from "../components/MainSection/MainSection";
import HomeShowCase from "../components/HomeShowCase/HomeShowCase";
import Featured from "../components/Featured/Featured";
import OnePlaceSection from "../components/OnePlaceSection/OnePlaceSection";

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
    </div>
  );
}

export default HomePage;

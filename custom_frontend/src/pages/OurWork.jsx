import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import MainSection from "../components/MainSection/MainSection";
import AboutShowCase from "../components/AboutShowCase/AboutShowCase";
import OurApps from "../components/OurApps/OurApps";

function OurWork() {
  return (
    <>
      <Navbar />
      <MainSection>
        <AboutShowCase />
      </MainSection>
      <div style={{ marginTop: "350px" }}></div>
      <OurApps />
      <Footer />
    </>
  );
}

export default OurWork;

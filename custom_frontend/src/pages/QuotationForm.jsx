import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import MainSection from "../components/MainSection/MainSection";
import HomeShowCase from "../components/HomeShowCase/HomeShowCase";
import Featured from "../components/Featured/Featured";
import OnePlaceSection from "../components/OnePlaceSection/OnePlaceSection";
import CollaborateWith from "../components/CollaborateWith/CollaborateWith";
import OurApps from "../components/OurApps/OurApps";
import Sliderr from "../components/Slider/Slider";
import Footer from "../components/Footer/Footer";
import AboutShowCase from "../components/AboutShowCase/AboutShowCase";
import SingleFeaturedCard from "../components/Featured/SingleFeaturedCard";
import LatestProjects from "../components/LatestProjects/LatestProjects";
import QuotationFormComp from "../components/QuotationForm/QuotationForm";

function QuotationForm() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <MainSection>
        <AboutShowCase />
      </MainSection>
      {/* Featured Section */}
      <div style={{ marginTop: "340px" }}></div>
      {/* Latest Projects */}
      {/* <LatestProjects /> */}
      {/* Our Apps */}
      <OurApps />
      {/* Quotation Form */}
      <QuotationFormComp />
      {/* Footer */}
      <Footer />
    </>
  );
}

export default QuotationForm;

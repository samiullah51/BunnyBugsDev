import React from "react";
import Header from "../components/Header";
import AboutPageBanner from "../components/AboutPageBanner";
import ProjectDetails from "../components/ProjectDetails";
import ConnectSection from "../components/ConnectSection";
import SocialSection from "../components/SocialSection";
import WidgetSection from "../components/WidgetSection";
import Footer from "../components/Footer";

function ProjectDetailsPage() {
  return (
    <>
      {/* header */}
      <Header route="projectsDetails" />
      {/* banner */}
      <AboutPageBanner title="Project Details" />
      {/* Project Details */}
      <ProjectDetails />
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

export default ProjectDetailsPage;

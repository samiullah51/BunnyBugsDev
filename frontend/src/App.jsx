import "../src/assets/css/animate.min.css";

import "../src/assets/css/bootstrap.min.css";

import "../src/assets/css/fontawesome-6.3.0.min.css";

import "../src/assets/css/keyframe-animation.css";

import "../src/assets/css/main.css";

import "../src/assets/css/odometer.min.css";

import "../src/assets/css/slider.css";

import "../src/assets/css/spotlight.css";

import "../src/assets/css/swiper.min.css";

import "../src/assets/css/venobox.min.css";

import "../src/assets/js/vendor/bootstrap.min";

import "../src/assets/js/vendor/chart.min";

import "../src/assets/js/vendor/imagesloaded.pkgd.min";

import "../src/assets/js/vendor/jquary-3.6.0.min";

import "../src/assets/js/vendor/jquery.ajaxchimp.min";

import "../src/assets/js/vendor/jquery.isotope";

import "../src/assets/js/vendor/odometer.min";

import "../src/assets/js/vendor/smooth-scroll";

import "../src/assets/js/vendor/spotlight.min";

import "../src/assets/js/vendor/swiper.min";

import "../src/assets/js/vendor/venobox.min";

import "../src/assets/js/vendor/waypoints.min";

import "../src/assets/js/main";

import "../src/assets/js/slider";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import TeamPage from "./pages/TeamPage";
import TeamDetailsPage from "./pages/TeamDetailsPage";
import PricingPage from "./pages/PricingPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/service/details" element={<ServiceDetailsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/team/details" element={<TeamDetailsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/project/details" element={<ProjectDetailsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;

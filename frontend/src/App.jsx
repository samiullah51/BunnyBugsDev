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
// import "../src/assets/js/jquery-3.5.1.min";
// import "../src/assets/js/button-tooltip-custom";
// import "../src/assets/js/main";
// import "../src/assets/js/slider";
// import "../src/assets/js2/jquery-3.5.1.min.js";
// import "../src/assets/js2/bootstrap/bootstrap.bundle.min.js";
// import "../src/assets/js2/icons/feather-icon/feather.min.js";
// import "../src/assets/js2/config.js";
// import "../src/assets/js2/script.js";
// import "../src/assets/js2/button-tooltip-custom";
// // import "../src/assets/js2/chart-widget";
// import "../src/assets/js2/config";
// import "../src/assets/js2/countdown";
// // import "../src/assets/js2/ecommerce";
// // import "../src/assets/js2/email-app";
// import "../src/assets/js2/form-validation-custom";
// import "../src/assets/js2/fullscreen";
// import "../src/assets/js2/general-widget";
// import "../src/assets/js2/height-equal";
// import "../src/assets/js2/hide-on-scroll";
// import "../src/assets/js2/isotope.pkgd";
// import "../src/assets/js2/jquery.ui.min";
// import "../src/assets/js2/jquery-3.5.1.min";
// // import "../src/assets/js2/landing";
// // import "../src/assets/js2/landing_sticky";
// import "../src/assets/js2/masonry-gallery";
// import "../src/assets/js2/modal-animated";
// import "../src/assets/js2/modernizr";
// import "../src/assets/js2/popover-custom";
// import "../src/assets/js2/print";
// // import "../src/assets/js2/product-list-custom";
// // import "../src/assets/js2/product-tab";
// import "../src/assets/js2/script";
// // import "../src/assets/js2/sidebar-menu";
// import "../src/assets/js2/support-ticket-custom";
// import "../src/assets/js2/tooltip-init";

// pages imported
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
import Admin from "./pages/admin/Login";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import AdminHomePage from "./pages/admin/AdminHomePage";
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
        <Route path="/admin" element={<AdminHomePage />} />
      </Routes>
    </>
  );
}

export default App;

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
import "../src/assets/css/color-1.css";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/animate.min.css";
import "../src/assets/css/fontawesome-6.3.0.min.css";
import "../src/assets/css/keyframe-animation.css";
import "../src/assets/css/main.css";
import "../src/assets/css/odometer.min.css";
import "../src/assets/css/responsive.css";
import "../src/assets/css/slider.css";
import "../src/assets/css/spotlight.css";
import "../src/assets/css/style.css";
import "../src/assets/css/swiper.min.css";
import "../src/assets/css/venobox.min.css";
import "../src/assets/css/vendors/animate.css";
import "../src/assets/css/vendors/aos.css";
import "../src/assets/css/vendors/bootstrap.css";
import "../src/assets/css/vendors/button-builder.css";
import "../src/assets/css/vendors/calendar.css";
import "../src/assets/css/vendors/chartist.css";
import "../src/assets/css/vendors/datatable-extension.css";
import "../src/assets/css/vendors/datatables.css";
import "../src/assets/css/vendors/date-picker.css";
import "../src/assets/css/vendors/daterange-picker.css";
import "../src/assets/css/vendors/dropzone.css";
import "../src/assets/css/vendors/feather-icon.css";
import "../src/assets/css/vendors/flag-icon.css";
import "../src/assets/css/vendors/font-awesome.css";
import "../src/assets/css/vendors/icofont.css";
import "../src/assets/css/vendors/image-cropper.css";
import "../src/assets/css/vendors/jkanban.css";
import "../src/assets/css/vendors/jsgrid.css";
import "../src/assets/css/vendors/mapsjs-ui.css";
import "../src/assets/css/vendors/owlcarousel.css";
import "../src/assets/css/vendors/page-builder.css";
import "../src/assets/css/vendors/photoswipe.css";
import "../src/assets/css/vendors/prism.css";
import "../src/assets/css/vendors/range-slider.css";
import "../src/assets/css/vendors/rating.css";
import "../src/assets/css/vendors/scrollable.css";
import "../src/assets/css/vendors/scrollbar.css";
import "../src/assets/css/vendors/select2.css";
import "../src/assets/css/vendors/simple-mde.css";
import "../src/assets/css/vendors/slick.css";
import "../src/assets/css/vendors/slick-theme.css";
import "../src/assets/css/vendors/sticky.css";
import "../src/assets/css/vendors/summernote.css";
import "../src/assets/css/vendors/sweetalert2.css";
import "../src/assets/css/vendors/themify.css";
import "../src/assets/css/vendors/timepicker.css";
import "../src/assets/css/vendors/todo.css";
import "../src/assets/css/vendors/tour.css";
import "../src/assets/css/vendors/tree.css";
import "../src/assets/css/vendors/vector-map.css";
import "../src/assets/css/vendors/whether-icon.css";

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
import "../src/assets/js/jquery-3.5.1.min";
import "../src/assets/js/button-tooltip-custom";
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
import Admin from "./pages/admin/Login";

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
        <Route path="/admin/login" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;

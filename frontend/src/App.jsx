import "./assets/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/fontawesome-6.3.0.min.css";
import "./assets/css/keyframe-animation.css";
import "./assets/css/main.css";
import "./assets/css/odometer.min.css";
import "./assets/css/slider.css";
import "./assets/css/spotlight.css";
import "./assets/css/swiper.min.css";
import "./assets/css/venobox.min.css";
import "./assets/css/main.css";



import "./assets/js/vendor/jquary-3.6.0.min.js";
// import "./assets/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js";
import "./assets/js/vendor/jquery.ajaxchimp.min.js";
import "./assets/js/vendor/bootstrap.min.js";
// import "./assets/js/vendor/popper.min.js";
// import "./assets/js/vendor/chart.min.js";
import "./assets/js/vendor/spotlight.min.js";
import "./assets/js/vendor/jquery.isotope.js";
import "./assets/js/vendor/odometer.min.js";
import "./assets/js/vendor/waypoints.min.js";
import "./assets/js/vendor/imagesloaded.pkgd.min.js";
import "./assets/js/vendor/swiper.min.js";
import "./assets/js/vendor/venobox.min.js";
import "./assets/js/vendor/smooth-scroll.js";
// import "./assets/js/vendor/wow.min.js";
import "./assets/js/slider.js";
import "./assets/js/main";



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
import "./index.css";
import { Routes, Route } from "react-router-dom";
import AdminHomePage from "./pages/admin/AdminHomePage";
import ServicesPage from "./pages/admin/ServicesPage";
import AdminProjectsPage from "./pages/admin/AdminProjectsPage";
import Team from "./components/admin/team/Team";
import AdminTeamPage from "./pages/admin/AdminTeamPage";
import AdminApplicationsPage from "./pages/admin/AdminApplicationsPage";
import AdminJobPage from "./pages/admin/AdminJobPage";
import JobApplicationPage from "./pages/admin/JobApplicationPage";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
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
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/index" element={<AdminHomePage />} />
        <Route path="/admin/services" element={<ServicesPage />} />
        <Route path="/admin/projects" element={<AdminProjectsPage />} />
        <Route path="/admin/team" element={<AdminTeamPage />} />
        <Route path="/admin/careers" element={<AdminJobPage />} />
        <Route path="/admin/applications" element={<AdminApplicationsPage />} />
        <Route path="/admin/jobs" element={<JobApplicationPage />} />
        <Route path="/admin/aboutpagemanager" element={<AdminProjectsPage />} />
        <Route
          path="/admin/contactpagemanager"
          element={<AdminProjectsPage />}
        />
        <Route path="/admin/setting" element={<AdminProjectsPage />} />
      </Routes>
    </>
  );
}

export default App;

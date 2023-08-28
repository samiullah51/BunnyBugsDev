import React from "react";
import "./AdminBanner.css";
import welcomeSvg from "../../assets/welcome2.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ServiceCards from "../../components/admin/ServiceCards/ServiceCards";
function AdminBanner() {
  return (
    <div className="admin__banner">
      <div className="banner__left">
        <div>
          <h3>Hello, Sami Samiullah</h3>
          <p>Welcome back, your dashboard is ready!</p>
          <button style={{ color: "#fff" }}>
            Get Started <ArrowForwardIcon />{" "}
          </button>
        </div>
        <img src={welcomeSvg} alt="" />
      </div>
      <div className="banner__right">
        <ServiceCards />
      </div>
    </div>
  );
}

export default AdminBanner;

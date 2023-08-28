import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__col_first">
        <img src={logo} alt="" />
        <p>
          Professionally scale cross functional human capital and extensive
          technology.
        </p>
        <div className="footer__social">
          <LinkedInIcon />
          <GitHubIcon />
          <FacebookIcon />
          <InstagramIcon />
        </div>
        <p>Copyright©chakri.All right reserved</p>
      </div>
      <div className="footer__col">
        <p className="col__title">Services</p>
        <a href="">Documentation</a>
        <a href="">Design</a>
        <a href="">Themes</a>
        <a href="">Illustrations</a>
      </div>
      <div className="footer__col">
        <p className="col__title">Community</p>
        <a href="">About</a>
        <a href="">Terms</a>
        <a href="">Privacy Policy</a>
        <a href="">Careers</a>
      </div>
      <div className="footer__col">
        <p className="col__title">Job Info</p>
        <a href="">Select</a>
        <a href="">Services</a>
        <a href="">Payment</a>
      </div>
      <div className="footer__col footer__contact">
        <span className="col__title">Contact</span>
        <p>
          <span>Call : </span> 971 5546 963
        </p>
        <p>
          <span>Email : </span> example@gmail.com
        </p>
        <p>
          <span>Address : </span> Dhaka, Bangladesh
        </p>
      </div>
    </div>
  );
}

export default Footer;

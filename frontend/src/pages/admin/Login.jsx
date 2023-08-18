import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
function Login() {
  return (
    <>
      {/* <!-- login page start--> */}
      <section> </section>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <form className="theme-form login-form">
                <h4>Login</h4>
                <h6>Welcome back! Log in to your account.</h6>
                <div className="form-group">
                  <label>Email Address</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <MailOutlineIcon />
                    </span>
                    <input
                      className="form-control"
                      type="email"
                      required=""
                      placeholder="Test@gmail.com"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <HttpsOutlinedIcon />
                    </span>
                    <input
                      className="form-control"
                      type="password"
                      name="login[password]"
                      required=""
                      placeholder="*********"
                    />
                    <div className="show-hide">
                      <span className="show"> </span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="checkbox">
                    <input id="checkbox1" type="checkbox" />
                    <label for="checkbox1">Remember password</label>
                  </div>
                  <a className="link" href="forget-password.html">
                    Forgot password?
                  </a>
                </div>
                <div className="form-group">
                  <button className="btn btn-primary btn-block" type="submit">
                    Sign in
                  </button>
                </div>
                <div className="login-social-title">
                  <h5>Sign in with</h5>
                </div>
                <div className="form-group">
                  <ul className="login-social">
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <LinkedInIcon />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <TwitterIcon />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <FacebookIcon />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <InstagramIcon />
                      </a>
                    </li>
                  </ul>
                </div>
                <p>
                  Don't have account?
                  <a className="ms-2" href="sign-up.html">
                    Create Account
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

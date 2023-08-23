import React from "react";
import "./AdminLoginPage.css";
import { useNavigate } from "react-router";
function AdminLoginPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/admin/index");
  };
  return (
    <div className="signin">
      <div className="signin__form">
        <>
          <h2 className="logo">BunnyBugsDev</h2>
          <p className="desc">Please sign-in to your account</p>
          {/* inputs */}
          <div className="inputs">
            <div className="inputs__box">
              <p>Email</p>
              <input type="text" />
            </div>
            <div className="inputs__box">
              <p style={{ display: "flex" }}>
                <span>Password</span>
                <span
                  style={{
                    marginLeft: "auto",
                    fontSize: "13px",
                    color: "dodgerblue",
                    cursor: "pointer",
                  }}
                >
                  Forgot Password?
                </span>{" "}
              </p>
              <input type="password" />
            </div>
          </div>

          {/* Form Footer */}
          <div className="form__footer">
            <button style={{ width: "74%" }} onClick={handleClick}>
              Sign in
            </button>
          </div>
        </>
      </div>
    </div>
  );
}

export default AdminLoginPage;

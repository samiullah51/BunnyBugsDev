import React from "react";
import "./Applications.css";
import SignleApplication from "./SignleApplication";

function Applications() {
  return (
    <div className="applications">
      <h2>Recent Applications</h2>
      {/* all applications */}
      <SignleApplication />
      <SignleApplication />
      <SignleApplication />
      <SignleApplication />
      <SignleApplication />
      <SignleApplication />
      <SignleApplication />
    </div>
  );
}

export default Applications;

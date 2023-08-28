import React from "react";
import "./CollaborateWith.css";
import image from "../../assets/images/collaborate.png";
import CollabAnimation1 from "./CollabAnimation1";
import CollabAnimation2 from "./CollabAnimation2";
import CollaborateLeftSection from "./CollaborateLeftSection";
function CollaborateWith() {
  return (
    <div className="collaborate__with">
      <CollaborateLeftSection title="Collaborate with your team anytime, anywhere." />
      <div className="collaborate__right">
        <img src={image} alt="" />
        <CollabAnimation1 />
        <CollabAnimation2 />
      </div>
    </div>
  );
}

export default CollaborateWith;

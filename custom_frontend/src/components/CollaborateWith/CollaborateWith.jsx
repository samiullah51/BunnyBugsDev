import React from "react";
import "./CollaborateWith.css";
import CheckIcon from "@mui/icons-material/Check";
import image from "../../assets/images/collaborate.png";
import CollabAnimation1 from "./CollabAnimation1";
import CollabAnimation2 from "./CollabAnimation2";
function CollaborateWith() {
  return (
    <div className="collaborate__with">
      <div className="collaborate__left">
        <h2>Collaborate with your team anytime, anywhere.</h2>
        <p>
          Continually administrate process-centric human capital rather than
          bleeding-edge methodologies. Distinctively supply accurate methods of
          empowerment before.
        </p>
        {/* checks */}
        <div className="checks">
          <div className="check">
            <CheckIcon />
            <span>Organize your data</span>
          </div>
          <div className="check">
            <CheckIcon />
            <span>Always in sync</span>
          </div>
          <div className="check">
            <CheckIcon />
            <span> Work with any team</span>
          </div>
          <div className="check">
            <CheckIcon />
            <span> Embedded analytics</span>
          </div>
        </div>
        {/* Started button  */}
        <button>Get Started Today</button>
      </div>
      <div className="collaborate__right">
        <img src={image} alt="" />
        <CollabAnimation1 />
        <CollabAnimation2 />
      </div>
    </div>
  );
}

export default CollaborateWith;

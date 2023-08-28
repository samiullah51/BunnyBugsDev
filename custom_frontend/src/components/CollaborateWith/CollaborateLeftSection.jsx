import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import "./CollaborateWith.css";
function CollaborateLeftSection({ title }) {
  return (
    <div className="collaborate__left">
      <h2>{title}</h2>
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
  );
}

export default CollaborateLeftSection;

import React from "react";
import SingleLink from "./SingleLink";

function PlaceLinks() {
  return (
    <div className="place__links">
      <SingleLink title="Real-time data" />
      <SingleLink title="End-to-end encryption" />
      <SingleLink title="FDIC Insured" />
      <SingleLink title="REST API enabled" />
    </div>
  );
}

export default PlaceLinks;

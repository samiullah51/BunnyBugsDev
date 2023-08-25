import React from "react";
import "./Featured.css";
import fav2 from "../../assets/images/fav2.png";
import SingleFeaturedCard from "./SingleFeaturedCard";
import icon from "../../assets/icon/featured-icon-1.png";
import icon2 from "../../assets/icon/featured-icon-2.png";
import icon3 from "../../assets/icon/featured-icon-3.png";
import icon4 from "../../assets/icon/featured-icon-4.png";
import icon5 from "../../assets/icon/featured-icon-5.png";

function Featured() {
  return (
    <div className="featured">
      <h2>Featured We Provide for You</h2>
      <img src={fav2} alt="" className="rotating__icon" />
      {/* featured cards */}
      <div className="featured__cards">
        <SingleFeaturedCard
          icon={icon}
          title="Dashboard"
          desc="Assertively parallel task synergistic deliverables after high-quality"
        />
        <SingleFeaturedCard
          icon={icon2}
          title="Statistics"
          desc="Assertively parallel task synergistic deliverables after high-quality"
        />
        <SingleFeaturedCard
          icon={icon3}
          title="Easy Access"
          desc="Assertively parallel task synergistic deliverables after high-quality"
        />
        <SingleFeaturedCard
          icon={icon4}
          title="Collaboration"
          desc="Assertively parallel task synergistic deliverables after high-quality"
        />
        <SingleFeaturedCard
          icon={icon5}
          title="Total Control"
          desc="Assertively parallel task synergistic deliverables after high-quality"
        />
      </div>
    </div>
  );
}

export default Featured;

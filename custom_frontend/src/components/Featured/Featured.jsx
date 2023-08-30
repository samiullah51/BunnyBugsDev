import React from "react";
import "./Featured.css";
import fav2 from "../../assets/images/fav2.png";
import SingleFeaturedCard from "./SingleFeaturedCard";
import LaptopIcon from '@mui/icons-material/Laptop';
import icon from "../../assets/icon/featured-icon-1.png";
import icon2 from "../../assets/icon/featured-icon-2.png";
import icon3 from "../../assets/icon/featured-icon-3.png";
import icon4 from "../../assets/icon/featured-icon-4.png";
import icon5 from "../../assets/icon/featured-icon-5.png";

function Featured() {
  return (
    <div className="featured">
      <h2>Services We Provide for You</h2>
      <img src={fav2} alt="" className="rotating__icon" />
      {/* featured cards */}
      <div className="featured__cards">
        <SingleFeaturedCard
          icon={<LaptopIcon />}
          title="Web Development"
          desc="Assertively parallel task synergistic deliverables after high-quality"
        />
        <SingleFeaturedCard
          icon={<LaptopIcon />}
          title="Statistics"
          desc="Assertively parallel task synergistic deliverables after high-quality"
        />
        <SingleFeaturedCard
          icon={<LaptopIcon />}
          title="Easy Access"
          desc="Assertively parallel task synergistic deliverables after high-quality"
        />
        <SingleFeaturedCard
          icon={<LaptopIcon />}
          title="Collaboration"
          desc="Assertively parallel task synergistic deliverables after high-quality"
        />
        <SingleFeaturedCard
          icon={<LaptopIcon />}
          title="Total Control"
          desc="Assertively parallel task synergistic deliverables after high-quality"
        />
      </div>
    </div>
  );
}

export default Featured;

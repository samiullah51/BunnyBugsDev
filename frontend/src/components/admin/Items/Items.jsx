import React from "react";
import "./Items.css";
import SingleItem from "./SingleItem";
import GridViewIcon from "@mui/icons-material/GridView";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
function Items() {
  return (
    <div className="sidebar__items">
      <SingleItem title="Dashboard" status={true} icon={<GridViewIcon />} />
      <SingleItem title="Services" icon={<SettingsAccessibilityIcon />} />
      <SingleItem title="Portfolio" icon={<FeaturedPlayListOutlinedIcon />} />
      <SingleItem title="Our Team" icon={<GroupsOutlinedIcon />} />
      <SingleItem title="Carriers" icon={<GroupAddOutlinedIcon />} />
      <SingleItem
        title="Contact Applications"
        icon={<IndeterminateCheckBoxOutlinedIcon />}
      />
      <SingleItem title="Jobs Applications" icon={<PsychologyOutlinedIcon />} />
      <SingleItem
        title="About Page Manager"
        icon={<IndeterminateCheckBoxOutlinedIcon />}
      />
      <SingleItem
        title="Contact Page Manager"
        icon={<IndeterminateCheckBoxOutlinedIcon />}
      />
      <SingleItem
        title="General Site Setting"
        icon={<SettingsOutlinedIcon />}
      />
    </div>
  );
}

export default Items;

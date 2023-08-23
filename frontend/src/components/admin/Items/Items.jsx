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
      <SingleItem to="/admin/index" title="Dashboard" icon={<GridViewIcon />} />
      <SingleItem
        to="/admin/services"
        title="Services"
        icon={<SettingsAccessibilityIcon />}
      />
      <SingleItem
        to="/admin/projects"
        title="Portfolio"
        icon={<FeaturedPlayListOutlinedIcon />}
      />
      <SingleItem
        to="/admin/team"
        title="Our Team"
        icon={<GroupsOutlinedIcon />}
      />
      <SingleItem
        to="/admin/careers"
        title="Careers"
        icon={<GroupAddOutlinedIcon />}
      />
      <SingleItem
        to="/admin/applications"
        title="Contact Applications"
        icon={<IndeterminateCheckBoxOutlinedIcon />}
      />
      <SingleItem
        to="/admin/jobs"
        title="Jobs Applications"
        icon={<PsychologyOutlinedIcon />}
      />
      <SingleItem
        to="/admin/aboutpagemanager"
        title="About Page Manager"
        icon={<IndeterminateCheckBoxOutlinedIcon />}
      />
      <SingleItem
        to="/admin/contactpagemanager"
        title="Contact Page Manager"
        icon={<IndeterminateCheckBoxOutlinedIcon />}
      />
      <SingleItem
        to="/admin/setting"
        title="General Site Setting"
        icon={<SettingsOutlinedIcon />}
      />
    </div>
  );
}

export default Items;

import React, { useState } from "react";
import "./LatestProjects.css";
import SingleTabContent from "./SingleTabContent";
function LatestProjects() {
  const [activeTab, setActiveTab] = useState(1);
  const [projects, setProjects] = useState([
    "all",
    "all",
    "ui/ux",
    "ui/ux",
    "dev",
    "dev",
  ]);
  const all = ["all", "all", "ui/ux", "ui/ux", "dev", "dev"];
  const uiux = ["ui/ux", "ui/ux", "ui/ux", "ui/ux", "ui/ux", "ui/ux"];
  const dev = ["dev", "dev"];
  const tabs = [
    { label: "All", id: 1 },
    { label: "UI/UX", id: 2 },
    { label: "Development", id: 3 },
    { label: "Graphic Design", id: 4 },
    { label: "Motion", id: 5 },
    { label: "Brandings", id: 6 },
  ];
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 1) {
      setProjects(all);
    } else if (tabId === 2) {
      setProjects(uiux);
    } else {
      setProjects(dev);
    }
  };
  return (
    <div className="latest__project">
      <h2>Our Latest Work</h2>
      <p>
        We Create custom landing pages with Saasland and converts more visitors
        than any website. visually appearing.
      </p>
      <div className="custom__tabs">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${activeTab === tab.id ? "active" : "tab"}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      {/* contents */}
      <div className="tab__contents">
        <SingleTabContent />
        <SingleTabContent />
        <SingleTabContent />
        <SingleTabContent />
        <SingleTabContent />
      </div>
    </div>
  );
}

export default LatestProjects;

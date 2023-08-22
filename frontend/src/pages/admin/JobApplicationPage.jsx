import React from "react";
import Sidebar from "../../components/admin/Sidebar/Sidebar";
import AdminHeader from "../../components/admin/Header/AdminHeader";
import JobApplications from "../../components/admin/JobApplications/JobApplications";

function JobApplicationPage() {
  return (
    <div className="admin__home__page">
      {/* Sidebar */}
      <Sidebar />

      <div className="admin__contents">
        <AdminHeader />
        {/* Services */}
        <JobApplications />
      </div>
    </div>
  );
}

export default JobApplicationPage;

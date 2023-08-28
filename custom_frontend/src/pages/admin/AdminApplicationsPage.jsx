import React from "react";
import Sidebar from "../../components/admin/Sidebar/Sidebar";
import AdminHeader from "../../components/admin/Header/AdminHeader";
import Team from "../../components/admin/team/Team";
import Applications from "../../components/admin/Applications/Applications";

function AdminApplicationsPage() {
  return (
    <div className="admin__home__page">
      {/* Sidebar */}
      <Sidebar />

      <div className="admin__contents">
        <AdminHeader />
        {/* Services */}
        <Applications />
      </div>
    </div>
  );
}

export default AdminApplicationsPage;

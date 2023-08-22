import React from "react";
import Sidebar from "../../components/admin/Sidebar/Sidebar";
import AdminHeader from "../../components/admin/Header/AdminHeader";
import Jobs from "../../components/admin/jobs/Jobs";

function AdminJobPage() {
  return (
    <div className="admin__home__page">
      {/* Sidebar */}
      <Sidebar />

      <div className="admin__contents">
        <AdminHeader />
        {/* Services */}
        <Jobs />
      </div>
    </div>
  );
}

export default AdminJobPage;

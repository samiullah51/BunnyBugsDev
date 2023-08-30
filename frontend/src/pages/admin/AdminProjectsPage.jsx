import React from "react";
import Services from "../../components/admin/Services/Services";
import Sidebar from "../../components/admin/Sidebar/Sidebar";
import AdminHeader from "../../components/admin/Header/AdminHeader";
import Projects from "../../components/admin/Projects/Projects";

function AdminProjectsPage() {
  return (
    <div className="admin__home__page">
      {/* Sidebar */}
      <Sidebar />

      <div className="admin__contents">
        <AdminHeader />
        {/* Projects */}
        <Projects />
      </div>
    </div>
  );
}

export default AdminProjectsPage;

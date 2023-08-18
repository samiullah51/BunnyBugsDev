import React from "react";
import "./AdminHomePage.css";
import Sidebar from "../../components/admin/Sidebar/Sidebar";
import AdminHeader from "../../components/admin/Header/AdminHeader";
function AdminHomePage() {
  return (
    <div className="admin__home__page">
      {/* Sidebar */}
      <Sidebar />
      <div className="admin__contents">
        <AdminHeader />
      </div>
    </div>
  );
}

export default AdminHomePage;

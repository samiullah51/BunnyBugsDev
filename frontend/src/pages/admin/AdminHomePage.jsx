import React from "react";
import "./AdminHomePage.css";
import Sidebar from "../../components/admin/Sidebar/Sidebar";
import AdminHeader from "../../components/admin/Header/AdminHeader";
import { useSelector } from "react-redux";
function AdminHomePage() {
  const sidebar = useSelector((state) => state.sidebar);

  return (
    <div className="admin__home__page">
      {/* Sidebar */}
      <Sidebar />

      <div className="admin__contents">
        <AdminHeader />
        <h2>dsdd</h2>
      </div>
    </div>
  );
}

export default AdminHomePage;

import React from "react";
import "./AdminHomePage.css";
import Sidebar from "../../components/admin/Sidebar/Sidebar";
import AdminHeader from "../../components/admin/Header/AdminHeader";
import { useSelector } from "react-redux";
import AdminBanner from "./AdminBanner";
import Applications from "../../components/admin/Applications/Applications";
function AdminHomePage() {
  const sidebar = useSelector((state) => state.sidebar);

  return (
    <div className="admin__home__page">
      {/* Sidebar */}
      <Sidebar />

      <div className="admin__contents">
        <AdminHeader />
        {/* admin banner */}
        <AdminBanner />
        {/*Applications  */}
        <Applications />
      </div>
    </div>
  );
}

export default AdminHomePage;

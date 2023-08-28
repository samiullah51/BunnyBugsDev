import React from "react";
import Services from "../../components/admin/Services/Services";
import Sidebar from "../../components/admin/Sidebar/Sidebar";
import AdminHeader from "../../components/admin/Header/AdminHeader";

function ServicesPage() {
  return (
    <div className="admin__home__page">
      {/* Sidebar */}
      <Sidebar />

      <div className="admin__contents">
        <AdminHeader />
        {/* Services */}
        <Services />
      </div>
    </div>
  );
}

export default ServicesPage;

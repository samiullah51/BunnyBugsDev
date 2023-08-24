import React, { useEffect, useState } from "react";
import "./Services.css";
import SingleService from "./SingleService";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import UploadImg from "../../../assets/projects.png";
import AddService from "./AddService";
import loader from "../../../assets/loader.gif";
import axios from "axios";
function Services() {
  const [modal, setModal] = useState(false);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getServices = async () => {
      setLoading(true);
      const gotServices = await axios.get(
        "http://localhost:8000/api/v1/services/all"
      );
      setServices(gotServices.data.data);
      setLoading(false);
    };
    getServices();
  }, []);
  return loading ? (
    <div style={{ width: "100%", textAlign: "center" }}>
      <img src={loader} width={400} alt="" />
    </div>
  ) : (
    <div className="services">
      <div className="services__header">
        <p>Services</p>
        <div className="add__new" onClick={() => setModal(!modal)}>
          Add New
        </div>
      </div>

      {services.map((service) => {
        return <SingleService service={service} />;
      })}

      {/* Add Modal */}

      <div
        className="servce__modal"
        style={{ transform: modal ? "translateY(0%)" : "translateY(-140%)" }}
      >
        <AddService setModal={setModal} />
        <div className="modal__close" onClick={() => setModal(false)}>
          X
        </div>
      </div>
    </div>
  );
}

export default Services;

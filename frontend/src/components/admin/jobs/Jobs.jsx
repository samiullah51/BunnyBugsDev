import React, { useEffect, useState } from "react";
import "./Jobs.css";
import SingleJob from "./SingleJob";
import AddJob from "./Addjob";
import loader from "../../../assets/loader.gif";
import axios from "axios";
function Jobs() {
  const [modal, setModal] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getJobs = async () => {
      setLoading(true);
      const gotJobs = await axios.get("http://localhost:8000/api/v1/job/all");
      setJobs(gotJobs.data.data);
      setLoading(false);
    };
    getJobs();
  }, []);
  return loading ? (
    <div style={{ width: "100%", textAlign: "center" }}>
      <img src={loader} width={400} alt="" />
    </div>
  ) : (
    <div className="services">
      <div className="services__header">
        <p>All Jobs</p>
        <div className="add__new" onClick={() => setModal(!modal)}>
          Add New
        </div>
      </div>
      {jobs.map((job) => (
        <SingleJob key={job._id} job={job} />
      ))}

      <div
        className="servce__modal"
        style={{ transform: modal ? "translateY(0%)" : "translateY(-140%)" }}
      >
        <AddJob setModal={setModal} />
        <div className="modal__close" onClick={() => setModal(false)}>
          X
        </div>
      </div>
    </div>
  );
}

export default Jobs;

import React, { useEffect, useState } from "react";
import "./Team.css";
import SingleMember from "./SingleMember";
import AddMember from "./AddMember";
import axios from "axios";
import loader from "../../../assets/loader.gif";

function Team() {
  const [modal, setModal] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getTeamMembers = async () => {
      setLoading(true);
      const gotTeamMembers = await axios.get(
        "http://localhost:8000/api/v1/team/all"
      );
      setTeamMembers(gotTeamMembers.data.data);
      setLoading(false);
    };
    getTeamMembers();
  }, []);
  return loading ? (
    <div style={{ width: "100%", textAlign: "center" }}>
      <img src={loader} width={400} alt="" />
    </div>
  ) : (
    <div className="services">
      <div className="services__header">
        <p>Our Team</p>
        <div className="add__new" onClick={() => setModal(!modal)}>
          Add New
        </div>
      </div>

      {teamMembers.map((member) => (
        <SingleMember member={member} />
      ))}

      <div
        className="servce__modal"
        style={{ transform: modal ? "translateY(0%)" : "translateY(-140%)" }}
      >
        <AddMember setModal={setModal} />
        <div className="modal__close" onClick={() => setModal(false)}>
          X
        </div>
      </div>
    </div>
  );
}

export default Team;

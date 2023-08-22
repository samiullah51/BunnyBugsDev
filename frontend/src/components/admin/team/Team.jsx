import React, { useState } from "react";
import "./Team.css";
import SingleMember from "./SingleMember";
import AddMember from "./AddMember";
function Team() {
  const [modal, setModal] = useState(false);

  return (
    <div className="services">
      <div className="services__header">
        <p>Our Team</p>
        <div className="add__new" onClick={() => setModal(!modal)}>
          Add New
        </div>
      </div>
      <SingleMember />
      <SingleMember />
      <SingleMember />
      <SingleMember />
      <SingleMember />

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

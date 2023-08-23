import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { TagsInput } from "react-tag-input-component";
function AddJob({ setModal }) {
  const [showOptions, setShowOptions] = useState(false);
  const [option, setOption] = useState("Publish");
  const [image, setImage] = useState(null);
  const [showImg, setShowImg] = useState(null);
  const [selected, setSelected] = useState([]);
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setShowImg(URL.createObjectURL(e.target.files[0]));
    }
  };
  const handleCancel = () => {
    setModal(false);
  };
  return (
    <div className="modal__form" style={{ height: "90vh", overflow: "scroll" }}>
      <p className="title">Add New Job</p>

      <div className="modal__inputs">
        <div className="input__row">
          <label htmlFor="">Job Title</label>
          <input type="text" autoFocus={true} />
        </div>

        {/* Description */}
        <div className="input__row">
          <label htmlFor="">Status</label>
          <div
            className="status__dropdown"
            onClick={() => setShowOptions(!showOptions)}
          >
            {option}
            {!showOptions ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            {showOptions && (
              <div className="dropdown__options">
                <p onClick={() => setOption("Publish")}>Publish</p>
                <p onClick={() => setOption("Draft")}>Draft</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="input__row">
        <label htmlFor="">Job Description</label>
        <textarea></textarea>
      </div>
      <div className="input__row">
        <label htmlFor="">
          Ideal Candidate{" "}
          <span style={{ fontSize: "12px", color: "#ccc" }}>
            {" "}
            (Write some description about the ideal candidate)
          </span>{" "}
        </label>
        <textarea></textarea>
      </div>

      <label
        htmlFor=""
        style={{
          color: "#fff",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        Required Skills
      </label>
      <TagsInput
        value={selected}
        onChange={setSelected}
        name="skills"
        placeHolder="Type Skill and Press Enter"
      />
      <div className="input__row">
        <label htmlFor="">
          Other Requirements
          <span style={{ fontSize: "12px", color: "#ccc" }}>
            {" "}
            (Write some requirements for this job)
          </span>{" "}
        </label>
        <textarea></textarea>
      </div>
      {/* add project link */}
      <div className="input__row">
        <label htmlFor="">Experience Required</label>
        <input type="text" autoFocus={true} />
      </div>
      {/*  */}
      <div className="input__row">
        <label htmlFor="">What are we offering</label>
        <textarea></textarea>
      </div>
      {/*  */}
      <div className="modal__inputs">
        <div className="input__row">
          <label htmlFor="">Salary</label>
          <input type="text" autoFocus={true} />
        </div>

        <div className="input__row">
          <label htmlFor="">City</label>
          <input type="text" autoFocus={true} />
        </div>
      </div>
      <div className="input__row">
        <label htmlFor="">Address</label>
        <input type="text" autoFocus={true} />
      </div>
      {/*  */}
      <div className="input__row">
        <div className="btns">
          <button className="cancel__btn" onClick={handleCancel}>
            Cancel
          </button>
          <button className="add__btn">Add Job</button>
        </div>
      </div>
    </div>
  );
}

export default AddJob;

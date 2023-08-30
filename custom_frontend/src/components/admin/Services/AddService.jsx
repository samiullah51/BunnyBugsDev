import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
function AddService({ setModal }) {
  const [showOptions, setShowOptions] = useState(false);
  const [option, setOption] = useState("Publish");
  const [image, setImage] = useState(null);
  const [showImg, setShowImg] = useState(null);
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
    <div className="modal__form">
      <p className="title">Add New Service</p>

      <div className="modal__inputs">
        <div className="input__row">
          <label htmlFor="">Service Name</label>
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
        <label htmlFor="">Service Description</label>
        <textarea style={{ resize: "none", height: "140px" }}> </textarea>
      </div>
      <div className="input__row">
        <label className="upload__file" htmlFor="file">
          <input
            type="file"
            id="file"
            onChange={handleChange}
            style={{ display: "none" }}
          />
          {!showImg ? <FileUploadOutlinedIcon /> : <img src={showImg} alt="" />}
        </label>
      </div>
      {/*  */}
      <div className="input__row">
        <div className="btns">
          <button className="cancel__btn" onClick={handleCancel}>
            Cancel
          </button>
          <button className="add__btn">Add Service</button>
        </div>
      </div>
    </div>
  );
}

export default AddService;

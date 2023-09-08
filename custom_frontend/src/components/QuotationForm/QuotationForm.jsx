import React, { useState } from "react";
import "./QuotationFormComp.css";
import icon from "./blob.svg";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import TabletIcon from "@mui/icons-material/Tablet";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
function QuotationFormComp() {
  const [price, setPrice] = useState(0);
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(false);
  const [types, setTypes] = useState([
    { id: 1, type: "Web App" },
    { id: 2, type: "Mobile App" },
    { id: 3, type: "Desktop App" },
  ]);
  const webData = [
    {
      id: 1,
      qst: "What do you want",
      options: {
        a: { cat: "Landing Page", price: 100 },
        b: { cat: "Business Website", price: 200 },
        c: { cat: "Wordpress", price: 300 },
      },
    },
    {
      id: 2,
      qst: "Do you need a special functionality?",
      options: {
        a: { cat: "Yes", price: 100 },
        b: { cat: "No", price: 200 },
        c: { cat: "Do not Know", price: 0 },
      },
    },
    {
      id: 3,
      qst: "How will you make money from your website?",
      options: {
        a: { cat: "Adds", price: 120 },
        b: { cat: "Blogging", price: 240 },
        c: { cat: "No Money", price: 0 },
      },
    },
    {
      id: 4,
      qst: "Do you need website strategy to get more revenue and profit?",
      options: {
        a: { cat: "Addss", price: 120 },
        b: { cat: "Blogging", price: 240 },
        c: { cat: "No Money", price: 0 },
        d: { cat: "do not know", price: 0 },
      },
    },
  ];
  const appData = [
    {
      id: 1,
      qst: "Which App",
      options: {
        a: { cat: "Ecommerce App", price: 100 },
        b: { cat: "Android App", price: 200 },
        c: { cat: "IOS App", price: 300 },
      },
    },
    {
      id: 2,
      qst: "Do you need a special functionality?",
      options: {
        a: { cat: "Yes", price: 100 },
        b: { cat: "No", price: 200 },
        c: { cat: "Do not Know", price: 0 },
      },
    },
    {
      id: 3,
      qst: "How will you make money from your website?",
      options: {
        a: { cat: "Adds", price: 120 },
        b: { cat: "Blogging", price: 240 },
        c: { cat: "No Money", price: 0 },
      },
    },
    {
      id: 4,
      qst: "Do you need website strategy to get more revenue and profit?",
      options: {
        a: { cat: "Addss", price: 120 },
        b: { cat: "Blogging", price: 240 },
        c: { cat: "No Money", price: 0 },
        d: { cat: "do not know", price: 0 },
      },
    },
  ];
  const [index, setIndex] = useState(0);
  const handleClick = (type) => {
    setSelected(true);
    // https://localhost:8000/api/v1/bunnybugsdev/apps?type=Web%App
    // if (type === "Web App") {
    //   setData(webData);
    // } else {
    //   setData(appData);
    // }
  };
  const handleIndex = () => {
    setIndex(index + 1);
  };
  return (
    <div className="quotation">
      <span className="price">US${price}</span>
      <p className="ready">READY TO GET STARTED?</p>
      {data.length === 0 ? (
        <h2>Select Your Choice</h2>
      ) : (
        <h2>{data[index].qst}</h2>
      )}
      {!selected && (
        <div className="options">
          {types.map((single) => (
            <div className="simple" onClick={() => handleClick(single.type)}>
              <MobileFriendlyIcon />
              <p>{single.type}</p>
            </div>
          ))}
        </div>
      )}
      {data.length > 0 && (
        <div className="options">
          <div className="simple" onClick={handleIndex}>
            {data[index].options.a.cat}
          </div>
          <div className="simple" onClick={handleIndex}>
            {data[index].options.b.cat}
          </div>
          <div className="simple" onClick={handleIndex}>
            {data[index].options.c.cat}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuotationFormComp;

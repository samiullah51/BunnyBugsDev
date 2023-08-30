import React, { useState } from "react";
import "./QuotationFormComp.css";
import icon from "./blob.svg";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import TabletIcon from "@mui/icons-material/Tablet";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
function QuotationFormComp() {
  const [price, setPrice] = useState(0);
  const [data, setData] = useState([
    {
      id: 1,
      qst: "What do you want",
      options: {
        a: { cat: "Mobile App", price: 100 },
        b: { cat: "Web App", price: 200 },
        c: { cat: "Desktop App", price: 300 },
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
  ]);
  const [index, setIndex] = useState(0);
  const handleClick = (p) => {
    setPrice(price + p);
    setIndex(index + 1);
  };

  return index !== data.length ? (
    <div className="quotation">
      <span className="price">US${price}</span>
      <p className="ready">READY TO GET STARTED?</p>
      <h2>{data[index].qst}</h2>
      <div className="options">
        <p
          onClick={() => handleClick(data[index].options.a.price)}
          className="simple"
        >
          <CheckCircleIcon />
          <span> {data[index].options.a.cat}</span>
        </p>
        <p
          onClick={() => handleClick(data[index].options.b.price)}
          className="simple"
        >
          <MobileFriendlyIcon />
          <span> {data[index].options.b.cat}</span>
        </p>
        <p
          onClick={() => handleClick(data[index].options.c.price)}
          className="simple"
        >
          <TabletIcon />
          <span> {data[index].options.c.cat}</span>
        </p>
      </div>
    </div>
  ) : (
    <div className="quotation">
      <p className="ready">YOUR WEBSITE ESTIMATE</p>
      <h1>US${price}</h1>
      <p className="get__in__touch">
        Enter your email address below and we’ll be in touch:
      </p>
      <input type="text" placeholder="Email address " />
      <a href="">LET'S GO!</a>
    </div>
  );
}

export default QuotationFormComp;

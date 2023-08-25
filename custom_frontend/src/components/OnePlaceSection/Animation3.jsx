import React from "react";
import incomeCard from "../../assets/icon/income-cart-graf.png";
import image1 from "../../assets/about/client-img-1.png";
import image2 from "../../assets/about/client-img-2.png";
import image3 from "../../assets/about/client-img-3.png";
import image4 from "../../assets/about/client-img-4.png";

function Animation3() {
  return (
    <div className="animation3">
      <div className="images">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        <img src={image3} alt="" />
        <img src={image1} alt="" />
      </div>
      <h3>Saturday, 8pm</h3>
      <p>Time to active in meeting</p>
      <div className="animation__btns">
        <button className="post__btn">Schedule Post</button>
        <button className="see__btn">See Insight</button>
      </div>
    </div>
  );
}

export default Animation3;

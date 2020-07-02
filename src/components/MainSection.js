import React from "react";
import "./style/mainsection.css";
import mainpicturebonbon from "/Users/jiaxi/Desktop/Perscholas/hw/ecommerce/ecommerce/src/components/assets/mainpicbonbon.jpg";
import ReactPlayer from "react-player";

function MainSection() {
  return (
    <div id="main-container" className="container">
      {/* <img src={mainpicturebonbon} className="clsFirstImg" alt="bonbon"></img> */}
      <div className="clsSecondImg">
        <div className="content">
          <iframe
            frameborder="0"
            allowfullscreen=""
            src="http://www.youtube.com/embed/_OBlgSz8sSM"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default MainSection;

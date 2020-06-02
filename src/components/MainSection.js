import React from "react";
import "./style/mainsection.css";
import mainpicturebonbon from "/Users/jiaxi/Desktop/Perscholas/hw/ecommerce/ecommerce/src/components/assets/mainpicbonbon.jpg";
import ReactPlayer from "react-player";

function MainSection() {
  return (
    <div className="main-section .container">
      <img
        src={mainpicturebonbon}
        width="100%"
        class="img-fluid clsFirstImg"
        alt="bonbon"
      ></img>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=U7cUzRpoDRE"
        className="clsSecondImg"
        width="800px"
        height="500px"
      />
    </div>
  );
}

export default MainSection;

import React from "react";
import "./style/mainsection.css";
import mainpicturebonbon from "/Users/jiaxi/Desktop/Perscholas/hw/ecommerce/ecommerce/src/components/assets/mainpicbonbon.jpg";
import ReactPlayer from "react-player";

function MainSection() {
  return (
    <div id="main-container" className="container">
      {/* <img src={mainpicturebonbon} className="clsFirstImg" alt="bonbon"></img> */}
      <div className="clsSecondImg">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/U7cUzRpoDRE"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default MainSection;

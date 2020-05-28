import React from "react";
import "./style/mainsection.css";
import mainpicturebonbon from "../assets/mainpicbonbon.jpg";
import ReactPlayer from "react-player";

function MainSection() {
  return (
    <div className="main-section .container">
      <img
        src={mainpicturebonbon}
        width="100%"
        class="img-fluid clsFirstImg"
      ></img>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=U7cUzRpoDRE"
        class="clsSecondImg"
        width="1000px"
        height="600px"
      />
    </div>
  );
}

export default MainSection;

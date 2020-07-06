import React from "react";
import "./style/mainsection.css";

function MainSection() {
  return (
    <div className="all-wrap">
      {/* <img src={mainpicturebonbon} className="clsFirstImg" alt="bonbon"></img> */}
      <div className="container">
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/U7cUzRpoDRE"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default MainSection;

import React from "react";
import cloud from "../../assets/cloud.png";
import cloudSoft from "../../assets/cloud-soft.png";
import { HomeContent } from "../HomeContent/HomeContent";

const Home = () => {
  return (
    <div>
      <div className="Intro-section">
        <div className="vector-bg" id="parallax"></div>
        <img src={cloud} className="cloud" />
        <img src={cloudSoft} className="cloud-soft" />
        <div className="content">
          {/* <Navigation /> */}
          <HomeContent />
        </div>
      </div>
    </div>
  );
};

export { Home };

// #EB5E8F;

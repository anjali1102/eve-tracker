import React from "react";
import DancingGirl from "../../assets/girl-in-air.png";
import "./HomeContent.css";

const HomeContent = () => {
  return (
    <div>
      <div className="intro-content">
        <div className="layout">
          <div className="left-col">
            <h1 className="title">
              <span className="small-text">
                <span className="text">EVE TRACKER </span>

                <span className="text">🩸</span>
              </span>
              <span className="big-text">Track flo 🌻</span>
            </h1>
            <p>
              Track your flow with eve tracker and always stay healthy and
              happy. Understand your cycle and feel your best.
              <h2> Track, Try It, You'll Like It! </h2>
            </p>
            {/* <CallToAction text="Contact me" /> */}
          </div>
          <div className="right-col">
            <img
              src={DancingGirl}
              alt="dancing girl logo"
              className="dance-girl-img"
            />
          </div>
        </div>
      </div>
      <a href="/eveTracker" className="button">
        Eve Tracker
      </a>
    </div>
  );
};

export { HomeContent };

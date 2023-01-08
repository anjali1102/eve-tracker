import React from "react";
// import CallToAction from "../shared/CallToAction";
import { Link } from "react-router-dom";
import pomodoro from "../../assets/pomodoro.png";
import track from "../../assets/track.png";
import { FaHeart, FaShoppingCart, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar_container">
      <div className="navbar_main">
        <Link to="/">
          <img src={track} className="track-logo" alt="logo" height="50px" />
        </Link>
        <div className="nav-items">
          <div className="search">
            <input type="text" className="search-box" placeholder="search" />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
          <div>
            <Link to="/countdown">
              <img src={pomodoro} alt="pomodoro-icon" height="50px" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };

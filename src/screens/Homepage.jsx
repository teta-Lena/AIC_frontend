import React from "react";
import Navbar from "../components/Navbar";
// import img from "../assets/yb.jpeg";
import img from "../assets/wayz.jpg";
import vid from "../assets/y2mate.com - Ariel Wayz  SHAYO Official Video_720p - Trim - Trim.mp4";
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <video autoPlay="autoplay" loop muted className="home-video">
          <source src={vid} type="video/mp4" />
        </video>
        <div className="header-song">
          <p>AWAY</p>
          <button type="button">STREAM</button>
        </div>
        <div className="home-nav">
          <nav>
            <ul>
              <li>Home</li>
              <li>Music</li>
              <li>Bio</li>
              <li>Videos</li>
              <li>Store</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="info-container">
        <div>NEW SINGLE BAD OUT NOW</div>
        <div>ARIEL'S DISCOGRAPHY</div>
        <div>ARIEL'S </div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="subscribe"></div>
    </div>
  );
};

export default Homepage;

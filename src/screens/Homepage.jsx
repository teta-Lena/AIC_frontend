import React from "react";
import Navbar from "../components/r-Navbar";
// import img from "../assets/yb.jpeg";
// import img from "../assets/wayz.jpg";
import vid from "../assets/riyeliweyizi.mp4";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic6.jpg";
import pic6 from "../assets/pic6.jpg";
import pic7 from "../assets/pic7.jpg";
import pic8 from "../assets/pic8.jpg";
import pic9 from "../assets/pic9.jpg";
import pic10 from "../assets/pic10.jpg";
import Footer from "@/components/shared/footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <video autoPlay="autoplay" loop muted className="home-video">
        <source src={vid} type="video/mp4" />
      </video>
      <div className="home-container">
        <div className="header-song">
          <p>"AWAY" is out now</p>
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

        <div className="info-container">
          <div>
            <img src={pic2} alt="" />
            <div className="captions">NEW SINGLE BAD OUT NOW</div>
          </div>
          <div>
            <img src={pic10} alt="" />
            <div className="captions"> ARIEL'S DISCOGRAPHY</div>
          </div>
          <div>
            <img src={pic9} alt="" />
            <div className="captions"> ARIEL'S UPCOMING SHOWS</div>
          </div>
          <div>
            <img src={pic8} alt="" />
            <div className="captions">ARIEL'S CLOTHING BRAND</div>
          </div>
          <div>
            <img src={pic6} alt="" />
            <div className="captions">ARIEL's PHOTOS</div>
          </div>
          <div>
            <img src={pic7} alt="" />
            <div className="captions">ARIEL's Videos</div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;

import React from "react";
import Navbar from "../components/r-Navbar";
// import img from "../assets/yb.jpeg";
import { Link } from "react-router-dom";
import img from "../assets/pic12.jpg";

import vid from "../assets/riyeliweyizi.mp4";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic5 from "../assets/pic6.jpg";
import pic6 from "../assets/pic6.jpg";
import pic7 from "../assets/pic7.jpg";
import pic8 from "../assets/pic8.jpg";
import pic9 from "../assets/pic9.jpg";
import pic13 from "../assets/pic13.jpg";
import pic10 from "../assets/pic10.jpg";
import Footer from "@/components/shared/footer";
import {
  FaNewspaper,
  FaMusic,
  FaVideo,
  // FaBrand,
  FaCompactDisc,
  FaCamera,
  FaTshirt,
  FaCalculator,
  FaMicrophone,
  FaCross,
} from "react-icons/fa";
import MidNav from "@/components/shared/mid-nav";

const Homepage = () => {
  const pics = [
    { image: img, option: "MERCH", icon: <FaTshirt /> },
    { image: pic2, option: "DISCOGRAPHY", icon: <FaCalculator /> },
    { image: pic3, option: "UPCOMING SHOWS", icon: <FaMicrophone /> },
    { image: pic6, option: "SHAYO OUT NOW", icon: <FaNewspaper /> },
    { image: pic7, option: "MUSIC", icon: <FaMusic /> },
    { image: pic8, option: "VIDEOS", icon: <FaVideo /> },
    { image: pic9, option: "PHOTOS", icon: <FaCamera /> },
    { image: pic10, option: "COLLABORATIONS", icon: <FaCross /> },
    {
      image: pic13,
      option: "LATEST NEWS",
      date: " 11 September 2023",
      icon: <FaNewspaper />,
    },
  ];
  // const options = ["VIDEOS", "PHOTOS", "COLLABORATIONS"];
  return (
    <div className="full-container">
      <Navbar />

      <div className="home-container">
        <div className="home-video">
          <video autoPlay="autoplay" loop muted className="home-video">
            <source src={vid} type="video/mp4" />
          </video>
        </div>

        <div className="header-song">
          <p>"AWAY" is out now</p>
          <button type="button">STREAM</button>
        </div>
        <MidNav />

        {/* <div className="info-container">
          <div>
            <img src={pic2} alt="" />
            <div className="captions">NEW SINGLE BAD OUT NOW</div>
          </div>
          <div>
            <img src={pic10} alt="" />
            <div className="captions">ARIEL'S DISCOGRAPHY</div>
          </div>
          <div>
            <img src={pic9} alt="" />
            <div className="captions"> ARIEL'S UPCOMING SHOWS</div>
          </div>
          <div>
            <img src={pic8} alt="" />
            <div className="captions">
              <FaTshirt className="text-xl text-[#345cd4]" />
              ARIEL'S CLOTHING BRAND
            </div>
          </div>
          <div>
            <img src={pic6} alt="" />
            <div className="captions">
              <FaCamera className="text-xl text-[#345cd4]" />
              ARIEL's PHOTOS
            </div>
          </div>
          <div>
            <img src={pic7} alt="" />
            <div className="captions">
              <FaVideo className="text-xl text-[#345cd4]" />
              ARIEL's Videos
            </div>
          </div>
        </div> */}

        <div className="flex flex-col w-full">
          <div className="grid w-full lg:grid-cols-3 md:grid-cols-3 five:grid-cols-2   gap11">
            {pics.map((pic, i) => (
              <Link
                to={`/music/${i}`}
                key={i}
                className="flex duration-300 p-0 m-0 border-0 cursor-pointer music-card max-w[400px] relative aspect-square overflow-hidden flex-col items-center justify-center bg-white roundedlg shadow-md"
              >
                <img
                  className=" absolute top-0 bottom-0 right-0 left-0 min-w-full min-h-full object-cover"
                  src={pic.image}
                  alt=""
                />
                <div className="w-full text-white h-full text-center bg-[#0e0404]/70 items-center justify-center flex flex-col z-10">
                  <button className="text-xl rounded-full w-11 border-2 h-11 items-center justify-center flex font-semibold">
                    {/* <BsMusicNote /> */}
                    {pic.icon}
                  </button>
                  <span className=" font-roboto-serif">{pic.date} </span>

                  <p className="text-2xl mt-4 font-bold text-center" key={i}>
                    {pic.option}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Homepage;

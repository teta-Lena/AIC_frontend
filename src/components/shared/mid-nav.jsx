import React from "react";
import { Link } from "react-router-dom";

export const Logo = () => (
  <Link to={'/'} className="logo flex items-center gap-x-2">
    <img className="w-8" src="/ArtZone.png" alt="" />
    <span>ArtZone</span>
  </Link>
);

const MidNav = ({ hasLogo = false }) => {
  return (
    <div className=" sticky top-0 z-50 w-full flex gap-x-8 text-lg items-center justify-between p-5 bg-black text-white">
      <div className="">{hasLogo && <Logo />}</div>
      <div className="flex gap-x-8 items-center">
        <Link to={"/home"} className="">
          Home
        </Link>
        <Link to={"/music"} className="">
          Music
        </Link>
        <Link to={"/bio"} className="">
          Bio
        </Link>
        <Link to={"/videos"} className="">
          Videos
        </Link>
        <Link to={"/store"} className="">
          Store
        </Link>
        <Link to={"/live"} className="">
          Live
        </Link>
      </div>
      <div className=""></div>
    </div>
  );
};

export default MidNav;

import { useAuthContext } from "@/contexts/AuthContext";
import React from "react";
import { Link } from "react-router-dom";

export const Logo = () => (
  <Link to={'/'} className="logo flex items-center gap-x-2">
    <img className="w-8" src="/ArtZone.png" alt="" />
    <span>ArtZone</span>
  </Link>
);

const MidNav = ({ hasLogo = false }) => {
  const { authenticated, setViewLogin } = useAuthContext()
  return (
    <div className=" sticky top-0 z-[5] w-full flex gap-x-8 text-lg items-center justify-between p-5 bg-black text-white">
      <div className="">{hasLogo && <Logo />}</div>
      <div className="flex gap-x-8 items-center">
        <Link to={"/"} className="">
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
        <Link to={"/join-live"} className="">
          Live
        </Link>
      </div>
      <div className="">
        {
          !authenticated &&
          <button className="bg-white px-6 py-1 rounded-lg text-lg font-semibold text-black" onClick={() => setViewLogin(true)}>Login</button>
        }
      </div>
    </div>
  );
};

export default MidNav;

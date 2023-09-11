import { useAuthContext } from "@/contexts/AuthContext";
import React, { useEffect } from "react";
import { BiX } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export const Logo = () => (
  <Link to={"/"} className="logo flex items-center gap-x-2">
    <img className="w-8" src="/ArtZone.png" alt="" />
    <span>ArtZone</span>
  </Link>
);

const MidNav = ({ hasLogo = false }) => {
  const { authenticated, setViewLogin } = useAuthContext()
  const [path, setPath] = React.useState("");
  const location = useLocation();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className=" sticky top-0 z-[5] w-full flex gap-x-8 text-lg items-center justify-between p-5 bg-black text-white">
      <div className="">{hasLogo && <Logo />}</div>
      <div
        className={`flex md:static fixed md:pt-0 pt-11 gap-y-4 duration-500 md:w-fit left-0 flex-col md:flex-row w-full bg-inherit ${
          isMobile ? "top-0 bottom-0" : "-top-[964px]"
        } gap-x-8 items-center`}
      >
        {isMobile && (
          <BiX
            onClick={() => setIsMobile(!isMobile)}
            className=" cursor-pointer absolute right-2 top-2"
            size={30}
          />
        )}
        <Link to={"/home"} className={path === "/home" ? "border-b-2" : ""}>
          Home
        </Link>
        <Link to={"/music"} className={path === "/music" ? "border-b-2" : ""}>
          Music
        </Link>
        <Link to={"/bio"} className={path === "/bio" ? "border-b-2" : ""}>
          Bio
        </Link>
        <Link to={"/videos"} className={path === "/videos" ? "border-b-2" : ""}>
          Videos
        </Link>
        <Link to={"/store"} className={path === "/store" ? "border-b-2" : ""}>
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
        <button onClick={() => setIsMobile(!isMobile)} className="">
          <FaBars className=" md:hidden" />
        </button>
      </div >
    </div >
  );
};

export default MidNav;

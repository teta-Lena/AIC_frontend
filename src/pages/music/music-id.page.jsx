import Player from "@/components/music/player";
import Suggested from "@/components/music/suggested";
import MidNav from "@/components/shared/mid-nav";
import MainLayout from "@/layouts/MainLayout";
import React from "react";
import { BsMusicNote } from "react-icons/bs";
import { Link } from "react-router-dom";

const MusicIdPage = () => {
  return (
    <MainLayout noBanner>
      <MidNav hasLogo />
      <div className="min-h-[90vh] p-4 text-white flex flex-col">
        <div className="flex gap-3 w-full">
          <div className="flex w-2/3 flex-col">
            <Player />
            <div className="w-1/2 mt-4 px-3 gap-y-2 flex-col flex">
              <h1 className=" font-luckyGuy">Away</h1>
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
                officia ullam placeat maxime eveniet dolore atque delectus?
                Expedita architecto distinctio labore accusamus! Voluptate fugit
                rem cumque eos magnam veniam reprehenderit.
              </span>
              <span>Released: 3 March 2021</span>
            </div>
          </div>
          <Suggested />
        </div>
        <h1 className=" mt-6 text-xl px-2">More Videos</h1>
        {/* horizontal scroll */}
        <div className="flex flex-nowrap gap-4 overflow-x-auto mt-4">
          {new Array(12).fill(0).map((_, i) => (
            <Link
              to={`/music/${i}`}
              key={i}
              className="flex min-w-[300px] duration-300 p-0 m-0 border-0 cursor-pointer music-card max-w[400px] relative aspect-square overflow-hidden flex-col items-center justify-center bg-white roundedlg shadow-md"
            >
              <img
                className=" absolute top-0 bottom-0 right-0 left-0 min-w-full min-h-full object-cover"
                src="https://www.ktpress.rw/wp-content/uploads/2022/01/Ariel-wayz-1024x736-1.jpg"
                alt=""
              />
              <div className="w-full text-white h-full text-center bg-[#0e0404]/70 items-center justify-center flex flex-col z-10">
                <button className="text-xl rounded-full w-11 border-2 h-11 items-center justify-center flex font-semibold">
                  <BsMusicNote />
                </button>
                <span className=" font-roboto-serif">May 3, 2023</span>
                <p className="text-2xl mt-4 font-bold text-center">Good Luck</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default MusicIdPage;

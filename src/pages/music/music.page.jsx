/* eslint-disable react/no-unescaped-entities */
import MidNav from "@/components/shared/mid-nav";
import Socials from "@/components/shared/socials";
import MainLayout from "@/layouts/MainLayout";
import React from "react";
import { BsMusicNote } from "react-icons/bs";
import { Link } from "react-router-dom";

const MusicIndex = () => {
  return (
    <MainLayout>
      {/* <div className="flex font-luckyGuy overflow-hidden h-[60vh] flex-col relative w-full">
        <img
          className=" absolute top-0 bottom-0 right-0 w-full max-h-full left-0 object-cover"
          src="https://www.ktpress.rw/wp-content/uploads/2022/01/Ariel-wayz-1024x736-1.jpg"
          alt=""
        />
        <div className="bg-[#390101]/80 absolute top-0 w-full left-0 h-full"></div>
        <div className="flex p-8 z-10 items-center w-fit flex-col gap-y-2">
          <h1 className="  text-2xl font-bold text-white">Away</h1>
          <button className=" w-fit bg-white text-black px-4 py-2 ">
            View Dates
          </button>
        </div>
        <Socials />
      </div> */}
      <MidNav />
      <div className="flex flex-col w-full">
        <div className="grid w-full lg:grid-cols-4 md:grid-cols-3 five:grid-cols-2   gap11">
          {new Array(12).fill(0).map((_, i) => (
            <Link
              to={`/music/${i}`}
              key={i}
              className="flex duration-300 p-0 m-0 border-0 cursor-pointer music-card max-w[400px] relative aspect-square overflow-hidden flex-col items-center justify-center bg-white roundedlg shadow-md"
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
                <p className="text-2xl mt-4 font-bold text-center">
                  Good Luck
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default MusicIndex;

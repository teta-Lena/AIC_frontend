import MainLayout from "@/layouts/MainLayout";
import React from "react";
import { Link } from "react-router-dom";

const MusicIndex = () => {
  return (
    <MainLayout>
      <div className="flex items-center font-luckyGuy justify-center  bg-white p-3">
        <span className=" text-3xl uppercase font-bold">
          "Ariel Ways" The Live Experience
        </span>
        <button className="ml-4 bg-black text-white px-8 py-2 ">
          View Dates
        </button>
      </div>
      <div className="flex font-luckyGuy overflow-hidden h-[60vh] flex-col relative w-full">
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
      </div>
      <div className="flex flex-col p-6 w-full">
        <div className="grid w-full mt-4 lg:grid-cols-4 md:grid-cols-3 five:grid-cols-2   gap11">
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
              <div className="w-ful text-white h-full text-center bg-[#0e0404]/70 items-center justify-center flex flex-col z-10">
                <h2 className="text-xl font-semibold">Song {i + 1}</h2>
                <p className="text-lg text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatibus!
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

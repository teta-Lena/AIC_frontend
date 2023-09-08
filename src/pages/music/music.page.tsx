import MainLayout from "@/layouts/MainLayout";
import React from "react";

const MusicIndex = () => {
  return (
    <MainLayout>
      <div className="flex flex-col p-6 w-full">
        <h1 className=" text-xl font-semibold">Popular music by Buravan</h1>
        <div className="grid w-full mt-4 lg:grid-cols-4 md:grid-cols-3 five:grid-cols-2   gap-11">
          {new Array(10).fill(0).map((_, i) => (
            <div
              key={i}
              className="flex duration-300 cursor-pointer music-card max-w-[400px] relative aspect-square overflow-hidden border flex-col items-center justify-center bg-white rounded-lg shadow-md"
            >
              <img
                className=" absolute top-0"
                src="https://www.ktpress.rw/wp-content/uploads/2022/08/Yvan.jpg"
                alt=""
              />
              <div className="w-ful text-white h-full text-center bg-black/70 items-center justify-center flex flex-col z-10">
                <h2 className="text-xl font-semibold">Song {i + 1}</h2>
                <p className="text-lg text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatibus!
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default MusicIndex;

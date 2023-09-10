import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ways3 from "@/assets/wayz/.jpg";
import ways2 from "@/assets/wayz/.jpg";
import ways1 from "@/assets/wayz/.jpg";

const Pictures = () => {
  const portfolios = [
    {
      id: 1,
      src: ways1,
    },
    {
      id: 2,
      src: ways2,
    },
    {
      id: 3,
      src: ways3,
    },
    {
      id: 4,
      src: ways1,
    },
    {
      id: 5,
      src: ways2,
    },
    {
      id: 6,
      src: ways3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % portfolios.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? portfolios.length - 1 : prevSlide - 1
    );
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="relative">
          <div
            key={portfolios[currentSlide].id}
            className="transform transition-transform"
          >
            <img
              src={portfolios[currentSlide].src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center"></div>
          </div>

          {/* Left and right arrow buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-4xl text-white cursor-pointer z-10"
          >
            <FaArrowLeft className="text-yellow-400" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-4xl text-white cursor-pointer z-10"
          >
            <FaArrowRight className="text-yellow-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pictures;

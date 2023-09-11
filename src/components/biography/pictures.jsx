import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ways3 from "@/assets/wayz/ariel-wayz.jpg";
import ways2 from "@/assets/wayz/Smiles.jpg";
import ways1 from "@/assets/wayz/smile.jpg";

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

  const imageStyle = "w-80 h-80 border-2 border-black-330"; // Apply the same style to all images

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-dark-brownish to-dark-brownish w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Pictures
          </p>
          <p className="py-6">Check out some of the pictures</p>
        </div>

        <div className="relative">
          <div
            key={portfolios[currentSlide].id}
            className="transform transition-transform flex flex-col items-center justify-center"
          >
            <img
              src={portfolios[currentSlide].src}
              alt=""
              className={`rounded-md duration-200 hover:scale-105 w-200 h-200 ${imageStyle}`}
            />
            <div className="flex items-center justify-center"></div>
          </div>

          {/* Left and right arrow buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-4xl text-white cursor-pointer z-10"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-4xl text-white cursor-pointer z-10"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pictures;

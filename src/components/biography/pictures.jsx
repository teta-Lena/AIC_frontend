import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../../assets/pic2.jpg";
import img2 from "../../assets/pic3.jpg";
import img3 from "../../assets/pic6.jpg";


const Pictures = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const pics = [
    { image: img1, alt: "Image 1" },
    { image: img2, alt: "Image 2" },
    { image: img3, alt: "Image 3" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === pics.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change image every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? pics.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === pics.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="image-slider relative flex items-center justify-center h-screen">
      <div className="slider-container relative">
        <img
          src={pics[currentSlide].image}
          alt={pics[currentSlide].alt}
          className="slider-image w-full max-w-screen-lg h-auto max-h-[50vw] sm:max-h-[70vh] transform transition-transform hover:scale-105"
        />
        <div className="slider-navigation absolute bottom-4 left-0 right-0 mx-auto flex justify-center">
          <button
            onClick={prevSlide}
            className="slider-button bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-l text-xl hover:scale-70"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="slider-button bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-r text-xl hover:scale-70"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pictures;

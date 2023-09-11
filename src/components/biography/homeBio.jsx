import React from "react";
import HeroImage from "@/assets/wayz/Inwedding.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react";

const HomeBio = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-bg-african to-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row gap-3 space-x-6">
        // here is the HeroImage
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto  md:w-full w-auto h-auto"
          />
        </div>
        <div className="flex flex-col justify-center h-full text-black">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Ariel Way's biography
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            She is a talented Rwandan singer and songwriter whose music
            transcends borders. Her soulful melodies and lyrics carry messages
            of love, unity, and hope. Ariel's unique blend of traditional
            Rwandan rhythms with modern sounds has earned her a devoted
            following both in Rwanda and internationally. Through her music, she
            celebrates her culture and spreads a message of harmony and
            positivity.
          </p>

          <div>
            <div
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-7 flex items-center rounded-md bg-gradient-to-r from-bg-african to-dark-brownish cursor-pointer"
            >
              Read Biography
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBio;

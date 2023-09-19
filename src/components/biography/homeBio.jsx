import HeroImage from "@/assets/wayz/Inwedding.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const HomeBio = () => {
  return (
    <div className="relative bg-gradient-to-b from-bg-african to-black overflow-hidden">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center min-h-screen px-4 space-y-6 md:space-y-0">
        
      <div className="md:w-1/2">
        <img
          src={HeroImage}
          alt="my profile"
          className="rounded-2xl mx-auto mt-5 md:ml-0 md:mr-auto"
        />
      </div>
        
        
        <div className="flex flex-col justify-center md:w-1/2 text-white md:p-12">
          <p className="text-gray-500 max-w-lg">
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

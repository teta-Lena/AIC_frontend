import React from "react";

const AboutHer = () => {
  return (
    <div
      name="aboutHer"
      className="w-full h-screen bg-gradient-to-b from-black to-dark-brownish text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Let's hear her Story
          </p>
          <p className="text-xl my-20">
            Once upon a time, in the vibrant city of Kigali, there lived a young
            and talented Rwandan girl named Ariel Wayz. From a very young age,
            Ariel was drawn to the world of music. She would often sneak into
            local music studios and watch in awe as musicians crafted beautiful
            melodies. However, Wayz's family faced financial difficulties, and
            pursuing her musical dreams seemed impossible.
          </p>

          <p className="text-4xl  font-bold inline border-b-4 border-gray-500 my-9">
            Her journey
          </p>
          <p className="text-xl mt-20">
            As she honed her musical skills, Amina's passion caught the
            attention of a local music producer, who saw immense potential in
            her. With his guidance and support, she recorded her first song,
            which quickly gained popularity on Rwandan radio stations.
          </p>
        </div>

        <br />

        <p className="text-xl"></p>
      </div>
    </div>
  );
};

export default AboutHer;

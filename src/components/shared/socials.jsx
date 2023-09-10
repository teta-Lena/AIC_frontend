import React from "react";
import { BiEnvelopeOpen } from "react-icons/bi";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex absolute right-4 -translate-y-1/2 top-1/2 items-center gap-y-6 py-6 px-2 bg-[#1d0707] text-gray-200 flex-col">
      <a
        className="flex items-center px-2"
        href="https://www.facebook.com/ishimwendungutsecharles"
        target="_blank"
        rel="no-referrer noreferrer"
      >
        <FaFacebookSquare className="text-3xl" />
      </a>
      <a
        className="flex items-center px-2"
        href="https://www.instagram.com/ndungutse_charles/"
        target="_blank"
        rel="no-referrer noreferrer"
      >
        <FaInstagramSquare className="text-3xl" />
      </a>
      <a
        className="flex items-center px-2"
        href="mailto:ndungutsecharles103@gmail.com"
        target="_blank"
        rel="no-referrer noreferrer"
      >
        <BiEnvelopeOpen className="text-3xl" />
      </a>
    </div>
  );
};

export default Socials;

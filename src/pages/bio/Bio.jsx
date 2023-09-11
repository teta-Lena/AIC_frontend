import React from "react";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import Home from "@/components/shared/navbar";
import AboutHer from "@/components/biography/aboutHer";
import Pictures from "@/components/biography/pictures";
import MidNav from "@/components/shared/mid-nav";

const Bio = () => {
  return (
    <div>
      <Home />
      <MidNav />
      <AboutHer />
      <Pictures />
      <Footer />
    </div>
  );
};

export default Bio;

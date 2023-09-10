import MainLayout from "@/layouts/MainLayout";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <MainLayout>
      <div className="min-h-[90vh] text-white">
        <Link to={'/music'}>
          Go To Music
        </Link>
      </div>
    </MainLayout>
  );
};

export default Home;

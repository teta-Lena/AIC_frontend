/* eslint-disable react/prop-types */
import Footer from "@/components/shared/footer";
import MidNav from "@/components/shared/mid-nav";
import Navbar from "@/components/shared/navbar";

const MainLayout = ({ children, noBanner }) => {
  return (
    <div className="flex bg-[#100000] flex-col w-full min-h-screen justify-between">
      <div className="w-full flex flex-col">
        {noBanner ? null : <Navbar />}
        <MidNav hasLogo />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

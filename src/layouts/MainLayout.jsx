/* eslint-disable react/prop-types */
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

const MainLayout = ({ children, noBanner }) => {
  return (
    <div className="flex bg-[#100000] flex-col w-full">
      {noBanner ? null : <Navbar />}
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;

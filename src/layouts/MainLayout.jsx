/* eslint-disable react/prop-types */
import Login from "@/components/auth/login";
import Signup from "@/components/auth/signup";
import Footer from "@/components/shared/footer";
import MidNav from "@/components/shared/mid-nav";
import Navbar from "@/components/shared/navbar";
import { useAuthContext } from "@/contexts/AuthContext";

const MainLayout = ({ children, noBanner }) => {

  const { viewLogin, viewSignup } = useAuthContext();

  return (
    <div className="flex bg-[#100000] flex-col w-full min-h-screen justify-between">
      {viewLogin && <Login />}
      {viewSignup && <Signup />}
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

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex sticky bg-dark-blue text-white justify-between px-8 py-4 items-center w-full">
      <div className="flex items-center">
        <img src={"/vite.svg"} alt="Vite Logo" className="w-8 h-8 mr-4" />
        <h1 className="text-xl font-bold">Music</h1>
      </div>
      <div className="flex items-center gap-x-3">
        <Link to="/" className=" hover:text-main-yellow duration-300">
          Home
        </Link>
        <Link to="/about"  className=" hover:text-main-yellow duration-300">About</Link>
        <Link to="/music"  className=" hover:text-main-yellow duration-300">Music</Link>
      </div>

    </div>
  );
};

export default Navbar;

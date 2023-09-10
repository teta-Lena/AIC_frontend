/* eslint-disable react/no-unescaped-entities */

const Navbar = () => {
  return (
    <div className="flex sticky items-center font-luckyGuy justify-center  bg-white p-3">
      <span className=" text-3xl uppercase font-bold">
        "Ariel Ways" The Live Experience
      </span>
      <button className="ml-4 bg-black text-white px-8 py-2 ">
        View Dates
      </button>
    </div>
  );
};

export default Navbar;

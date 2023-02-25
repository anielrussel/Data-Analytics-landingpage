import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between content-center items-center p-4 ">
      <div className="flex justify-between content-center items-center p-2 w-full md:px-[100px]">
        <div>
          <h1 className="text-green-300 font-bold text-3xl">REACT.</h1>
        </div>
        <div>
          <ul className="hidden md:flex text-white uppercase">
            <li className="p-4 cursor-pointer">Home</li>
            <li className="p-4 cursor-pointer">Company</li>
            <li className="p-4 cursor-pointer">Resources</li>
            <li className="p-4 cursor-pointer">About</li>
            <li className="p-4 cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
      <div className="md:hidden">
        <div onClick={handleNav}>
          {!nav ? (
            <AiOutlineMenu size={20} style={{ color: "white" }} />
          ) : (
            <AiOutlineClose size={20} style={{ color: "white" }} />
          )}
        </div>
        <div>
          <div
            className={
              !nav
                ? "fixed left-[-100%]"
                : "text-white fixed left-0 top-0 w-[60%] h-full border-r border-gray-500 bg-[#1a1a1a] ease-out duration-500"
            }
          >
            <h1 className="text-green-300 font-bold text-3xl pt-7 pl-4">
              REACT.
            </h1>

            <ul className="pt-[80px] pr-5 uppercase">
              <li className="p-4 border-b border-gray-500">Home</li>
              <li className="p-4 border-b border-gray-500">Company</li>
              <li className="p-4 border-b border-gray-500">Resources</li>
              <li className="p-4 border-b border-gray-500">About</li>
              <li className="p-4 border-b border-gray-500">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

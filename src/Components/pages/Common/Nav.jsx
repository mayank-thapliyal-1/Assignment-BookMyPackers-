import React, { useState, useEffect } from "react";
import logo from "../../../assets/images/Companies/logo.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 90);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`flex z-100 text-[14px]  justify-between items-center  py-2 p-2 sm:px-20 w-screen ${
        scrolled
          ? "fixed bg-white shadow-xl transition-transform duration-400 "
          : "bg-secondary "
      }`}
    >
      <div className=" flex justify-between sm:gap-20 gap-5 items-center font-medium ">
        <img src={logo} alt="logo" />
        <div className="flex w-full gap-5 sm:gap-10">
          <span className="flex items-center">
            {" "}
            Jobs <MdKeyboardArrowDown className=" font-bold text-xl" />
          </span>
          <span className="flex items-center">
            Career Compass{" "}
            <MdKeyboardArrowDown className=" font-bold text-xl" />
          </span>
          <span>Contests</span>
          <span>Degree</span>
        </div>
      </div>
      <div className="flex gap-10 px-5 py-2 font-medium  items-center tracking-wider">
        <span className="text-primary cursor-pointer">Empoyer Login</span>
        <span className="bg-primary py-2 px-6 rounded-md cursor-pointer border-1 border-primary hover:text-primary hover:bg-white text-white ">
          Candidate Login
        </span>
      </div>
    </div>
  );
};

export default Nav;

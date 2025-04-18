import React from "react";
import Marquee from "react-fast-marquee";
import { PiBagSimpleThin } from "react-icons/pi";
import { MdSearch } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import ministry from "../../../assets/images/pics/ministry-of-labour-and-employment-logo.png";
import DPIIT from "../../../assets/images/pics/DPIIT-header-new.png";
import Aicte from "../../../assets/images/pics/aicte-seeklogo.png";
import Homepagepic from "../../../assets/images/pics/HomePageCreative.png";
const HeroSec = () => {
  const ob = [
    {
      img: "src/assets/images/Companies/Aditya_Birla.png",
      alt: "Aditya Birla",
    },
    {
      img: "src/assets/images/Companies/Jio.svg",
      alt: "Jio",
    },
    {
      img: "src/assets/images/Companies/Shoppers_Stop.svg",
      alt: "Shoppers Stop",
    },
    {
      img: "src/assets/images/Companies/Tech_Mahindra.svg",
      alt: "Tech Mahindra",
    },
    {
      img: "src/assets/images/Companies/Tele Performance.svg",
      alt: "telePerformance",
    },
    {
      img: "src/assets/images/Companies/Flipkart.svg",
      alt: "FlipKart",
    },
    {
      img: "src/assets/images/Companies/BigBasket.svg",
      alt: "BigBasket",
    },
    {
      img: "src/assets/images/Companies/HDFC1.svg",
      alt: "HDFC",
    },
    {
      img: "src/assets/images/Companies/Swiggy.svg",
      alt: "Swiggy",
    },
    {
      img: "src/assets/images/Companies/Uber.svg",
      alt: "Uber",
    },
    {
      img: "src/assets/images/Companies/Urban_Company.svg",
      alt: "Urban Company",
    },
    {
      img: "src/assets/images/Companies/Zomato.svg",
      alt: "Zomato",
    },
    {
      img: "src/assets/images/Companies/FD logo.png",
      alt: "FD",
    },
  ];
  return (
    <div className="flex items-start px-5 sm:p-16  bg-secondary sm:items-end w-screen ">
      <div className="flex flex-col gap-5 sm:gap-16 sm:w-4xl w-screen  ">
        <div className="flex flex-col gap-1 sm:gap-6">
          <p className="text-primary text-lg font-semibold">
            INDIA’S #1 JOB PLATFORM
          </p>
          <h1 className="sm:text-6xl text-3xl text-[#190A28]  font-semibold">
            Your job search ends here
          </h1>
          <div className=" sm:block flex items-end">
            <p className="sm:text-2xl text-md font-light p-0">
              Discover 50 lakh+ career opportunities
            </p>
            <img
              src={Homepagepic}
              className="h-32 w-32 sm:hidden relative right-6"
              alt=""
            />
          </div>
        </div>
        <input
          type="text"
          placeholder="search for the job"
          className="sm:hidden border-1 w-fit  bloack rounded-md outline-none "
        />
        <div className="bg-white hidden sm:flex items-center py-2 4xl px-3 gap-2 rounded-lg">
          <MdSearch className="text-2xl " />{" "}
          <input
            type="search"
            className=" outline-none py-3 px-5  border-r-1"
          />
          <PiBagSimpleThin />
          <input className=" outline-none p-3  border-r-1" />
          <IoLocationOutline />
          <input type="text" className=" outline-none p-3  " />{" "}
          <button className="bg-primary  px-3 py-2  w-36 text-white rounded-md">
            Search Jobs
          </button>
        </div>
        <div className=" flex flex-col items-center sm:items-start gap-2 sm:gap-8">
          <h2 className="sm:text-xl text-md font-semibold">Proud to Support</h2>
          <span className="flex gap-4 sm:gap-9 item-center">
            <img className="sm:h-10 h-7 " src={ministry} alt="" />
            <img className="sm:h-10 h-7" src={Aicte} alt="" />
            <img className="sm:h-10 h-7" src={DPIIT} alt="" />
          </span>
        </div>
        <div className="flex flex-col ">
          <p className="sm:text-xl text-md font-semibold">
            Trusted by 1000+ enterprises and 7 lakh+ MSMEs for hiring
          </p>
          <Marquee speed={50} pauseOnHover>
            <div className="flex sm:gap-10 gap-5 p-5 sm:p-10">
              {ob.map((item, i) => (
                <img
                  className="sm:h-20 sm:w-26 h-20 w-20 "
                  key={i}
                  src={item.img}
                  alt={item.alt}
                ></img>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
      <img
        src={Homepagepic}
        alt="homepagepic"
        className="max-h-[32rem] max-w-[32rem] hidden sm:block  relative right-12  top-16"
      />
    </div>
  );
};

export default HeroSec;

import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const PopularSearch = () => {
  const ob = [
    {
      job: "Jobs For Freshers",
      img: "src/assets/images/pics/freshers-jobs.png",
    },
    {
      job: "Work from home Jobs",
      img: "src/assets/images/pics/work-from-home-jobs.png",
    },
    {
      job: "Part Time Jobs",
      img: "src/assets/images/pics/part-time-jobs.png",
    },
    {
      job: "Jobs For Women",
      img: "src/assets/images/pics/women-jobs.png",
    },
    {
      job: "Full time Jobs",
      img: "src/assets/images/pics/Full_time_jobs.png",
    },
  ];
  return (
    <div className="flex flex-col sm:grid grid-cols-3 sm:p-20 p-5 gap-6 items-center">
      <h1 className=" font-semibold text-6xl">Popular Searches on Apna</h1>
      {ob.map((items, i) => (
        <div
          key={i}
          className={`flex group flex-col h-[319.586px] cursor-pointer ${
            i === 0
              ? "hover:border-orange-500 hover:bg-gradient-to-t to-orange-50/10 via-orange-100/20 from-orange-600/10"
              : i === 1
              ? "hover:border-purple-500 hover:bg-gradient-to-t to-purple-50/10 via-purple-100/20 from-purple-600/10"
              : i === 2
              ? "hover:border-red-500 hover:bg-gradient-to-t to-red-50/10 via-red-100/20 from-red-600/10"
              : i === 3
              ? "hover:border-primary hover:bg-gradient-to-t to-primary/5 via-primary/10 from-primary/30"
              : "hover:border-blue-500 hover:bg-gradient-to-t to-blue-50/10 via-blue-100/20 from-blue-600/10"
          }  hover:border-1 gap-4 p-5 border-1 overflow-hidden border-[#E6E9EC] rounded-3xl`}
        >
          <p className=" uppercase font-extralight ">Trending At #{i + 1}</p>
          <div className="flex flex-col gap-2">
            <h2
              className={`font-semibold text-2xl ${i==0?"group-hover:text-orange-500":i==1?"group-hover:text-purple-500":i==2?"group-hover:text-red-500":i==3?"group-hover:text-primary":"group-hover:text-blue-500"} `}
            >
              {items.job}
            </h2>
            <h2 className=" sm:pl-12  group-hover:p-0 w-full sm:w-3xl text-shadow-slate-400 text-shadow-lg/50 font-bold text-3xl sm:text-6xl text-white">
              {items.job}
            </h2>
          </div>
          <div className="flex justify-around items-start">
            <button className={` flex group-hover:text-white  ${i==0?" group-hover:bg-orange-600":i==1?" group-hover:bg-purple-600":i==2?"group-hover:bg-red-600":i==3?"  group-hover:bg-primary":"group-hover:bg-blue-600"}  mt-8 gap-1 sm:gap-2 items-center py-2 px-2 sm:px-5 rounded-lg text-xl font-semibold`}>View all <MdKeyboardArrowRight className="text-xl font-semibold" /> </button>{" "}
            <img
              className=" relative h-54 left-10 bottom-16"
              src={items.img}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularSearch;

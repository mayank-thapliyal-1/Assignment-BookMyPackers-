import React from "react";
import twopep from "../../../assets/images/pics/two-people.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const Hire = () => {
  return (
    <div className="flex justify-center items-center p-10">
      <div className="flex flex-col-reverse sm:flex-row items-end bg-primary/10 shadow-md border border-gray-200 rounded-2xl p-10 sm:px-28 pt-12 pb-0 gap-10">
        <img src={twopep} alt="Two people illustration" />

        <div className="flex flex-col justify-evenly gap-5 h-96 p-5">
          <p className="bg-[#EAF8F4] text-primary font-semibold sm:text-xl w-fit px-3 py-1 rounded-lg">
            APNA FOR EMPLOYERS
          </p>

          <div className="flex flex-col gap-7 sm:gap-12">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl sm:text-6xl font-semibold text-emerald-900">
                Want to hire?
              </h1>
              <p>Find the best candidate from 5 crore+ active job seekers!</p>
            </div>

            <button className="flex items-center gap-1.5 text-primary font-semibold text-lg border border-primary bg-white hover:bg-primary hover:text-white rounded-lg w-full sm:w-fit px-10 sm:px-16 py-3">
              Post job <MdKeyboardArrowRight className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;

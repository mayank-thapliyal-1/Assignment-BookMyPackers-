import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";

const Filters = () => {
  const [salary, setSalary] = useState(75000);
  const [value, setValue] = useState(75000);
  const [count,setCount]=useState(50);
  const change = (e) => {
    if (e > 90000) {
        const k =e/100000;
      setValue(k+"Lakhs");
    } else setValue(e);
  };
  const salarychange = (e) => {
    setSalary(e.target.value);
    change(e.target.value);
    pos(e.target.value);
  };
  const pos=(e)=>{
    const m = (e / 150000) * 100;
    setCount(m);
  }
  

  return (
    <div className="flex flex-col accent-primary text-sm p-4 pr-14 gap-2 rounded-xl shadow-xs border-1 border-slate-100">
      <h1 className="flex p-2 border-b-1 border-slate-300">
        {" "}
        <FaFilter /> Filters
      </h1>
      {/* Posted Dates  */}
      <div className="flex flex-col gap-3 border-b-1 border-slate-300 p-2">
        <h1 className="font-semibold">Date posted</h1>
        <div className="flex flex-col gap-2">
          <label>
            {" "}
            <input type="radio" /> all
          </label>
          <lebel>
            {" "}
            <input type="radio" /> Last 24 hours
          </lebel>
          <label>
            {" "}
            <input type="radio" /> Last 3 days
          </label>
          <label>
            {" "}
            <input type="radio" /> Last 7 days
          </label>
        </div>
      </div>
      {/* Salary  */}
      <div>
        <h1 className="font-semibold">Salary</h1>
        <div
          className={` relative bg-[#064e3b] text-white p-1 pr-2 rounded-2xl w-fit`}
          style={{
            left: `calc(${count}% - 10px)`, // <- only dynamic part
          }}
        >
          ₹{value}
        </div>
        <input
          type="range"
          min={0}
          max={150000}
          step={10000}
          value={salary}
          onChange={(e) => salarychange(e)}
          className="w-full h-2 appearance-none accent-[#064e3b] focus:accent-[#064e3b] hover:accent-[#064e3b] rounded-full  bg-emerald-100"
          style={{
            background: `linear-gradient(to right, #064e3b ${count}%, #d1fae5 ${count}%)`,
          }}
        />{" "}
        <style jsx="true">
          {`
            input[type="range"]:hover::-webkit-slider-thumb {
              accent: [#064e3b];
            }
          `}
        </style>
        <span className="flex justify-between">
          <h2>₹0</h2> <h2>₹1.5Lakhs</h2>
        </span>
      </div>
      {/* work mode  */}
      <div className="flex flex-col gap-3 p-2 border-b-1 border-slate-300">
        <h1 className="font-semibold">work mode</h1>
        <div className="flex flex-col gap-2">
          <span>
            <input type="checkbox" /> work from home
          </span>
          <span>
            <input type="checkbox" /> work from field
          </span>
          <span>
            <input type="checkbox" /> work from office
          </span>
        </div>
      </div>
      {/* work type */}
      <div className="flex flex-col gap-3 border-b-1 border-slate-300 p-2">
        <h1 className="font-semibold">work type</h1>
        <div className="flex flex-col gap-2 ">
          <span>
            <input type="checkbox" /> Full time
          </span>
          <span>
            <input type="checkbox" /> Part time
          </span>
          <span>
            <input type="checkbox" /> intership
          </span>
        </div>
      </div>
      {/* work shift */}
      <div className="flex flex-col gap-3 border-b-1 border-slate-300 p-2">
        <h1 className="font-semibold">work shift</h1>
        <div className="flex flex-col gap-2 ">
          <span>
            <input type="checkbox" /> Day shift
          </span>
          <span>
            <input type="checkbox" /> Night shift
          </span>
        </div>
      </div>
      {/* department */}
      <div className="flex flex-col gap-3 border-b-1 border-slate-300 p-2">
        <h1 className="font-semibold">work mode</h1>
        <div className="flex flex-col gap-2">
          <span>
            <input type="checkbox" /> work from home
          </span>
          <span>
            <input type="checkbox" /> work from field
          </span>
          <span>
            <input type="checkbox" /> work from office
          </span>
        </div>
      </div>
      {/* Sort By */}
      <div className="flex flex-col gap-3 border-b-1 border-slate-300 p-2">
        <h1 className="font-semibold">short by</h1>
        <div className="flex flex-col gap-2">
          <span>
            {" "}
            <input type="radio" />
            Relevant
          </span>
          <span>
            <input type="radio" />
            Salary - High to low
          </span>
          <span>
            <input type="radio" />
            Date posted - New to Old
          </span>
        </div>
      </div>
    </div>
  );
};

export default Filters;

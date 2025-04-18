import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
const TopCompanies = () => {
  const ob = [
    {
      logo: "src/assets/images/Companies/Bajaj_logo.png",
      head: "Bajaj Allianz Life Insurance",
      para: "Provider of life insurance and financial services.",
    },
    {
      logo: "src/assets/images/Companies/Paytm.png",
      head: "Paytm Service Pvt. Ltd.",
      para: "Digital payment and e-commerce facilitator.",
    },
    {
      logo: "src/assets/images/Companies/Zomato_Logo.png",
      head: "Zomato",
      para: "Online Food Delivery Marketplace.",
    },
    {
      logo: "src/assets/images/Companies/Swiggy_LOGO.png",
      head: "Swiggy",
      para: "Food delivery and online ordering platform.",
    },
    {
      logo: "src/assets/images/Companies/kotak-life.png",
      head: "Kotak Life Insurance",
      para: "Life insurance and financial services company.",
    },
    {
      logo: "src/assets/images/Companies/Zepto.png",
      head: "Zepto",
      para: "Delivery and logistics services facilitator.",
    },
    {
      logo: "src/assets/images/Companies/TATA-AIA.png",
      head: "TATA AIA",
      para: "Life insurance and financial services organization.",
    },
    {
      logo: "src/assets/images/Companies/okay-go.png",
      head: "Okaygo",
      para: "On-demand services aggregator.",
    },
    {
      logo: "src/assets/images/Companies/Aditya_Birla_LOGO.png",
      head: "Aditya Birla Capital Limited",
      para: "Financial services and investment management provider.",
    },
    {
      logo: "src/assets/images/Companies/max-life.png",
      head: "Max Life Insurance",
      para: "Life insurance and financial services company.",
    },
    {
      logo: "src/assets/images/Companies/team-lease.png",
      head: "Teamlease",
      para: "Staffing and HR solutions partner.",
    },
    {
      logo: "src/assets/images/Companies/Flipkart_LOGO.png",
      head: "Flipkart",
      para: "E-commerce and online shopping marketplace.",
    },
    {
      logo: "src/assets/images/Companies/LIC.png",
      head: "Lic India",
      para: "Life insurance and financial services organization.",
    },
    {
      logo: "src/assets/images/Companies/Reliance_Jio.png",
      head: "Reliance Jio",
      para: "Telecommunications and digital services provider.",
    },
    {
      logo: "src/assets/images/Companies/SBI.png",
      head: "SBI LIFE Insurance company",
      para: "Life insurance and financial services provider.",
    },
    {
      logo: "src/assets/images/Companies/HDFC.png",
      head: "Hdfc Life Insurance Company Limited",
      para: "Life insurance and financial services firm.",
    },
  ];
  return (
    <div className="flex flex-col items-center py-16 bg-secondary gap-10">
      <h1 className="text-3xl font-bold">Job Openings in Top companies</h1>
      <div className="w-full flex-col items-center  overflow-x-scroll scrollbar   ">
        <div className="flex gap-6  py-2 px-10 min-w-max ">
          {ob.map((items, i) => (
            <div
              key={i}
              className=" group flex flex-col  justify-between gap-3  w-[25rem] bg-white p-5 py-10 shadow rounded-xl"
            >
              <img
                src={items.logo}
                alt=""
                className="h-20 w-20 object-contain"
              />
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold mt-2">{items.head}</h2>
                <p className="text-xl font-light">{items.para}</p>
              </div>
              <button className=" flex gap-1 px-4 py-2 rounded-md items-center w-fit  group-hover:bg-primary group-hover:text-white text-primary ">
                View jobs{" "}
                <MdKeyboardArrowRight className=" text-xl font-semibold" />{" "}
              </button>
            </div>
          ))}    
        </div>
      </div>
      <button className="text-primary border-1 border-primary text-xl hover:text-white hover:bg-primary flex gap-1  py-4 px-16 items-center rounded-md">
        {" "}
        View all <MdKeyboardArrowRight className="text-xl font-semibold" />
      </button>
    </div>
  );
};
export default TopCompanies;

import React from "react";
import invertedquote from "../../../assets/images/pics/inverted-quote.png";
import { FaStarHalf, FaStar } from "react-icons/fa";
const Community = () => {
  const ob = [
    {
      img: "src/assets/images/Community/shiwangi-singla.png",
      name: "Shiwangi Singla",
      para: `"Thanks Apna for helping me find a job without much hassle. If you are a fresher or a skilled person with expert knowledge in a specific field, you can easily find a job through the Apna app."`,
    },
    {
      img: "src/assets/images/Community/jenil-ghevariya.png",
      name: "Jenil Ghevariya",
      para: `"This app is very helpful if you are looking for a job and the team is also very supportive and friendly. They guided me through every stage. It is very easy to find a job on Apna because there are a lot of job options here for everyone. I got a job interview call very quickly after applying."`,
    },
    {
      img: "src/assets/images/Community/kaynat-mansuri.png",
      name: "Kaynat Mansuri",
      para: `"It is definitely a great app with correct and true information on the job details. I am happy to use it and I would also recommend my friends to use it for their career development."`,
    },
    {
      img: "src/assets/images/Community/rekha.png",
      name: "Rekha",
      para: `"Good and helpful app, even for freshers who don't have good qualifications. There are jobs for Caretakers, Househelp and many more. It's very easy to find jobs here. Thank you, Apna app!"`,
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-primary/20">
      <div className="bg-primary flex flex-col p-16 sm:w-1/2 w-full gap-20">
        <img src={invertedquote} className="h-26 w-26" alt="" />
        <p className="font-bold text-white text-4xl ">
          Join the community of 5 crore satisfied job seekers...
        </p>
        <p className="font-light text-xl text-white flex items-center gap-2">
          Play Store Ratings
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <span className="flex ">
            <FaStarHalf className=" text-yellow-400 z-10 " />
            <FaStar className="text-white relative right-5 z-0" />
          </span>
        </p>
      </div>
      <div className="w-screen overflow-x-scroll scrollbar  p-10 ">
        <div className="flex-2 flex items-center gap-3  min-w-max">
          {ob.map((items, i) => (
            <div
              key={i}
              className=" shadow-2xs rounded-xl w-[500px] h-[283px] bg-white p-6 pt-0 gap-4 flex flex-col "
            >
              <div className="flex gap-3  items-center p-0">
                <img
                  src={items.img}
                  className="h-24 w-20 relative bottom-4 rounded-2xl"
                  alt=""
                />{" "}
                <div>
                  <h2 className="text-lg ">{items.name}</h2>{" "}
                  <p className="font-light text-lg  flex items-center gap-2">
                    4.5 <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <span className="flex ">
                      <FaStarHalf className=" text-yellow-400 z-10 " />
                      <FaStar className="text-gray-200 relative right-4.5 z-0" />
                    </span>{" "}
                  </p>
                </div>
              </div>
              <p className="font-light">{items.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;

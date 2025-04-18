import React from "react";
import Nav from "./pages/Common/Nav";
import HeroSec from "./pages/HomePage/HeroSec";
import PopularSearch from "./pages/HomePage/PopularSearch";
import TopCompanies from "./pages/HomePage/TopCompanies";
import Community from "./pages/HomePage/Community";
import Download from "./pages/HomePage/Download";
import Hire from "./pages/HomePage/Hire";

const Home = () => {
  return (
    <div className="overflow-hidden w-screen">
      <Nav/>
      <HeroSec/>
      <PopularSearch/>
      <TopCompanies/>
      <Community/>
      <Download/>
      <Hire/>
    </div>
  );
};

export default Home;

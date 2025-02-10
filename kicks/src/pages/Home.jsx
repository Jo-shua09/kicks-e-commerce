import React from "react";
import Navbar from "../components/GeneralComponents/Navbar";
import Hero from "../components/HomeComponents/Hero";
import Drops from "../components/HomeComponents/Drops";

const Home = () => {
  return (
    <div className="">
      <div className="">
        <Navbar />
        <Hero />
        <Drops />
      </div>
    </div>
  );
};

export default Home;

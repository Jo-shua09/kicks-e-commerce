import React from "react";
import Navbar from "../components/general/Navbar";
import Hero from "../components/home/Hero";
import Drops from "../components/home/Drops";

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

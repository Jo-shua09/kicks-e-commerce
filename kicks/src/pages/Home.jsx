import React from "react";
import Navbar from "../components/general/Navbar";
import Hero from "../components/home/Hero";
import Drops from "../components/home/Drops";
import Category from "../components/home/Category";
import Review from "../components/home/Review";

const Home = () => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <Navbar />
        </div>
        <div className="">
          <Hero />
        </div>
        <div className="">
          <Drops />
        </div>
        <div className="">
          <Category />
        </div>
        <div className="">
          <Review />
        </div>
      </div>
    </div>
  );
};

export default Home;

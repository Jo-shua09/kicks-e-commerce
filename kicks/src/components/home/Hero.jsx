import React from "react";
import { images } from "../../data/HomeData";
import { Button2 } from "../general/buttons";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    // HERO SECTION STARTS
    // HERO SECTION STARTS
    <div className="w-full h-full">
      <div className="">
        <div className=" text-center">
          <h1 className="-mt-5 sm:-mt-16 sm:text-[10rem] text-[7rem] uppercase font-bold font-Rubik lg:text-[16rem] xl:text-[20rem]">
            do it <span className="uppercase text-blue-600 ">right</span>
          </h1>
        </div>
        <div className="w-full  h-full section sm:-mt-10">
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={images.Hero}
              loading="lazy"
              alt="Hero Image"
              className="w-full overflow-hidden sm:h-[65rem] lg:h-full h-[60rem] object-cover rounded-[3rem]"
            />
            <h3 className="absolute normal-case font-medium bg-gray-950 rounded-t-2xl text-white p-5 sm:px-10 px-5 items-center flex text-base top-1/4  -left-20 sm:-left-24  rotate-90">
              Nike product of the year
            </h3>
            <div className="flex items-end justify-between absolute bottom-10 sm:bottom-20 sm:px-16 px-8 lg:px-20 w-full right-0 left-0">
              <div className="flex flex-col items-start gap-y-3 sm:w-1/2 w-3/6 lg:w-1/3">
                <h2 className="sm:text-7xl text-6xl font-bold text-white uppercase font-Rubik">NIKE AIR MAX</h2>
                <p className="sm:text-3xl text-2xl font-medium pb-5 text-gray-50 normal-case">
                  Nike introducing the new air max for everyone's comfort
                </p>
                <Link to="/list">
                  <Button2 name="shop now" />
                </Link>
              </div>
              <div className=" flex flex-col items-center gap-y-5">
                <img src={images.SubHero1} loading="lazy" alt="sub hero image" className="w-full lg:h-full sm:h-[15rem] h-[13rem] object-cover" />
                <img src={images.SubHero2} loading="lazy" alt="sub hero image" className="w-full lg:h-full sm:h-[15rem] h-[13rem] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import { Button3 } from "./buttons";
import { images } from "../../data/HomeData";
import {
  Add,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";

/**
 * Footer component that displays the footer section of the application.
 * It includes a subscription form, company information, categories, and social media links.
 */
const Footer = () => {
  /**
   * Renders the footer section with a subscription form and company information.
   */
  return (
    <div className=" section-two flex flex-col w-full h-full">
      <div className="w-ful h-full  rounded-3xl  bg-blue-600 text-white">
        <div className="flex items-center flex-wrap sm:gap-x-72  gap-y-12 sm:py-20 p-10 sm:pb-20 justify-between">
          <div className="flex flex-col sm:gap-y-5 mb-5 lg:flex-1">
            <h2 className="uppercase font-Rubik font-bold text-5xl">
              Join our KicksPlus Club & get 15% off
            </h2>
            <p className="text-3xl normal-case font-medium text-gray-200">
              Sign up for free! Join the community.
            </p>
            <div className="flex gap-x-2 w-full h-full sm:mt-6 mt-10">
              <div className="w-full h-full">
                <input
                  type="text"
                  placeholder="Email address"
                  className="w-full h-[4.2rem] focus:border-gray-600 bg-transparent border focus:bg-white text-black font-medium border-gray-50 rounded-xl text-2xl pl-3 capitalize placeholder:text-gray-200 placeholder:normal-case"
                />
              </div>
              <div className="w-full h-full flex-1">
                <Button3 name="submit" />
              </div>
            </div>
          </div>

          <div className="relative lg:flex-1 lg:place-items-end w-full ">
            <img
              src={images.LogoWhite}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute -top-4 rounded-full -right-5 sm:-right-4 bg-yellow-600 font-Rubik p-2 flex items-center">
              <Add sx={{ fontSize: "1.8rem", fontWeight: "bolder" }} />
            </div>
          </div>
        </div>

        <div className=" w-full h-full  rounded-3xl bg-black/95 ">
          <div className="w-full h-full gap-x-8 gap-y-10 grid xl:grid-cols-12 lg:grid-cols-10 sm:grid-cols-4  grid-cols-6  p-12">
            <div className="flex flex-col gap-y-5 col-span-6  sm:col-span-2 lg:col-span-4 xl:col-span-6">
              <h3 className="text-3xl text-yellow-600 font-Rubik font-semibold normal-case">
                About us
              </h3>
              <p className="text-2xl text-gray-200 font-medium normal-case w-3/4">
                We are the biggest hyperstore in the universe. We got you all
                cover with our exclusive collections and latest drops.
              </p>
            </div>

            <div className="flex flex-col gap-y-5 col-span-6 sm:col-span-2 lg:col-span-2 xl:col-span-2">
              <h3 className="text-3xl text-yellow-600 font-Rubik font-semibold normal-case">
                Categories
              </h3>
              <div className="flex flex-col gap-y-3">
                <a href="#" className="text-white text-2xl font-medium">
                  runners
                </a>
                <a href="#" className="text-white text-2xl font-medium">
                  sneakers
                </a>
                <a href="#" className="text-white text-2xl font-medium">
                  basketball
                </a>
                <a href="#" className="text-white text-2xl font-medium">
                  outdoor
                </a>
                <a href="#" className="text-white text-2xl font-medium">
                  golf
                </a>
                <a href="#" className="text-white text-2xl font-medium">
                  hiking
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-y-5 col-span-6 sm:col-span-2 lg:col-span-2 xl:col-span-2">
              <h3 className="text-3xl text-yellow-600 font-Rubik font-semibold normal-case">
                Company
              </h3>
              <div className="flex flex-col gap-y-3">
                <a href="#" className="text-white text-2xl font-medium">
                  about
                </a>
                <a href="#" className="text-white text-2xl font-medium">
                  contact
                </a>
                <a href="#" className="text-white text-2xl font-medium">
                  blogs
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-y-5 col-span-6 sm:col-span-2 lg:col-span-2 xl:col-span-2">
              <h3 className="text-3xl text-yellow-600 font-Rubik font-semibold normal-case">
                Follow us
              </h3>
              <div className="flex items-center gap-x-7">
                <Facebook sx={{ fontSize: "2rem", cursor: "pointer" }} />
                <Instagram sx={{ fontSize: "2rem", cursor: "pointer" }} />
                <Twitter sx={{ fontSize: "2rem", cursor: "pointer" }} />
                <LinkedIn sx={{ fontSize: "2rem", cursor: "pointer" }} />
              </div>
            </div>
          </div>

          <div className=" mt-6 p-12 pb-0">
            <img
              src={images.FootLogo}
              alt="footer logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className=" mx-auto m-5 mb-0  text-gray-950 font-bold font-Rubik normal-case text-2xl italic">
        All rights reserved | Tuma.
        <span className="text-yellow-600 text-2xl normal-case">dev</span>
      </div>
    </div>
  );
};
export default Footer;

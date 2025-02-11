import { ArrowDropDown, Close, Menu, Person, SearchRounded } from "@mui/icons-material";
import React from "react";
import { images } from "../../data/HomeData";
import { useState } from "react";

const Navbar = () => {
  // NAVBAR OPEN AND CLOSE CONFIG
  const [isOpen, setIsOpen] = useState(false);
  function handleNavbar() {
    setIsOpen(!isOpen);
  }
  window.removeEventListener("scroll", handleNavbar);

  return (
    <div className="w-full h-full">
      {/* LARGE SCREEN NAVBAR */}
      <div className="w-[95%] bg-[#FAFAFA] py-10 sm:py-8 font-Rubik px-6 shadow-[1px_1px_5px_rgba(0,0,0,0.2)] mx-auto mt-10 rounded-2xl h-auto flex items-center justify-between">
        <div className="flex items-center flex-[2]">
          {/* NAV ICONS */}
          <div className="sm:hidden transition-all duration-300 overflow-hidden ease-in-out" onClick={handleNavbar}>
            {isOpen ? <Close sx={{ cursor: "pointer", fontSize: "4rem" }} /> : <Menu sx={{ cursor: "pointer", fontSize: "4rem" }} />}
          </div>
          {/* NAV ICONS */}

          <ul className="sm:flex items-center sm:flex-row sm:gap-x-10 hidden">
            <li className="list-none sm:text-xl text-2xl font-medium">new drops 🔥 </li>
            <li className="list-none sm:text-xl text-2xl font-medium flex items-center">
              men
              <span className="">
                <ArrowDropDown sx={{ cursor: "pointer", fontSize: "2rem" }} />
              </span>
            </li>
            <li className="list-none sm:text-xl text-2xl font-medium flex items-center">
              women
              <span className="">
                <ArrowDropDown sx={{ cursor: "pointer", fontSize: "2rem" }} />
              </span>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={images.LogoDark} loading="lazy" alt="Logo" className="object-cover sm:w-[14rem] w-full h-full" />
        </div>
        <div className="flex items-center place-content-end sm:gap-x-10 gap-x-5 flex-[2]">
          <div className="hidden sm:flex">
            <SearchRounded sx={{ cursor: "pointer", fontSize: "2.5rem" }} />
          </div>
          <div className="">
            <Person sx={{ cursor: "pointer", fontSize: "2.5rem" }} />
          </div>
          <div className="bg-orange-500 text-2xl rounded-full py-1 px-3">0</div>
        </div>
      </div>

      {/* SMALL SCREEN NAV BAR */}
      <div
        className={`w-2/3 transition-all duration-300 overflow-hidden ease-in-out section -mt-5 ${
          isOpen ? "max-h-[30rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex shadow-[1px_1px_5px_rgba(0,0,0,0.2)] flex-col gap-y-4 bg-gray-50 p-4 pb-10 px-7 rounded-2xl">
          <li className="list-none sm:text-xl text-2xl font-semibold hover:bg-gray-300 py-6 px-2 hover:text-gray-800 cursor-pointer hover:tracking-wider">
            new drops 🔥
          </li>
          <li className="list-none sm:text-xl text-2xl font-semibold hover:bg-gray-300 py-6 px-2 hover:text-gray-800 cursor-pointer hover:tracking-wider flex items-center justify-between">
            men
            <span className="">
              <ArrowDropDown sx={{ cursor: "pointer", fontSize: "2rem" }} />
            </span>
          </li>
          <li className="list-none sm:text-xl text-2xl font-semibold hover:bg-gray-300 py-6 px-2 hover:text-gray-800 cursor-pointer hover:tracking-wider flex items-center justify-between">
            women
            <span className="">
              <ArrowDropDown sx={{ cursor: "pointer", fontSize: "2rem" }} />
            </span>
          </li>
          <div className="relative">
            <input type="text" placeholder="Search..." className="w-full border border-gray-800 pl-3 text-gray-900 h-[5rem] rounded-xl text-2xl" />
            <div className="absolute top-0 right-3 translate-y-1/3">
              <SearchRounded sx={{ cursor: "pointer", fontSize: "3rem" }} />
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import { ArrowDropDown, Close, Menu, Person, SearchRounded } from "@mui/icons-material";
import React, { useState, useEffect, useRef } from "react";
import { images } from "../../data/HomeData";
import { Link } from "react-router-dom";

const Navbar = () => {
  // NAVBAR OPEN AND CLOSE CONFIG
  const [isOpen, setIsOpen] = useState(false);
  const filterRef = useRef(null);

  function handleNavbar() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (filterRef.current && isOpen) {
        const filterRect = filterRef.current.getBoundingClientRect();
        if (filterRect.bottom < 0) {
          setIsOpen(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  // useEffect(() => {
  //   function handleBodyClick(event) {
  //     if (filterRef.current && !filterRef.current.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   }

  //   document.body.addEventListener("click", handleBodyClick);
  //   return () => {
  //     document.body.removeEventListener("click", handleBodyClick);
  //   };
  // }, [isOpen]);

  return (
    <div className="w-full h-full">
      {/* LARGE SCREEN NAVBAR */}
      <div className="w-[95%] bg-[#FAFAFA] py-10 sm:py-8 font-Rubik px-6 shadow-[1px_1px_5px_rgba(0,0,0,0.2)] mx-auto mt-10 rounded-2xl h-auto flex items-center justify-between">
        <div className="flex items-center flex-[2]">
          <div className="sm:hidden transition-all duration-300 overflow-hidden ease-in-out" onClick={handleNavbar}>
            {isOpen ? <Close sx={{ cursor: "pointer", fontSize: "4rem" }} /> : <Menu sx={{ cursor: "pointer", fontSize: "4rem" }} />}
          </div>
          <ul className="sm:flex items-center sm:flex-row sm:gap-x-10 hidden">
            <Link to="/">
              <li className="list-none sm:text-xl text-2xl font-semibold font-Rubik cursor-pointer hover:tracking-wider hover:decoration-black hover:underline">
                new drops
              </li>
            </Link>

            <Link to="/list">
              <li className="list-none sm:text-xl text-2xl font-semibold font-Rubik cursor-pointer hover:tracking-wider hover:decoration-black hover:underline flex items-center">
                shop now
              </li>
            </Link>

            <Link to="/sign_up">
              <li className="list-none sm:text-xl text-2xl font-semibold font-Rubik cursor-pointer hover:tracking-wider hover:decoration-black hover:underline flex items-center">
                sign up
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex-1 flex justify-center">
          <Link to="/">
            <img src={images.LogoDark} loading="lazy" alt="Logo" className="object-cover cursor-pointer sm:w-[14rem] w-full h-full" />
          </Link>
        </div>

        <div className="flex items-center place-content-end sm:gap-x-10 gap-x-5 flex-[2]">
          <div className="hidden sm:flex">
            <SearchRounded sx={{ cursor: "pointer", fontSize: "2.5rem" }} />
          </div>
          <div className="">
            <Link to="/log_in">
              <Person sx={{ cursor: "pointer", fontSize: "2.5rem" }} />
            </Link>
          </div>
          <Link to="/cart">
            <div className="bg-orange-500 text-2xl text-white font-Rubik font-bold rounded-full py-1 px-3">0</div>
          </Link>
        </div>
      </div>

      {/* SMALL SCREEN NAV BAR */}
      <div
        ref={filterRef}
        className={`w-3/4 transition-all duration-300 overflow-hidden ease-in-out section -mt-5  ${
          isOpen ? "max-h-[30rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex shadow-[1px_1px_5px_rgba(0,0,0,0.2)] flex-col gap-y-4 bg-gray-50 p-4 pb-10 px-7 rounded-2xl">
          <Link to="/">
            <li className="list-none sm:text-xl text-2xl font-semibold font-Rubik hover:bg-gray-300 py-6 px-2 hover:text-gray-800 cursor-pointer hover:tracking-wider">
              new drops
            </li>
          </Link>

          <Link to="/list">
            <li className="list-none sm:text-xl text-2xl font-semibold font-Rubik hover:bg-gray-300 py-6 px-2 hover:text-gray-800 cursor-pointer hover:tracking-wider flex items-center justify-between">
              Shop now
            </li>
          </Link>

          <Link to="/sign_up">
            <li className="list-none sm:text-xl text-2xl font-semibold font-Rubik hover:bg-gray-300 py-6 px-2 hover:text-gray-800 cursor-pointer hover:tracking-wider flex items-center justify-between">
              sign up
            </li>
          </Link>

          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border focus:border-2 transition-all duration-200 border-gray-800 pl-3 text-gray-900 h-[5rem] rounded-xl text-2xl"
            />
            <div className="absolute top-0 right-3 translate-y-1/3">
              <Link to="/list">
                <SearchRounded sx={{ cursor: "pointer", fontSize: "3rem" }} />
              </Link>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import { ArrowDropDown, Shuffle } from "@mui/icons-material";
import React from "react";
import FilterLG from "./FilterLG";

const ProductList = () => {
  return (
    <div className="section !pt-2">
      <div className="sm:hidden flex justify-between items-center w-full">
        <div className="text-2xl uppercase cursor-pointer font-Rubik font-medium bg-white rounded-2xl py-4 px-7 gap-x-14 flex items-center justify-between">
          filter <Shuffle sx={{ fontSize: "2rem" }} />
        </div>
        <div className="text-2xl uppercase cursor-pointer font-Rubik font-medium bg-white rounded-2xl py-4 px-7 gap-x-14 flex items-center justify-between">
          trending <ArrowDropDown sx={{ fontSize: "2rem" }} />
        </div>
      </div>

      <div className="flex items-center mt-10 justify-between w-full">
        <div className="">
          <h2 className="text-5xl font-Rubik font-semibold">life style shoes</h2>
          <span className="text-xl font-medium">122 items</span>
        </div>
        <div className=" sm:flex hidden cursor-pointer text-2xl uppercase font-Rubik font-semibold bg-white rounded-2xl py-4 px-7 gap-x-14 items-center justify-between">
          trending <ArrowDropDown sx={{ fontSize: "2rem" }} />
        </div>
      </div>

      <div className="flex items-center gap-x-10 mt-10">
        <div className="flex-[2] sm:flex hidden">
          <FilterLG />
        </div>
        <div className="flex-[5]">hello</div>
      </div>
    </div>
  );
};

export default ProductList;

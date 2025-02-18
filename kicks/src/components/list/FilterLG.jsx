import { ArrowDropDown } from "@mui/icons-material";
import React from "react";

const FilterLG = () => {
  return (
    <div className="">
      <h3 className="text-3xl font-bold mb-12">filters</h3>
      <div className="">
        <div className="flex justify-between gap-x-96 mb-5">
          <span className="text-xl uppercase font-Rubik font-bold">refine by</span>
          <ArrowDropDown sx={{ fontSize: "2rem" }} />
        </div>
        <div className="flex gap-x-6 items-center">
          <div className="py-3 px-7 text-center flex text-xl font-Rubik bg-blue-600 text-white rounded-2xl">men</div>
          <div className="py-3 px-7 text-center flex text-xl font-Rubik bg-blue-600 text-white rounded-2xl">casual</div>
        </div>
      </div>
      <div className="flex justify-between gap-x-96 my-10">
        <span className="text-xl uppercase font-Rubik font-bold">size</span>
        <ArrowDropDown sx={{ fontSize: "2rem" }} />
      </div>
    </div>
  );
};

export default FilterLG;

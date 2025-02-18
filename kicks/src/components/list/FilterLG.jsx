import { ArrowDropDown } from "@mui/icons-material";
import React from "react";

const FilterLG = () => {
  return (
    <div className="">
      <div className="">
        <h3 className="">filters</h3>
        <div className="">
          <div className="flex justify-between gap-x-7">
            <span className="">refine by</span>
            <ArrowDropDown />
          </div>
          <div className="">
            <div className=""></div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterLG;

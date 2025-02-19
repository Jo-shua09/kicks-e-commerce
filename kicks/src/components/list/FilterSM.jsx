import store from "./store";
import { Provider } from "react-redux";
import React, { useState } from "react";
import FilterLG from "./FilterLG";
import { Close } from "@mui/icons-material";

const FilterSM = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div
      className={`w-full h-full z-[99999] rounded-xl scroll-bar overflow-y-auto right-0 bg-gray-200 overflow-hidden ${
        isOpen ? "h-0 hidden" : "h-max block"
      }`}
    >
      <div className="bg-white py-5 mb-4 px-6">
        <div className="text-3xl py-5 items-center flex font-bold cursor-pointer justify-between">
          filters
          <Close sx={{ fontSize: "3rem", fontWeight: "bolder" }} onClick={handleClick} />
        </div>
      </div>
      <div className="px-6  z-[99999]">
        <Provider store={store}>
          <FilterLG />
        </Provider>
      </div>
    </div>
  );
};

export default FilterSM;

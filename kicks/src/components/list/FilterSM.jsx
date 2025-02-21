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
      className={`w-full h-full rounded-xl scroll-bar overflow-y-auto right-0 bg-gray-200 overflow-hidden ${isOpen ? "h-0 hidden" : "h-max block"}`}
    >
      <div className="bg-white py-5 mb-4 px-6">
        <div className="text-3xl py-5 items-center flex font-bold cursor-pointer justify-between">
          filters
          <Close sx={{ fontSize: "3rem", fontWeight: "bolder" }} onClick={handleClick} />
        </div>
      </div>
      <div className="px-6">
        <Provider store={store}>
          <FilterLG />
        </Provider>
        <div className=" mt-16 flex items-center justify-between w-full h-full gap-x-5">
          <div className="bg-transparent border-2 border-gray-900 text-gray-950 flex cursor-pointer hover:scale-95 justify-center text-3xl items-center font-semibold font-Rubik rounded-2xl w-full h-[5rem]">
            reset
          </div>
          <div className="text-white bg-gray-950 font-semibold font-Rubik rounded-2xl flex cursor-pointer hover:scale-95 justify-center text-3xl items-center w-full h-[5rem]">
            apply
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSM;

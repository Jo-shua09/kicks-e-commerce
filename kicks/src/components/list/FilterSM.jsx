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
      className={`h-full rounded-xl pb-16 scroll-bar overflow-y-auto right-0 bg-gray-200 w-[40rem] shadow-xl overflow-hidden ${
        isOpen ? "hidden" : "block"
      }`}
    >
      <div className="bg-white py-5 mb-4 px-6">
        <div className="text-3xl py-5 items-center flex font-bold cursor-pointer justify-between">
          filters
          <Close
            sx={{ fontSize: "3rem", fontWeight: "bolder" }}
            onClick={handleClick}
          />
        </div>
      </div>
      <div className="px-6">
        <Provider store={store}>
          <FilterLG />
        </Provider>
      </div>
    </div>
  );
};

export default FilterSM;

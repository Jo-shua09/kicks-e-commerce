import { ArrowDropDown, Shuffle } from "@mui/icons-material";
import React from "react";
import FilterLG from "./FilterLG";
import { ListOfProducts } from "../../data/ListedData";
import { Button } from "../general/buttons";

const ProductList = () => {
  return (
    <div className="section !pt-2">
      <div className="lg:hidden flex justify-between items-center w-full">
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
        <div className=" lg:flex hidden cursor-pointer text-2xl uppercase font-Rubik font-semibold bg-white rounded-2xl py-4 px-7 gap-x-14 items-center justify-between">
          trending <ArrowDropDown sx={{ fontSize: "2rem" }} />
        </div>
      </div>

      <div className="flex w-full gap-x-5 mt-10">
        <div className="flex-[3] lg:flex hidden">
          <FilterLG />
        </div>

        <div className="flex-[7]">
          <div className="grid xl:grid-cols-3  lg:grid-cols-2 sm:grid-cols-2 gap-x-8 gap-y-16 grid-cols-2 ">
            {ListOfProducts.map((list) => (
              <div key={list.id} className="w-full h-full">
                <div className="bg-white p-3 rounded-3xl">
                  <div className="relative overflow-hidden">
                    <span className="absolute top-0 font-Rubik text-xl text-white bg-blue-600 py-3 px-5 rounded-tl-3xl rounded-br-3xl">
                      {list.type}
                    </span>
                    <img src={list.image} alt={list.name} loading="lazy" className="w-full hover:scale-[1.1] rounded-2xl h-full object-cover" />
                  </div>
                </div>
                <h3 className="font-Rubik my-7 text-3xl font-semibold text-gray-950 uppercase">{list.name}</h3>
                <Button name="view products -" price={list.price} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

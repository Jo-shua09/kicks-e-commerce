import React from "react";
import { HomeDrops } from "../../data/Data";

const Drops = () => {
  return (
    <div className="section">
      <div className="flex flex-col gap-y-10">
        <div className="flex justify-between items-end">
          <h2 className="sm:text-7xl text-4xl font-bold text-gray-950 uppercase font-Rubik w-1/2 sm:w-1/3">Don’t miss out new drops</h2>
          <button className="sm:text-2xl font-Rubik text-xl bg-blue-600 max-w-max text-white uppercase py-4 px-14 rounded-lg font-bold">
            shop new drops
          </button>
        </div>
        <div className="grid xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-16 grid-cols-2 ">
          {HomeDrops.map((drop) => (
            <div key={drop.id} className="w-full h-full">
              <div className="bg-white p-3 rounded-3xl">
                <div className="relative overflow-hidden">
                  <span className="absolute top-0 font-Rubik text-xl text-white bg-blue-600 py-3 px-5 rounded-tl-3xl rounded-br-3xl">new</span>
                  <img src={drop.image} alt={drop.name} className="w-full hover:scale-[1.1] rounded-2xl h-full object-cover" />
                </div>
              </div>
              <h3 className="font-Rubik my-7 text-3xl font-semibold text-gray-950 uppercase">{drop.name}</h3>
              <button className="sm:text-2xl w-full font-Rubik text-xl bg-gray-900 text-white uppercase py-4 px-14 rounded-lg font-semibold">
                view products - <span className="text-yellow-600">${drop.price}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drops;

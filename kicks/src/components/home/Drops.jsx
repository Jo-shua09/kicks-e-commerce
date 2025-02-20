import React from "react";
import { Button, Button2 } from "../general/buttons";
import { Link } from "react-router-dom";
import { ListOfProducts } from "../../data/allItems";

const Drops = ({ title }) => {
  return (
    // NEWLY DROPPED SECTION STARTS
    <div className="section">
      <div className="flex flex-col gap-y-10">
        <div className="flex justify-between items-end">
          <h2 className="sm:text-6xl text-4xl font-bold text-gray-950 uppercase font-Rubik w-1/2 sm:w-1/3">{title}</h2>

          <Link to="/">
            <Button2 name="shop new drops" />
          </Link>
        </div>
        <div className="grid xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-16 grid-cols-2 ">
          {ListOfProducts.slice(21, 25).map((list) => (
            <div key={list.id} className="w-full h-full">
              <div className="bg-white p-3 rounded-3xl">
                <div className="relative overflow-hidden">
                  <span className="absolute top-0 font-Rubik text-xl text-white bg-blue-600 py-3 px-5 rounded-tl-3xl rounded-br-3xl">new</span>
                  <Link to={`/product/${list.id}`}>
                    <img
                      src={list.image}
                      alt={list.name}
                      loading="lazy"
                      className="w-full hover:brightness-75 rounded-2xl h-[22rem] sm:h-[30rem] object-cover"
                    />
                  </Link>
                </div>
              </div>
              <h3 className="font-Rubik my-7 text-[1.5rem] sm:text-3xl font-semibold text-gray-950 uppercase">{list.name}</h3>
              <Link to={`/list/${list.id}`}>
                <Button name="view products -" price={list.price} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drops;

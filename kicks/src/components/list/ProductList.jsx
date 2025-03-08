import { KeyboardArrowDown, FilterListOutlined } from "@mui/icons-material";
import store from "./store";
import { Provider } from "react-redux";
import  { useState, useEffect, useRef } from "react";
import FilterLG from "./FilterLG";
import { Button } from "../general/buttons";
import FilterSM from "./FilterSM";
import { ListOfProducts } from "../../data/allItems";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const filterRef = useRef(null);

  const handleFilterClick = () => {
    setIsOpen(!isOpen);
  };

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

  return (
    <div className="section !pt-2 relative">
      <div ref={filterRef} className={`absolute z-10 pb-16 rounded-xl top-0 ${isOpen ? "flex" : "hidden"}`}>
        <FilterSM />
      </div>
      <div className="lg:hidden flex justify-between w-full h-full items-center relative">
        <div
          className="text-2xl uppercase cursor-pointer font-Rubik font-medium  bg-white rounded-2xl py-4 px-7 gap-x-14 flex items-center justify-between"
          onClick={handleFilterClick}
        >
          filter <FilterListOutlined sx={{ fontSize: "2rem" }} />
        </div>
        <div className="text-2xl uppercase cursor-pointer font-Rubik font-medium bg-white rounded-2xl py-4 px-7 gap-x-14 flex items-center justify-between">
          trending <KeyboardArrowDown sx={{ fontSize: "2rem" }} />
        </div>
      </div>

      <div className="flex items-center mt-10 justify-between w-full">
        <div className="product-info">
          <h2 className="text-5xl font-Rubik font-semibold">life style shoes</h2>
          <span className="text-xl font-medium">items</span>
        </div>
        <div className="lg:flex hidden cursor-pointer text-2xl uppercase font-Rubik font-semibold bg-white rounded-2xl py-4 px-7 gap-x-14 items-center justify-between">
          trending <KeyboardArrowDown sx={{ fontSize: "2rem" }} />
        </div>
      </div>

      <div className="flex w-full gap-x-5 mt-10">
        <div className="flex-[3] lg:flex hidden">
          <div className="">
            <h3 className="text-3xl font-bold mb-12">filters</h3>
            <Provider store={store}>
              <FilterLG />
            </Provider>
          </div>
        </div>

        <div className="flex-[7]">
          <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-16 grid-cols-2 ">
            {ListOfProducts.map((list) => (
              <div key={list.id} className="w-full flex flex-col flex-wrap  overflow-hidden h-full">
                <div className="bg-white p-3 rounded-3xl overflow-hidden">
                  <div className="relative overflow-hidden">
                    <span className="absolute top-0 font-Rubik text-xl text-white bg-blue-600 py-3 px-5 rounded-tl-3xl rounded-br-3xl">
                      {list.type}
                    </span>
                    <div className="overflow-hidden w-full h-full">
                      <Link to={`/product/${list.id}`}>
                        <img
                          src={list.image}
                          alt={list.name}
                          loading="lazy"
                          className="w-full overflow-hidden hover:brightness-75 rounded-3xl max-h-[20rem] sm:max-h-[25rem] object-cover"
                        />
                      </Link>
                    </div>
                  </div>
                </div>

                <h3 className="font-Rubik text-nowrap my-7 text-[1.5rem] sm:text-3xl font-semibold text-gray-950 uppercase">{list.name}</h3>
                <Link to={`/product/${list.id}`}>
                  <Button name="view products -" price={list.price} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

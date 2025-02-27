import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
import { Colors, Sizes } from "../../data/ProductData";
import { FavoriteOutlined } from "@mui/icons-material";
import { ListOfProducts } from "../../data/allItems";

const LgProductDesc = () => {
  const [activeColor, setActiveColor] = useState(null);
  const [activeSize, setActiveSize] = useState(null);
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handleColorClick = (color) => {
    setActiveColor(color);
  };

  const handleSizeClick = (size) => {
    setActiveSize(size);
  };

  return (
    <div className="section-two !pt-0 w-full h-full mb-24 relative">
      <div className="flex items-start flex-wrap justify-between gap-6">
        <div className="flex-[4]">
          {ListOfProducts.slice(0, 1).map((list) => (
            <div key={list.id}>
              <div className="">
                <img src={list.image} alt="product image" className="w-full h-[50rem] rounded-3xl shadow-xl object-cover" />
              </div>
              <div className=" absolute top-10 right-2/5 pl-4 pt-3 bottom-0">
                <div className="text-white w-fit uppercase font-Rubik font-semibold bg-blue-600 rounded-xl py-4 tracking-widest px-8 text-xl">
                  {list.type}
                </div>
                <h3 className="uppercase mt-5 text-3xl font-bold font-Rubik text-gray-900">{list.name}</h3>
                <div className="text-3xl lg:mt-4 mt-2 text-blue-600 font-bold font-Rubik">${list.price}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-[3] w-max mx-auto mr-10 h-full flex flex-col">
          <div className="flex flex-col gap-y-8 w-full">
            <div className="flex flex-col">
              <h5 className="text-xl lg:mb-2 mb-1 text-gray-900 font-Rubik font-semibold">colors</h5>
              <div className="flex items-center gap-x-4">
                {Colors.map((color) => (
                  <div
                    key={color.id}
                    className={`p-[.2rem] rounded-full transition-all duration-300 ${activeColor === color.id ? "border-2 border-gray-900" : ""}`}
                    onClick={() => handleColorClick(color.id)}
                  >
                    <div className={`text-white ${color.color} p-7 text-sm rounded-full normal-case font-bold font-Rubik cursor-pointer`}></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col">
              <h5 className="text-xl text-gray-900 mb-1 font-Rubik font-semibold">size</h5>
              <div className="flex items-center gap-x-4">
                {Sizes.map((size) => (
                  <div
                    key={size.id}
                    className={`text-gray-900 py-4 px-5 text-xl normal-case font-bold font-Rubik cursor-pointer rounded-xl transition-all duration-300 ${
                      activeSize === size.id ? "bg-black/90 text-white" : "bg-white"
                    }`}
                    onClick={() => handleSizeClick(size.id)}
                  >
                    {size.size}
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="flex flex-wrap gap-y-5 mt-4 lg:mt-10 h-full">
            <div className="flex items-center w-full gap-x-3">
              <input
                type="submit"
                value="add to cart"
                className="w-full h-[4.5rem] bg-black/85 rounded-2xl text-xl lg:flex-[7] flex-[5] cursor-pointer text-white font-semibold uppercase font-Rubik"
              />
              <div className="w-full cursor-pointer h-[4.5rem] lg:flex-1 flex-[1.2] flex items-center bg-black/85 rounded-2xl text-white font-semibold uppercase font-Rubik">
                <FavoriteOutlined sx={{ fontSize: "2.5rem" }} className="mx-auto" />
              </div>
            </div>
            <input
              type="submit"
              value="buy it now"
              className="w-full h-[4.5rem] bg-blue-600 rounded-2xl text-xl flex-[7] cursor-pointer text-white font-semibold uppercase font-Rubik"
            />
          </div>
          
          <div className="lg:mt-10 mt-5">
            <h4 className="text-2xl lg:mb-4 mb-2 font-semibold font-Rubik uppercase">about the product</h4>
            <p className="text-gray-600 lg:mb-4 mb-2 text-xl">shadow navy - army green</p>
            <div className="text-gray-600">
              <p className="text-[1.5rem] normal-case">This product is excluded from all promotional discounts and offers.</p>
              <ul className="pl-[4rem]">
                <li className="list-disc text-xl pb-1 normal-case"> Pay over time in interest-free installments with Affirm, Klarna or Afterpay.</li>
                <li className="list-disc text-xl pb-1 normal-case"> Join adiClub to get unlimited free standard shipping, returns, & exchanges.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LgProductDesc;

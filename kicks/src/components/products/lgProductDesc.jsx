import React, { useState } from "react";
import { HeartBroken } from "@mui/icons-material";
import { Colors, Sizes, ProductImages } from "../../data/ProductData";

const LgProductDesc = () => {
  const [activeColor, setActiveColor] = useState(null);
  const [activeSize, setActiveSize] = useState(null);

  const handleColorClick = (color) => {
    setActiveColor(color);
  };

  const handleSizeClick = (size) => {
    setActiveSize(size);
  };

  return (
    <div className="section-two w-full h-full mb-24">
      <div className="flex items-start flex-wrap justify-between gap-6">
        <div className="flex-[4] grid grid-cols-2 object-cover gap-4 w-1/2 h-full">
          {ProductImages.map((image) => (
            <div key={image.id}>
              <img src={image.image} alt="product image" className="w-full lg:h-[40rem] h-full object-cover" />
            </div>
          ))}
        </div>

        <div className="flex-[2] w-full h-full flex flex-col">
          <div className="text-white w-fit uppercase font-Rubik font-semibold bg-blue-600 rounded-xl py-4 tracking-widest px-8 text-xl">
            new releases
          </div>
          <h3 className="uppercase mt-10 text-3xl font-bold font-Rubik text-gray-900">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h3>
          <div className="text-3xl lg:mt-4 mt-2 lg:mb-10 mb-5 text-blue-600 font-bold font-Rubik">$123</div>

          <div className="flex items-center gap-20 w-full">
            <div className="flex flex-col">
              <h5 className="text-xl lg:mb-2 mb-1 text-gray-900 font-Rubik font-semibold">colors</h5>
              <div className="flex items-center justify-between gap-x-4">
                {Colors.map((color) => (
                  <div
                    key={color.id}
                    className={`p-[.2rem] rounded-full transition-all duration-300 ${activeColor === color.id ? "border-2 border-gray-900" : ""}`}
                    onClick={() => handleColorClick(color.id)}
                  >
                    <div className={`text-white ${color.color} p-5 text-sm rounded-full normal-case font-bold font-Rubik cursor-pointer`}></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col">
              <h5 className="text-xl text-gray-900 mb-1 font-Rubik font-semibold">size</h5>
              <div className="flex items-center justify-between gap-x-4">
                {Sizes.map((size) => (
                  <div
                    key={size.id}
                    className={`p-[.1rem] rounded-xl transition-all duration-300 ${activeSize === size.id ? "bg-black/90" : ""}`}
                    onClick={() => handleSizeClick(size.id)}
                  >
                    <div className="text-gray-900 bg-white py-2 px-3 text-xl rounded-xl normal-case font-bold font-Rubik cursor-pointer">
                      {size.size}
                    </div>
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
                <HeartBroken sx={{ fontSize: "2.5rem" }} className="mx-auto" />
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

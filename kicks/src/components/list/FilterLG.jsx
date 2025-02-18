import { ArrowDropDown } from "@mui/icons-material";
import React, { useState } from "react";
import { Colors, Sizes } from "../../data/ListedData";
import LimitTags from "./type";

const FilterLG = () => {
  const [activeColor, setActiveColor] = useState(null);
  const [activeSize, setActiveSize] = useState(null);
  const [isOpenRefine, setIsOpenRefine] = useState(false);
  const [isRotatedRefine, setIsRotatedRefine] = useState(false);
  const [isOpenSize, setIsOpenSize] = useState(false);
  const [isRotatedSize, setIsRotatedSize] = useState(false);
  const [isOpenColor, setIsOpenColor] = useState(false);
  const [isRotatedColor, setIsRotatedColor] = useState(false);
  const [isOpenType, setIsOpenType] = useState(false);
  const [isRotatedType, setIsRotatedType] = useState(false);
  const [isOpenGender, setIsOpenGender] = useState(false);
  const [isRotatedGender, setIsRotatedGender] = useState(false);
  const [isOpenPrice, setIsOpenPrice] = useState(false);
  const [isRotatedPrice, setIsRotatedPrice] = useState(false);
  const [gender, setGender] = useState(null);
  const [price, setPrice] = useState(0);

  const handleColorClick = (color) => {
    setActiveColor(color);
  };

  const handleSizeClick = (size) => {
    setActiveSize(size);
  };

  const filterOpenRefine = () => {
    setIsOpenRefine(!isOpenRefine);
    setIsRotatedRefine(!isRotatedRefine);
  };

  const filterOpenSize = () => {
    setIsOpenSize(!isOpenSize);
    setIsRotatedSize(!isRotatedSize);
  };

  const filterOpenColor = () => {
    setIsOpenColor(!isOpenColor);
    setIsRotatedColor(!isRotatedColor);
  };

  const filterOpenType = () => {
    setIsOpenType(!isOpenType);
    setIsRotatedType(!isRotatedType);
  };

  const filterOpenGender = () => {
    setIsOpenGender(!isOpenGender);
    setIsRotatedGender(!isRotatedGender);
  };

  const filterOpenPrice = () => {
    setIsOpenPrice(!isOpenPrice);
    setIsRotatedPrice(!isRotatedPrice);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.id);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="">
        <h3 className="text-3xl font-bold mb-12">filters</h3>

        <div className="w-full">
          <div className="flex justify-between gap-x-96 mb-5">
            <span className="text-xl uppercase font-Rubik font-bold">refine by</span>
            <ArrowDropDown
              sx={{
                fontSize: "2rem",
                cursor: "pointer",
                transform: isRotatedRefine ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease-in-out",
              }}
              onClick={filterOpenRefine}
            />
          </div>
          <div className={`gap-x-6 items-center transition-all duration-300 ${isOpenRefine ? "hidden" : "flex"}`}>
            <div className="py-3 px-7 text-center flex cursor-pointer hover:scale-90 text-xl font-Rubik bg-blue-600 text-white rounded-2xl">
              outing
            </div>
            <div className="py-3 px-7 text-center flex cursor-pointer hover:scale-90 text-xl font-Rubik bg-blue-600 text-white rounded-2xl">
              casual
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex justify-between gap-x-96 my-10 mb-5">
          <span className="text-xl uppercase font-Rubik font-bold">size</span>
          <ArrowDropDown
            sx={{
              fontSize: "2rem",
              cursor: "pointer",
              transform: isRotatedSize ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease-in-out",
            }}
            onClick={filterOpenSize}
          />
        </div>
        <div className={`gap-5 flex-wrap items-center transition-all duration-300 ${isOpenSize ? "hidden" : "flex"}`}>
          {Sizes.map((size) => (
            <div key={size.id} className="transition-all duration-300">
              <div
                className={`py-4 px-5  text-gray-900  text-2xl bg-white normal-case font-bold font-Rubik cursor-pointer rounded-xl ${
                  activeSize === size.id ? "!bg-black !text-white" : "bg-white text-gray-900"
                }`}
                onClick={() => handleSizeClick(size.id)}
              >
                {size.size}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        <div className="flex justify-between gap-x-96 my-10 mb-5">
          <span className="text-xl uppercase font-Rubik font-bold">Color</span>
          <ArrowDropDown
            sx={{
              fontSize: "2rem",
              cursor: "pointer",
              transform: isRotatedColor ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease-in-out",
            }}
            onClick={filterOpenColor}
          />
        </div>
        <div className={`flex gap-5 flex-wrap items-center ${isOpenColor ? "hidden" : "flex"}`}>
          {Colors.map((color) => (
            <div
              key={color.id}
              className={`p-[.1rem] rounded-xl transition-all duration-300 ${activeColor === color.id ? "border-2 border-gray-900" : ""}`}
              onClick={() => handleColorClick(color.id)}
            >
              <div className={`py-7 px-8 cursor-pointer rounded-xl ${color.color}`}></div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        <div className="flex justify-between gap-x-96 my-10 mb-5">
          <span className="text-xl uppercase font-Rubik font-bold">type</span>
          <ArrowDropDown
            sx={{
              fontSize: "2rem",
              cursor: "pointer",
              transform: isRotatedType ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease-in-out",
            }}
            onClick={filterOpenType}
          />
        </div>
        <div className={`flex flex-col gap-y-5 ${isOpenType ? "hidden" : "flex"}`}>
          <LimitTags />
        </div>
      </div>

      <div className="w-full">
        <div className="flex justify-between gap-x-96 my-10 mb-5">
          <span className="text-xl uppercase font-Rubik font-bold">gender</span>
          <ArrowDropDown
            sx={{
              fontSize: "2rem",
              cursor: "pointer",
              transform: isRotatedGender ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease-in-out",
            }}
            onClick={filterOpenGender}
          />
        </div>
        <div className={`flex flex-col gap-y-5 ${isOpenGender ? "hidden" : "flex"}`}>
          <div className="flex items-center gap-x-4">
            <input type="radio" name="gender" id="male" checked={gender === "male"} onChange={handleGenderChange} />
            <label className="text-xl font-normal font-Rubik" htmlFor="male">
              male
            </label>
          </div>
          <div className="flex items-center gap-x-4">
            <input type="radio" name="gender" id="female" checked={gender === "female"} onChange={handleGenderChange} />
            <label className="text-xl font-normal font-Rubik" htmlFor="female">
              female
            </label>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex justify-between gap-x-96 my-10 mb-5">
          <span className="text-xl uppercase font-Rubik font-bold">price range</span>
          <ArrowDropDown
            sx={{
              fontSize: "2rem",
              cursor: "pointer",
              transform: isRotatedPrice ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease-in-out",
            }}
            onClick={filterOpenPrice}
          />
        </div>
        <div className={`flex ${isOpenPrice ? "hidden" : "flex"}`}>
          <input
            type="range"
            name="price"
            id="price"
            min="0"
            max="500"
            value={price}
            onChange={handlePriceChange}
            className="w-full h-[2rem] !bg-black cursor-pointer"
          />
          <span className="text-xl font-semibold font-Rubik">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterLG;

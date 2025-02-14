import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { images } from "../../data/ProductData";
import { HeartBroken } from "@mui/icons-material";

const smProductDesc = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [activeColor, setActiveColor] = useState(null);

  const handleColorClick = (color) => {
    setActiveColor(color);
  };

  const [activeSize, setActiveSize] = useState(null);

  const handleSizeClick = (size) => {
    setActiveSize(size);
  };

  return (
    <div className="section-two mb-16">
      <Swiper spaceBetween={10} navigation={false} thumbs={{ swiper: thumbsSwiper }} modules={[FreeMode, Navigation, Thumbs]} className="mySwiper2">
        <div className="mb-10">
          <SwiperSlide>
            <img src={images.idThree} alt="product image" className="w-full h-full rounded-none shadow-[1px_1px_10px_rgba(0,0,0.7)] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.idFour} alt="product image" className="w-full h-full rounded-none shadow-[1px_1px_10px_rgba(0,0,0.7)] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.idOne} alt="product image" className="w-full h-full rounded-none shadow-[1px_1px_10px_rgba(0,0,0.7)] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.idTwo} alt="product image" className="w-full h-full rounded-none shadow-[1px_1px_10px_rgba(0,0,0.7)] object-cover" />
          </SwiperSlide>
        </div>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={2.2}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <div className="flex justify-between w-full gap-x-5">
          <SwiperSlide>
            <img
              src={images.idOne}
              alt="product image"
              className="w-full mt-10 border border-gray-900  h-[20rem] shadow-[1px_1px_5px_rgba(0,0,0.7) rounded-none object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={images.idTwo}
              alt="product image"
              className="w-full mt-10 border border-gray-900 h-[20rem] shadow-[1px_1px_5px_rgba(0,0,0.7) rounded-none object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={images.idThree}
              alt="product image"
              className="w-full mt-10 border border-gray-900 h-[20rem] shadow-[1px_1px_5px_rgba(0,0,0.7) rounded-none object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={images.idFour}
              alt="product image"
              className="w-full mt-10 border border-gray-900 h-[20rem] shadow-[1px_1px_5px_rgba(0,0,0.7) rounded-none object-cover"
            />
          </SwiperSlide>
        </div>
      </Swiper>

      <div className="flex-[2] w-full mt-10 h-full flex flex-col">
        <div className="text-white w-fit uppercase font-Rubik font-semibold bg-blue-600 rounded-xl py-4 tracking-widest px-8 text-xl">
          new releases
        </div>
        <h3 className="uppercase mt-10 text-3xl font-bold font-Rubik text-gray-900">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h3>
        <div className="text-3xl lg:mt-4 mt-2 lg:mb-10 mb-5 text-blue-600 font-bold font-Rubik">$123</div>

        <div className="flex items-center gap-20 w-full">
          <div className="flex flex-col">
            <h5 className="text-xl lg:mb-2 mb-1 text-gray-900 font-Rubik font-semibold">colors</h5>
            <div className="flex items-center justify-between gap-x-4">
              <div
                className={`p-[.2rem] rounded-full transition-all duration-300 ${activeColor === "gray" ? "border-2 border-gray-900" : ""}`}
                onClick={() => handleColorClick("gray")}
              >
                <div className="text-white bg-gray-700 p-5 text-sm rounded-full normal-case font-bold font-Rubik cursor-pointer"></div>
              </div>
              <div
                className={`p-[.2rem] rounded-full transition-all duration-300 ${activeColor === "green" ? "border-2 border-gray-900" : ""} `}
                onClick={() => handleColorClick("green")}
              >
                <div className="text-white bg-green-700 p-5 text-sm rounded-full normal-case font-bold font-Rubik cursor-pointer "></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h5 className="text-xl text-gray-900 mb-1 font-Rubik font-semibold">size</h5>
            <div className="flex items-center justify-between gap-x-4">
              <div
                className={`p-[.1rem] rounded-xl transition-all duration-300 ${activeSize === "normal" ? "bg-black/90" : ""}`}
                onClick={() => handleSizeClick("normal")}
              >
                <div className="text-gray-900 bg-white py-2 px-3 text-xl rounded-xl normal-case font-bold font-Rubik cursor-pointer">40</div>
              </div>
              <div
                className={`p-[.1rem] rounded-xl transition-all duration-300 ${activeSize === "large" ? "bg-black/90" : ""}`}
                onClick={() => handleSizeClick("large")}
              >
                <div className="text-gray-900 bg-white py-2 px-3 text-xl rounded-xl normal-case font-bold font-Rubik cursor-pointer">41</div>
              </div>
              <div
                className={`p-[.1rem] rounded-xl transition-all duration-300 ${activeSize === "extra-large" ? "bg-black/90" : ""}`}
                onClick={() => handleSizeClick("extra-large")}
              >
                <div className="text-gray-900 bg-white py-2 px-3 text-xl rounded-xl normal-case font-bold font-Rubik cursor-pointer">42</div>
              </div>
              <div
                className={`p-[.1rem] rounded-xl transition-all duration-300 ${activeSize === "extra-extra-large" ? "bg-black/90" : ""}`}
                onClick={() => handleSizeClick("extra-extra-large")}
              >
                <div className="text-gray-900 bg-white py-2 px-3 text-xl rounded-xl normal-case font-bold font-Rubik cursor-pointer">43</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-y-5 mt-4 lg:mt-10   h-full">
          <div className="flex items-center w-full gap-x-3">
            <input
              type="submit"
              value="add to cart"
              className="w-full h-[4.5rem] bg-black/85 rounded-2xl text-xl lg:flex-[7] flex-[5] cursor-pointer text-white font-semibold uppercase font-Rubik"
            />
            <div className="w-full h-[4.5rem] lg:flex-1 flex-[1.2] flex items-center bg-black/85 rounded-2xl text-white font-semibold uppercase font-Rubik">
              <HeartBroken sx={{ fontSize: "2.5rem" }} className="mx-auto" />
            </div>
          </div>
          <input
            type="submit"
            value="buy it now"
            className="w-full h-[4.5rem] bg-blue-600 rounded-2xl text-xl flex-[7] cursor-pointer text-white font-semibold uppercase font-Rubik"
          />
        </div>
        <div className=" lg:mt-10 mt-5">
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
  );
};

export default smProductDesc;

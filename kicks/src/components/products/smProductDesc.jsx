import  { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Colors, Sizes } from "../../data/ProductData";
import { Favorite } from "@mui/icons-material";
import { ListOfProducts } from "../../data/allItems";

const smProductDesc = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeColor, setActiveColor] = useState(null);
  const [activeSize, setActiveSize] = useState(null);

  const handleColorClick = (color) => {
    setActiveColor(color);
  };

  const handleSizeClick = (size) => {
    setActiveSize(size);
  };

  return (
    <div className="section-two mb-10">
      <Swiper spaceBetween={10} navigation={false} thumbs={{ swiper: thumbsSwiper }} modules={[FreeMode, Navigation, Thumbs]} className="mySwiper2">
        {ListOfProducts.map((list) => (
          <SwiperSlide key={list.id}>
            <div className="relative w-full h-full">
              <div className="rounded-3xl">
                <img src={list.image} alt="product image" className=" w-full h-[45rem] shadow-2xl rounded-3xl border border-gray-50  object-cover" />
              </div>
              <div className="absolute top-0 pl-3 pt-3">
                <div className="text-white w-fit uppercase font-Rubik font-semibold bg-blue-600 rounded-xl py-4 tracking-widest px-8 text-xl">
                  {list.type}
                </div>
                <h3 className="uppercase mt-6 text-3xl font-bold font-Rubik text-gray-900">{list.name}</h3>
                <div className="text-3xl lg:mt-4 mt-4 lg:mb-10 mb-10 text-blue-600 font-bold font-Rubik">${list.price}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={2.2}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {ListOfProducts.map((list) => (
          <SwiperSlide key={list.id}>
            <div className="flex justify-around w-full rounded-3xl gap-x-5 h-max">
              <img src={list.image} alt="product image" className="w-full mt-10 h-[20rem] border border-gray-50 rounded-3xl object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex-[2] mt-16 w-full h-full flex flex-col">
        <div className="flex flex-col mb-12 gap-y-12 w-full">
          <div className="flex flex-col">
            <h5 className="text-2xl lg:mb-2 mb-3 text-gray-900 font-Rubik font-semibold">colors</h5>
            <div className="flex items-center gap-x-4">
              {Colors.map((color) => (
                <div
                  key={color.id}
                  className={`p-[.2rem] rounded-full transition-all duration-300 ${activeColor === color.id ? "border-2 border-gray-900" : ""}`}
                  onClick={() => handleColorClick(color.id)}
                >
                  <div className={`text-white ${color.color} sm:p-5 p-8 text-sm rounded-full normal-case font-bold font-Rubik cursor-pointer`}></div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h5 className="text-2xl text-gray-900 mb-3 font-Rubik font-semibold">size</h5>
            <div className="flex items-center gap-x-4">
              {Sizes.map((size) => (
                <div
                  key={size.id}
                  className={`text-gray-900 py-5 px-6 text-xl normal-case font-bold font-Rubik cursor-pointer rounded-xl transition-all duration-300 ${
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
              className="w-full h-[5.5rem] bg-black/85 rounded-2xl text-xl lg:flex-[7] flex-[5] cursor-pointer text-white font-semibold uppercase font-Rubik"
            />
            <div className="w-full cursor-pointer h-[5.5rem] lg:flex-1 flex-[1.2] flex items-center bg-black/85 rounded-2xl text-white font-semibold uppercase font-Rubik">
              <Favorite sx={{ fontSize: "2.5rem" }} className="mx-auto" />
            </div>
          </div>
          <input
            type="submit"
            value="buy it now"
            className="w-full h-[5.5rem] bg-blue-600 rounded-2xl text-xl flex-[7] cursor-pointer text-white font-semibold uppercase font-Rubik"
          />
        </div>

        <div className="lg:mt-10 mt-14">
          <h4 className="text-3xl lg:mb-4 mb-6 font-semibold font-Rubik uppercase">about the product</h4>
          <p className="text-gray-600 lg:mb-4 mb-6 text-2xl">shadow navy - army green</p>
          <div className="text-gray-600">
            <p className="text-[1.9rem] pb-2 normal-case">This product is excluded from all promotional discounts and offers.</p>
            <ul className="pl-[4rem] text-3xl">
              <li className="list-disc pb-2 normal-case"> Pay over time in interest-free installments with Affirm, Klarna or Afterpay.</li>
              <li className="list-disc pb-2 normal-case"> Join adiClub to get unlimited free standard shipping, returns, & exchanges.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default smProductDesc;

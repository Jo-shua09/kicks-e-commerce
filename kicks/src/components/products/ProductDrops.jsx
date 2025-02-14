import React from "react";
import { ProductDrop } from "../../data/ProductData";
import { Button } from "../general/buttons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

const ProductDrops = ({ title }) => {
  return (
    <div className="section relative">
      <div className="flex flex-col gap-y-10">
        <div className="flex justify-between items-end">
          <h2 className="sm:text-6xl text-4xl font-bold text-gray-950 uppercase font-Rubik">{title}</h2>
          {/* Custom Navigation Buttons */}
          <div className="flex items-center gap-4">
            <button id="prev-button" className="bg-gray-800 p-1 text-white rounded-xl">
              <ArrowLeft sx={{ fontSize: "3rem" }} />
            </button>
            <button id="next-button" className="bg-gray-800 p-1 text-white rounded-xl">
              <ArrowRight sx={{ fontSize: "3rem" }} />
            </button>
          </div>
        </div>
        <Swiper
          direction={"vertical"}
          pagination={{
            // clickable: true,
            el: ".swiper-pagination",
            type: "progressbar",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper h-[85rem] sm:h-[800px] md:h-[750px] lg:h-[700px] xl:h-[600px]"
          slidesPerView={1}
          navigation={{
            nextEl: "#next-button",
            prevEl: "#prev-button",
          }}
        >
          {[...Array(2)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-16 grid-cols-2">
                {ProductDrop.map((drop) => (
                  <div key={drop.id} className="w-full h-full">
                    <div className="bg-white p-3 rounded-3xl">
                      <div className="relative overflow-hidden">
                        <span className="absolute top-0 font-Rubik text-xl text-white bg-blue-600 py-3 px-5 rounded-tl-3xl rounded-br-3xl">new</span>
                        <img src={drop.image} alt={drop.name} loading="lazy" className="w-full hover:scale-[1.1] rounded-2xl h-full object-cover" />
                      </div>
                    </div>
                    <h3 className="font-Rubik my-7 text-3xl font-semibold text-gray-950 uppercase">{drop.name}</h3>
                    <Button name="view products -" price={drop.price} />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination !bg-black/85"></div>
      </div>
    </div>
  );
};

export default ProductDrops;

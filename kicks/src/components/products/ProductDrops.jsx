import React from "react";
import { Button } from "../general/buttons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { ListOfProducts } from "../../data/allItems";
import { Link } from "react-router-dom";

const ProductDrops = ({ title }) => {
  return (
    <div className="section relative !pb-0 w-full h-full">
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
            clickable: true,
            el: ".swiper-pagination",
            type: "progressbar",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper h-[73rem] sm:h-[800px] md:h-[800px] lg:h-[450px] xl:h-[450px]"
          slidesPerView={1}
          thumbs={{ thumbs: false }}
          navigation={{
            nextEl: "#next-button",
            prevEl: "#prev-button",
          }}
          allowTouchMove={false}
          draggable={false}
          touchReleaseOnEdges={false}
        >
          <SwiperSlide>
            <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3  sm:grid-cols-2 gap-x-8 gap-y-16 grid-cols-2">
              {ListOfProducts.slice(9, 13).map((list) => (
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
                  <Link to={`/product/${list.id}`}>
                    <Button name="view products -" price={list.price} />
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3  sm:grid-cols-2 gap-x-8 gap-y-16 grid-cols-2">
              {ListOfProducts.slice(6, 10).map((list) => (
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
                  <Link to={`/product/${list.id}`}>
                    <Button name="view products -" price={list.price} />
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination !bg-black/85"></div>
      </div>
    </div>
  );
};

export default ProductDrops;

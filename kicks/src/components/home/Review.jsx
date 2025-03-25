import React from "react";
import { Reviews, images } from "../../data/HomeData";
import { Button2 } from "../general/buttons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Star } from "@mui/icons-material";

const Review = () => {
  return (
    <div className="section-two">
      <div className="flex flex-col gap-y-10">
        <div className="flex justify-between items-end">
          <h1 className="sm:text-7xl text-6xl uppercase font-Rubik font-bold">
            reviews
          </h1>
          <Button2 name="see all" />
        </div>
        <div className="mt-10 relative">
          <div className="absolute left-0 hidden sm:flex mx-auto top-1/3 mt-6">
            {[...Array(10)].map((_, index) => (
              <img
                key={index}
                src={images.LogoDark}
                alt="logo image"
                className="w-full h-full rotate-45"
              />
            ))}
          </div>
          <div className="absolute hidden sm:flex right-0 left-0 m-auto top-2/3 mt-6">
            {[...Array(10)].map((_, index) => (
              <img
                key={index}
                src={images.LogoDark}
                alt="logo image"
                className="w-full h-full -rotate-45"
              />
            ))}
          </div>
          <div className="absolute hidden sm:flex right-0 mt-6">
            {[...Array(10)].map((_, index) => (
              <img
                key={index}
                src={images.LogoDark}
                alt="logo image"
                className="w-full h-full -rotate-45"
              />
            ))}
          </div>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            cardsEffect={{ slideShadows: false }}
            className="mySwiper"
          >
            {Reviews.map((data) => (
              <SwiperSlide key={data.id}>
                <div className="overflow-hidden bg-white rounded-3xl w-[90%] sm:w-max mx-auto">
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col w-[72%]">
                        <h4 className="text-3xl font-semibold font-Rubik">
                          {data.name}
                        </h4>
                        <p className="text-2xl font-normal normal-case">
                          {data.review}
                        </p>
                      </div>
                      <div className="">
                        <img
                          src={data.person}
                          alt="review person"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          sx={{ fontSize: "1.8rem" }}
                          className={
                            index < data.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                  </div>
                  <div className="">
                    <img
                      src={data.image}
                      alt="review image"
                      className="w-full rounded-b-3xl h-full object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;

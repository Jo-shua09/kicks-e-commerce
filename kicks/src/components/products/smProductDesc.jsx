import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { images } from "../../data/ProductData";

const smProductDesc = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
        spaceBetween={10}
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
    </div>
  );
};

export default smProductDesc;

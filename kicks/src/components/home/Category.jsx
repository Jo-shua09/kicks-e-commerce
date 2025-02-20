import { ArrowForward } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { ListOfProducts } from "../../data/allItems";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="w-full h-full bg-black/85 section-two text-white">
      <div className="px-[2.2%] flex flex-col gap-y-10 py-16 ">
        <div className="flex items-center justify-between w-full">
          <h1 className="sm:text-7xl text-6xl uppercase font-Rubik font-bold">categories</h1>
        </div>
        <div className="mt-1 ">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={false}
            breakpoints={{
              450: {
                slidesPerView: 1.2,
              },
              640: {
                slidesPerView: 1.8,
              },
              768: {
                slidesPerView: 2.5,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
              loop: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {ListOfProducts.slice(5, 10).map((list) => (
              <div className=" relative rounded-3xl" key={list.id}>
                <SwiperSlide>
                  <div className="w-full rounded-3xl p-6 pb-16 ">
                    <div className="w-full h-full rounded-3xl p-3">
                      <img src={list.image} alt="category image" className="rounded-3xl w-full h-[50rem] object-cover" />
                    </div>
                    <div className="flex items-center justify-between absolute bottom-24 left-0 px-14 right-0 mx-auto">
                      <h3 className="text-4xl font-bold font-Rubik uppercase text-gray-950">{list.name}</h3>
                      <div className="bg-black/90 text-white cursor-pointer rounded-xl p-3">
                        <Link to={`/product/${list.id}`}>
                          <ArrowForward sx={{ fontSize: "2rem", rotate: "-45deg", fontWeight: "bolder" }} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
      <style jsx>{`
        .swiper-pagination-bullet {
          background-color: white;
          width: 10px;
          height: 10px;
        }
        .swiper-pagination {
          bottom: -1px !important;
        }
      `}</style>
    </div>
  );
};

export default Category;

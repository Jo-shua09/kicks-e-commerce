// Import necessary components and assets
import { Button2 } from "../general/buttons";
import { Link } from "react-router-dom";
import { images } from "../../data/HomeData";

// Hero component for the landing page
const Hero = () => {
  return (
    // Main hero section container
    <div className="w-full h-full">
      <div className="">
        {/* Hero headline text */}
        <div className=" text-center">
          <h1
            data-aos="fade-right"
            className="-mt-5 sm:-mt-16 sm:text-[10rem] text-[7rem] sm:leading-none leading-[6rem] py-5 uppercase font-bold font-Rubik lg:text-[16rem] xl:text-[20rem]"
          >
            do it <span className="uppercase text-blue-600 ">right</span>
          </h1>
        </div>
        {/* Main hero section */}
        <div className="w-full  h-full section sm:-mt-10">
          <div
            data-aos="zoom-in-up"
            className="relative w-full h-full overflow-hidden rounded-[5rem]"
          >
            <img
              src={images.Hero}
              loading="lazy"
              alt="Hero Image"
              className="w-full overflow-hidden sm:h-[65rem] lg:h-full h-[57rem] object-cover rounded-[5rem]"
            />
            <h3 className="absolute normal-case font-medium bg-gray-950 rounded-t-2xl text-white p-5 sm:px-10 px-5 items-center flex text-base top-1/4  -left-20 sm:-left-24  rotate-90">
              Nike product of the year
            </h3>
            <div className="flex items-end justify-between absolute bottom-10 sm:bottom-20 sm:px-16 px-8 lg:px-20 w-full right-0 left-0">
              <div
                data-aos="fade-up-left"
                className="flex flex-col items-start gap-y-3 sm:w-1/2 w-3/6 lg:w-1/3"
              >
                <h2 className="md:text-7xl sm:text-6xl text-5xl text-nowrap font-bold text-white uppercase font-Rubik">
                  NIKE AIR MAX
                </h2>
                <p className="sm:text-3xl text-2xl font-medium pb-5 text-gray-50 normal-case">
                  Nike introducing the new air max for everyone&apos;s comfort
                </p>
                <Link to="/shop">
                  <Button2 name="shop now" />
                </Link>
              </div>

              <div
                data-aos="fade-up-right"
                className="flex flex-col items-center gap-y-5"
              >
                <img
                  src={images.SubHero1}
                  loading="lazy"
                  alt="sub hero image"
                  className="w-full lg:h-full rounded-[2rem] sm:h-[15rem] h-[12rem] object-cover"
                />
                <img
                  src={images.SubHero2}
                  loading="lazy"
                  alt="sub hero image"
                  className="w-full lg:h-full rounded-[2rem] sm:h-[15rem] h-[12rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import { images } from "../../data/ListedData";

const ProductHero = () => {
  return (
    <div className="section-two">
      <div className="relative">
        <img src={images.Hero} alt="product hero image" className="w-full h-full object-cover" />
        <div className=" lg:w-1/4 sm:w-1/2 w-1/2">
          <h4 className="text-2xl text-gray-300 font-medium normal-case mb-4">Limited time only</h4>
          <h2 className="text-6xl text-white font-Rubik font-bold mb-4">get 30% off</h2>
          <p className="text-xl text-gray-300 font-normal normal-case">
            Sneakers made with your comfort in mind so you can put all of your focus into your next session.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;

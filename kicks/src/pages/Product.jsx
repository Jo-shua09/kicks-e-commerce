import React from "react";
import Navbar from "./../components/general/Navbar";
import Footer from "./../components/general/Footer";
import SmProductDesc from "./../components/products/smProductDesc";
import LgProductDesc from "./../components/products/lgProductDesc";
import ProductDrops from "../components/products/ProductDrops";

const Product = () => {
  return (
    <div className="max-w-[200rem] w-full mx-auto">
      <div className="">
        <Navbar />
      </div>
      <div className="max-w-[140rem] w-full mx-auto">
        <div className="">
          <div className="sm:block hidden">
            <LgProductDesc />
          </div>
          <div className="sm:hidden block">
            <SmProductDesc />
          </div>
        </div>
        <div className="">
          <ProductDrops title="you may also like" />
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Product;

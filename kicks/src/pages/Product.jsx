import React, { useState, useEffect } from "react";
import Navbar from "./../components/general/Navbar";
import Footer from "./../components/general/Footer";
import SmProductDesc from "./../components/products/smProductDesc";
import LgProductDesc from "./../components/products/lgProductDesc";
import ProductDrops from "../components/products/ProductDrops";
import Loader from "../components/loader/Loader";

const Product = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="max-w-[200rem] w-full mx-auto">
      {loading && <Loader onComplete={() => setLoading(false)} />}
      {!loading && (
        <div className="">
          <div className="">
            <Navbar />
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
        </div>
      )}
    </div>
  );
};

export default Product;

import React from "react";
import Navbar from "../components/general/Navbar";
import Drops from "../components/home/Drops";
import Category from "../components/home/Category";
import Footer from "../components/general/Footer";

const Cart = () => {
  return (
    <div className="max-w-[200rem] w-full mx-auto">
      <div className="">
        <div className="">
          <Navbar />
        </div>
        <div className="max-w-[140rem] w-full mx-auto">
          <div className="">
            <Drops title="Don’t miss out new drops" />
          </div>
          <div className="">
            <Category />
            {/* <Category /> */}
          </div>
          <div className="">
            <Review />
          </div>
          <div className="">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React from "react";
import Navbar from "../components/general/Navbar";
import Footer from "../components/general/Footer";
import ProductDrops from "../components/products/ProductDrops";
import CartItems from "../cart/CartItems";

const Cart = () => {
  return (
    <div className="max-w-[200rem] w-full mx-auto">
      <div className="">
        <div className="">
          <Navbar />
        </div>
        <div className="max-w-[140rem] w-full mx-auto">
          <div className="">
            <CartItems />
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
  );
};

export default Cart;

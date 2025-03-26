import Navbar from "../components/general/Navbar";
import Footer from "../components/general/Footer";
import ProductDrops from "../components/products/ProductDrops";
import CartBoard from "../components/cart/CartBoard";
import CartItems from "../components/cart/CartItems";
import React, { useState, useEffect } from "react";
import Loader from "../components/loader/Loader";

const Cart = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="max-w-[200rem] w-full mx-auto">
      {loading && <Loader onComplete={() => setLoading(false)} />}
      {!loading && (
        <div className="">
          <div className="">
            <Navbar />
          </div>
          <div className="max-w-[140rem] w-full mx-auto">
            <div className="">
              <CartBoard />
            </div>
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
      )}
    </div>
  );
};

export default Cart;

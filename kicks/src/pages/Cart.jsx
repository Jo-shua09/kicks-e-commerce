import Navbar from "../components/general/Navbar";
import Footer from "../components/general/Footer";
import ProductDrops from "../components/products/ProductDrops";
import CartBoard from "../components/cart/CartBoard";
import CartItems from "../components/cart/CartItems";
import React, { useState, useEffect } from "react";
import Loader from "../components/loader/Loader";

const Cart = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Function to check if all content is loaded
    const checkContentLoaded = async () => {
      try {
        // Wait for all components to load
        await Promise.all([
          new Promise((resolve) => setTimeout(resolve, 1000)), // Minimum loader display time
          // Add more promises here if needed to check specific content loading
        ]);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading content:", error);
        setIsLoading(false);
      }
    };

    checkContentLoaded();
  }, []);

  return (
    <div className="max-w-[200rem] w-full mx-auto">
      {isLoading && <Loader />}
      <div className={isLoading ? "hidden" : ""}>
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
  );
};

export default Cart;

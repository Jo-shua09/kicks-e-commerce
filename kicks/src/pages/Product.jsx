import React, { useState, useEffect } from "react";
import Navbar from "./../components/general/Navbar";
import Footer from "./../components/general/Footer";
import SmProductDesc from "./../components/products/smProductDesc";
import LgProductDesc from "./../components/products/lgProductDesc";
import ProductDrops from "../components/products/ProductDrops";
import Loader from "../components/loader/Loader";

const Product = () => {
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
    </div>
  );
};

export default Product;

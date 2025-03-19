import Navbar from "../components/general/Navbar";
import Footer from "../components/general/Footer";
import ProductList from "../components/list/ProductList";
import ProductHero from "../components/list/ProductHero";
import React, { useState, useEffect } from "react";
import Loader from "../components/loader/Loader";

const List = () => {
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
        </div>
        <div className="max-w-[140rem] w-full mx-auto">
          <div>
            <ProductHero />
          </div>
          <div>
            <ProductList />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;

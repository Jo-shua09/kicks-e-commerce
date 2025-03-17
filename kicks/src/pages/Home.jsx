import React, { useState, useEffect } from "react";
import Navbar from "../components/general/Navbar";
import Hero from "../components/home/Hero";
import Drops from "../components/home/Drops";
import Category from "../components/home/Category";
import Review from "../components/home/Review";
import Footer from "../components/general/Footer";
import Loader from "../components/loader/Loader";

const Home = () => {
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
          <Hero />
        </div>
        <div className="">
          <Drops title="Don’t miss out new drops" />
        </div>
        <div className="">
          <Category />
        </div>
        <div className="">
          <Review />
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;

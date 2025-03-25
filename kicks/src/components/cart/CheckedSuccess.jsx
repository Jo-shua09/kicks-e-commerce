import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";
import { CheckCircleRounded } from "@mui/icons-material";

const CheckedSuccess = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Function to check if all content is loaded
    const checkContentLoaded = async () => {
      try {
        // Wait for all components to load
        await Promise.all([
          new Promise((resolve) => setTimeout(resolve, 1000)), // Minimum loader display time
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
        <div className="max-w-[140rem] w-full mx-auto flex flex-col items-center justify-center min-h-screen">
          <div className="text-center p-8">
            <div className="animate-bounce duration-200 transition-all delay-200">
              <CheckCircleRounded sx={{ color: "green", fontSize: "10rem" }} />
            </div>
            <h1 className="text-5xl font-bold font-Rubik text-green-600 mb-4">
              Order Successful!
            </h1>
            <Link
              to="/shop"
              className="bg-black text-2xl font-semibold text-white w-full h-[4.5rem] flex items-center justify-center font-Rubik uppercase rounded-xl hover:scale-95 transition-all duration-300"
            >
              Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckedSuccess;

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
    <div className="max-w-[200rem] w-full fixed h-full z-[99999999] mx-auto bg-gray-50">
      {isLoading && <Loader />}
      <div className={isLoading ? "hidden" : ""}>
        <div className="max-w-[140rem] w-full mx-auto flex flex-col items-center justify-center min-h-screen p-4">
          <div className="bg-white rounded-2xl shadow-[1px_1px_5px_rgba(0,0,0,0.5)] p-12 max-w-2xl w-full">
            <div className="text-center">
              <div className="mb-8 transform transition-transform hover:scale-105">
                <CheckCircleRounded
                  sx={{ color: "#22c55e", fontSize: "10rem" }}
                />
              </div>
              <h1 className="text-4xl  font-bold font-Rubik normal-case text-gray-800 mb-4">
                Thank you for your order!
              </h1>
              <p className="text-gray-600 mb-8 sm:text-xl text-[1.35rem] normal-case font-medium">
                Your order has been successfully placed. We'll send you a
                confirmation email shortly.
              </p>
              <div className="border-t border-gray-200 pt-8 mt-8">
                <Link
                  to="/shop"
                  className="bg-black sm:text-xl text-2xl uppercase font-semibold font-Rubik text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 inline-flex items-center gap-2"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckedSuccess;

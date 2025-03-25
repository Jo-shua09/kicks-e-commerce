import React, { useState, useEffect } from "react";
import Loader from "../components/loader/Loader";
import Navbar from "../components/general/Navbar";
import Footer from "../components/general/Footer";
import { useNavigate } from "react-router-dom";
import { ArrowRightAlt } from "@mui/icons-material";

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkContentLoaded = async () => {
      try {
        await Promise.all([
          new Promise((resolve) => setTimeout(resolve, 1000)),
        ]);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading content:", error);
        setIsLoading(false);
      }
    };

    checkContentLoaded();
  }, []);

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div className="max-w-[200rem] w-full mx-auto">
      {isLoading && <Loader />}
      <div className={isLoading ? "hidden" : ""}>
        <div className="">
          <Navbar />
        </div>
        <div className="max-w-[140rem] w-full mx-auto">
          <div className="section pt-0 w-full flex justify-between flex-wrap md:flex-nowrap h-full">
            <div className="sm:flex-[3] w-full">
              <h2 className="text-5xl font-bold text-black font-Rubik">
                login
              </h2>

              <div className="w-full flex flex-col gap-y-6 my-5">
                <input
                  placeholder="email"
                  type="email"
                  className="w-full sm:h-[4.5rem] h-[5rem] border focus:border-2 border-gray-600 border-t-2 rounded-xl bg-transparent pl-2 text-2xl font-Rubik font-medium"
                />
                <input
                  placeholder="password"
                  type="password"
                  className="w-full sm:h-[4.5rem] h-[5rem] border focus:border-2 border-gray-600 border-t-2 rounded-xl bg-transparent pl-2 text-2xl font-Rubik font-medium"
                />
              </div>

              <p className="font-medium cursor-pointer hover:underline normal-case text-2xl mb-5 -mt-2">
                Forgot your password?
              </p>

              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  className="accent-black cursor-pointer"
                />
                <p className="text-black normal-case text-2xl font-semibold">
                  Keep me logged in - applies to all log in options below.
                </p>
              </div>

              <button
                onClick={handleLogin}
                className="my-10 flex justify-between items-center px-4 hover:scale-95 duration-200 transition-all bg-black uppercase font-semibold font-Rubik w-full sm:h-[4.5rem] h-[5rem] text-white rounded-xl text-2xl"
                disabled={loading}
              >
                <div className="flex items-center gap-2 w-full justify-between">
                  {loading ? (
                    <div className="w-12 h-12 rounded-full border-t-2 text-center items-center mx-auto animate-spin duration-200 delay-200 transition-all"></div>
                  ) : (
                    <>
                      <span className="uppercase font-semibold font-Rubik">
                        Login
                      </span>
                      <ArrowRightAlt sx={{ fontSize: "2.5rem" }} />
                    </>
                  )}
                </div>
              </button>

              <div className="flex items-center justify-between gap-6 w-full">
                <div className="border-2 border-gray-700 w-full h-[5rem] rounded-xl">
                  <img src="" alt="google logo" />
                </div>
                <div className="border-2 border-gray-700 w-full h-[5rem] rounded-xl">
                  <img src="" alt="apple logo" />
                </div>
                <div className="border-2 border-gray-700 w-full h-[5rem] rounded-xl">
                  <img src="" alt="facebook logo" />
                </div>
              </div>
              <p className="text-2xl font-medium my-5 normal-case">
                By clicking 'Log In' you agree to our website KicksClub Terms &
                Conditions, Kicks Privacy Notice and Terms & Conditions.
              </p>
            </div>
            <div className="sm:flex-[4] w-full"></div>
          </div>
          <div className="">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

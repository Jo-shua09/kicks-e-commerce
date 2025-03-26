import React, { useState, useEffect } from "react";
import Loader from "../components/loader/Loader";
import Navbar from "../components/general/Navbar";
import Footer from "../components/general/Footer";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRightAlt } from "@mui/icons-material";
import apple from "../assets/Logo/apple.svg";
import google from "../assets/Logo/google.svg";
import facebook from "../assets/Logo/facebook.svg";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [loader, IsLoading] = useState(true);

  const navigate = useNavigate();
  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div className="max-w-[200rem] w-full mx-auto">
      {loader && <Loader onComplete={() => IsLoading(false)} />}
      {!loader && (
        <div>
          <div className="">
            <Navbar />
          </div>
          <div className="max-w-[140rem] w-full mx-auto">
            <div className="section section-account pt-0 w-full flex  gap-10 justify-between flex-wrap md:flex-nowrap h-full">
              <div className="sm:flex-[3] w-full">
                <h2 className="text-5xl font-bold text-black font-Rubik">
                  login
                </h2>

                <div className="w-full flex flex-col gap-y-6 my-5">
                  <input
                    placeholder="Email"
                    type="email"
                    className="w-full normal-case text-2xl sm:h-[4.5rem] h-[6rem] border focus:border-gray-950 border-gray-400 border-t-2 rounded-xl bg-transparent pl-3 font-Rubik font-medium"
                  />
                  <input
                    placeholder="Password"
                    type="password"
                    className="w-full normal-case text-2xl sm:h-[4.5rem] h-[6rem] border focus:border-gray-950 border-gray-400 border-t-2 rounded-xl bg-transparent pl-3 font-Rubik font-medium"
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
                    More info
                  </p>
                </div>

                <button
                  onClick={handleLogin}
                  className="my-10 flex justify-between items-center px-4 hover:scale-95 duration-200 transition-all bg-black uppercase font-semibold font-Rubik w-full sm:h-[4.5rem] h-[6rem] text-white rounded-xl text-2xl"
                  disabled={loading}
                >
                  <div className="flex items-center gap-2 w-full justify-between">
                    {loading ? (
                      <div className="w-12 h-12 rounded-full border-t-2 text-center items-center mx-auto animate-spin duration-200 delay-200 transition-all"></div>
                    ) : (
                      <>
                        <span className="uppercase font-semibold font-Rubik">
                          Log In
                        </span>
                        <ArrowRightAlt sx={{ fontSize: "2.5rem" }} />
                      </>
                    )}
                  </div>
                </button>

                <div className="flex items-center justify-between gap-6 w-full">
                  <div className="border border-gray-700 flex hover:scale-95 overflow-hidden transition-all duration-200 cursor-pointer justify-center items-center w-full h-[6rem] rounded-xl">
                    <img
                      src={google}
                      alt="google logo"
                      className="w-14 m-auto h-14 object-cover"
                    />
                  </div>
                  <div className="border border-gray-700 flex hover:scale-95 overflow-hidden transition-all duration-200 cursor-pointer justify-center items-center w-full h-[6rem] rounded-xl">
                    <img
                      src={apple}
                      alt="apple logo"
                      className="w-14 m-auto h-14 object-cover"
                    />
                  </div>
                  <div className="border border-gray-700 flex hover:scale-95 overflow-hidden transition-all duration-200 cursor-pointer justify-center items-center w-full h-[6rem] rounded-xl">
                    <img
                      src={facebook}
                      alt="facebook logo"
                      className="w-14 m-auto h-14 object-cover"
                    />
                  </div>
                </div>

                <p className="text-2xl font-normal my-5 font-Rubik normal-case">
                  By clicking
                  <span className="font-bold px-2 normal-case font-Rubik">
                    'log in'
                  </span>
                  you agree to our website KicksClub Terms & Conditions, Kicks
                  Privacy Notice and Terms & Conditions.
                </p>

                <p className="text-2xl normal-case font-medium">
                  Don't have an account?
                  <Link
                    to="/sign-up"
                    className="text-black ml-2 hover:underline font-bold"
                  >
                    Sign up
                  </Link>
                </p>
              </div>

              <div className="sm:flex-[4] bg-white p-5 rounded-xl max-h-fit w-full">
                <div className="flex flex-col sm:gap-y-5 gap-y-8 w-full">
                  <h1 className="sm:text-5xl text-4xl font-bold font-Rubik normal-case mb">
                    Join Kicks Club Get Rewarded Today.
                  </h1>
                  <p className="text-2xl font-medium normal-case">
                    As kicks club member you get rewarded with what you love for
                    doing what you love. Sign up today and receive immediate
                    access to these Level 1 benefits:
                  </p>
                  <ul className="flex flex-col gap-y-3 ml-10 font-medium text-2xl normal-case">
                    <li className="list-disc">Free Shipping</li>
                    <li className="list-disc">
                      A 15% off voucher for your next purchase​
                    </li>
                    <li className="list-disc">
                      Access to Members Only products and sales​
                    </li>
                    <li className="list-disc">
                      Access to adidas Running and Training apps​
                    </li>
                    <li className="list-disc">
                      Special offers and promotions​
                    </li>
                  </ul>
                  <p className="text-2xl font-medium normal-case">
                    Join now to start earning points, reach new levels and
                    unlock more rewards and benefits from adiClub.​
                  </p>
                </div>
                <div className="mt-14">
                  <button className="flex justify-between items-center px-4 hover:scale-95 duration-200 transition-all bg-black uppercase font-semibold font-Rubik w-full sm:h-[4.5rem] h-[5rem] text-white rounded-xl text-2xl">
                    join the club
                    <ArrowRightAlt sx={{ fontSize: "2.5rem" }} />
                  </button>
                </div>
              </div>
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

export default Login;

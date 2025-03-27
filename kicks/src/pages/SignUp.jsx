import React, { useState, useEffect } from "react";
import Loader from "../components/loader/Loader";
import Navbar from "../components/general/Navbar";
import Footer from "../components/general/Footer";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRightAlt } from "@mui/icons-material";
import apple from "../assets/Logo/apple.svg";
import google from "../assets/Logo/google.svg";
import facebook from "../assets/Logo/facebook.svg";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [loader, IsLoading] = useState(true);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/login");
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
            <div className="section section-account pt-0 w-full flex gap-10 justify-between flex-wrap md:flex-nowrap h-full">
              <div className="sm:flex-[3] w-full" data-aos="fade-right">
                <h2 className="text-5xl font-bold text-black font-Rubik">
                  Sign up
                </h2>
                <div className="flex flex-col gap-y-3 mt-8 my-5">
                  <h3 className="text-3xl font-medium normal-case">
                    Sign up with
                  </h3>
                  <div
                    className="flex items-center justify-between gap-6 w-full"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
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
                </div>
                <div
                  className="my-10 w-full"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="">
                    <h3 className="text-3xl font-medium font-Rubik mb-3">
                      name
                    </h3>
                    <div className="flex flex-col gap-y-5 w-full">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="text-2xl font-medium w-full sm:h-[4.5rem] h-[6rem] pl-3 bg-transparent border-t-2 border-gray-400 hover:border-gray-950 border rounded-xl"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="text-2xl font-medium w-full sm:h-[4.5rem] h-[6rem] pl-3 bg-transparent border-t-2 border-gray-400 hover:border-gray-950 border rounded-xl"
                      />
                    </div>
                  </div>

                  <div
                    className="my-14"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <h3 className="text-3xl font-medium font-Rubik mb-3">
                      gender
                    </h3>
                    <div className="flex justify-between gap-5 w-3/5 sm:w-2/5">
                      <div className="flex items-center gap-x-3">
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          className="accent-black cursor-pointer"
                        />
                        <label
                          htmlFor="male"
                          className="text-2xl font-semibold"
                        >
                          male
                        </label>
                      </div>

                      <div className="flex items-center gap-x-3">
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          className="accent-black cursor-pointer"
                        />
                        <label
                          htmlFor="female"
                          className="text-2xl font-semibold"
                        >
                          female
                        </label>
                      </div>

                      <div className="flex items-center gap-x-3">
                        <input
                          type="radio"
                          name="gender"
                          value="other"
                          className="accent-black cursor-pointer"
                        />
                        <label
                          htmlFor="other"
                          className="text-2xl font-semibold"
                        >
                          other
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="" data-aos="fade-up" data-aos-delay="500">
                    <h3 className="text-3xl font-medium font-Rubik mb-3">
                      login details
                    </h3>
                    <div className="flex flex-col gap-y-5 w-full">
                      <input
                        type="email"
                        placeholder="Email"
                        className="text-2xl font-medium w-full sm:h-[4.5rem] h-[6rem] pl-3 bg-transparent border-t-2 border-gray-400 hover:border-gray-950 border rounded-xl"
                      />
                      <div className="">
                        <input
                          type="password"
                          placeholder="Password"
                          className="text-2xl font-medium w-full sm:h-[4.5rem] h-[6rem] pl-3 bg-transparent border-t-2 border-gray-400 hover:border-gray-950 border rounded-xl"
                        />
                        <p className="text-xl mt-1 font-medium normal-case">
                          Minimum 8 characters with at least one uppercase, one
                          lowercase, one special character and a number
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="my-10 flex-col flex gap-y-5"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <div className="flex items-center gap-4">
                      <input
                        type="checkbox"
                        className="accent-black cursor-pointer"
                      />
                      <p className="text-black normal-case text-2xl font-semibold">
                        By clicking
                        <span className="font-bold px-2 normal-case font-Rubik">
                          'sign up'
                        </span>
                        you agree to our website KicksClub Terms & Conditions,
                        Kicks Privacy Notice and Terms & Conditions.
                      </p>
                    </div>

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
                  </div>

                  <p className="text-2xl mt-8 normal-case font-medium">
                    Already have an account?
                    <Link
                      to="/login"
                      className="text-black ml-2 hover:underline font-bold"
                    >
                      Log in
                    </Link>
                  </p>
                </div>

                <div
                  className="my-14 mb-0"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <button
                    onClick={handleLogin}
                    className="flex justify-between items-center px-4 hover:scale-95 duration-200 transition-all bg-black uppercase font-semibold font-Rubik w-full sm:h-[4.5rem] h-[6rem] text-white rounded-xl text-2xl"
                    disabled={loading}
                  >
                    <div className="flex items-center gap-2 w-full justify-between">
                      {loading ? (
                        <div className="w-12 h-12 rounded-full border-t-2 text-center items-center mx-auto animate-spin duration-200 delay-200 transition-all"></div>
                      ) : (
                        <>
                          <span className="uppercase font-semibold font-Rubik">
                            sign up
                          </span>
                          <ArrowRightAlt sx={{ fontSize: "2.5rem" }} />
                        </>
                      )}
                    </div>
                  </button>
                </div>
              </div>

              <div
                className="sm:flex-[4] bg-white p-5 rounded-xl w-full max-h-fit"
                data-aos="fade-left"
              >
                <div className="flex flex-col sm:gap-y-14 gap-y-10 w-full">
                  <h1 className="sm:text-5xl text-4xl font-bold font-Rubik normal-case mb">
                    Join Kicks Club Get Rewarded Today.
                  </h1>
                  <p className="text-2xl font-medium normal-case">
                    As kicks club member you get rewarded with what you love for
                    doing what you love. Sign up today and receive immediate
                    access to these Level 1 benefits:
                  </p>
                  <ul className="flex flex-col gap-y-3 ml-10 font-medium text-2xl normal-case">
                    <li
                      className="list-disc"
                      data-aos="fade-left"
                      data-aos-delay="200"
                    >
                      Free Shipping
                    </li>
                    <li
                      className="list-disc"
                      data-aos="fade-left"
                      data-aos-delay="300"
                    >
                      A 15% off voucher for your next purchase
                    </li>
                    <li
                      className="list-disc"
                      data-aos="fade-left"
                      data-aos-delay="400"
                    >
                      Access to Members Only products and sales
                    </li>
                    <li
                      className="list-disc"
                      data-aos="fade-left"
                      data-aos-delay="500"
                    >
                      Access to adidas Running and Training apps
                    </li>
                    <li
                      className="list-disc"
                      data-aos="fade-left"
                      data-aos-delay="600"
                    >
                      Special offers and promotions​
                    </li>
                  </ul>
                  <p className="text-2xl font-medium normal-case">
                    Join now to start earning points, reach new levels and
                    unlock more rewards and benefits from adiClub.
                  </p>
                </div>
                <div
                  className="sm:mt-28 mt-16"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <button className="flex justify-between items-center px-4 hover:scale-95 duration-200 transition-all bg-black uppercase font-semibold font-Rubik w-full sm:h-[4.5rem] h-[6rem] text-white rounded-xl text-2xl">
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

export default SignUp;

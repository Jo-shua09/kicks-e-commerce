import { Link } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";

// CartBoard component displays a promotional message related to a sale
const CartBoard = () => {
  return (
    <div className="section">
      <div className="mb-10 sm:w-4/5 lg:w-full w-[90%]" data-aos="fade-up">
        <h3
          className="text-5xl mb-3 font-bold normal-case font-Rubik"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Saving to celebrate
        </h3>
        <p
          className="text-2xl font-Rubik text-gray-500 font-normal mb-2 normal-case"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          Enjoy up to 60% off thousands of styles during the End of Year sale -
          while supplies last. No code needed.
        </p>
        <div
          className="text-2xl space-x-2 font-Rubik text-gray-500 font-normal mb-4 normal-case"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          <Link to="/sign_up">
            <span className="normal-case hover:text-black cursor-pointer">
              Join us
            </span>
          </Link>

          <span className="">or</span>

          <Link to="/log_in">
            <span className="normal-case hover:text-black cursor-pointer">
              Sign in
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartBoard;

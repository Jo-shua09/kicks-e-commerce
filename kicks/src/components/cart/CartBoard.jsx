import { Link } from "react-router-dom";

// CartBoard component displays a promotional message related to a sale
const CartBoard = () => {
  return (
    <div className="section">
      <div className="mb-10 sm:w-4/5 lg:w-full w-[90%]">
        <h3 className="text-5xl mb-3 font-bold normal-case font-Rubik">
          Saving to celebrate{" "}
        </h3>
        <p className="text-2xl font-Rubik text-gray-500 font-normal mb-2 normal-case">
          Enjoy up to 60% off thousands of styles during the End of Year sale -
          while supplies last. No code needed.
        </p>
        <div className="text-2xl space-x-2 font-Rubik text-gray-500 font-normal mb-4 normal-case">
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

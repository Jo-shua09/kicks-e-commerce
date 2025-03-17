import PropTypes from "prop-types";
const Button = ({ name, price }) => {
  return (
    <button className="sm:text-2xl w-full font-Rubik text-[1.15rem] bg-gray-900 text-white uppercase py-4 px-14 rounded-lg font-semibold">
      {name}
      <span className="text-yellow-600 sm:text-2xl w-full font-Rubik text-[1.15rem]">
        ${price}
      </span>
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
const Button2 = ({ name }) => {
  return (
    <button className="sm:text-2xl font-Rubik text-[1.15rem] bg-blue-600 max-w-max text-white uppercase py-4 px-14 rounded-lg font-bold">
      {name}
    </button>
  );
};

Button2.propTypes = {
  name: PropTypes.string.isRequired,
};
const Button3 = ({ name }) => {
  return (
    <button className="sm:text-2xl w-max h-[4rem] font-Rubik text-[1.15rem] bg-gray-900 text-white uppercase py-4 px-14 rounded-lg font-semibold">
      {name}
    </button>
  );
};

Button3.propTypes = {
  name: PropTypes.string.isRequired,
};
export { Button, Button2, Button3 };

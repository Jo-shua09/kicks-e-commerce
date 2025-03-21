import PropTypes from "prop-types";
/**
 * Button component that displays a button with a name and price.
 * @param {string} name - The text to display on the button.
 * @param {number} price - The price to display next to the button text.
 */
const Button = ({ name, price }) => {
  return (
    <button className="sm:text-2xl w-full text-nowrap font-Rubik text-[1.15rem] bg-gray-900 text-white uppercase py-4 px-14 rounded-lg font-semibold">
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
/**
 * Button2 component that displays a button with a name.
 * @param {string} name - The text to display on the button.
 */
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
/**
 * Button3 component that displays a button with a name.
 * @param {string} name - The text to display on the button.
 */
const Button3 = ({ name }) => {
  return (
    <button className="sm:text-2xl w-max h-[4.2rem] font-Rubik text-[1.15rem] bg-gray-900 text-white uppercase py-4 px-14 rounded-lg font-semibold">
      {name}
    </button>
  );
};

Button3.propTypes = {
  name: PropTypes.string.isRequired,
};
export { Button, Button2, Button3 };

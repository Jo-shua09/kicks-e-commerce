const Button = ({ name, price }) => {
  return (
    <button className="sm:text-2xl w-full font-Rubik text-xl bg-gray-900 text-white uppercase py-4 px-14 rounded-lg font-semibold">
      {name} <span className="text-yellow-600">${price}</span>
    </button>
  );
};

const Button2 = ({ name }) => {
  return (
    <button className="sm:text-2xl font-Rubik text-xl bg-blue-600 max-w-max text-white uppercase py-4 px-14 rounded-lg font-bold">{name}</button>
  );
};

const Button3 = ({ name }) => {
  return (
    <button className="sm:text-2xl w-max h-[4rem] font-Rubik text-xl bg-gray-900 text-white uppercase py-4 px-14 rounded-lg font-semibold">
      {name}
    </button>
  );
};
export { Button, Button2, Button3 };

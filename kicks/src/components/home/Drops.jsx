import PropTypes from "prop-types";
import { Button, Button2 } from "../general/buttons";
import { Link } from "react-router-dom";
import { ListOfProducts } from "../../data/allItems";
import { useNavigate } from "react-router-dom";

const Drops = ({ title }) => {
  // This component showcases new product drops in a grid layout.

  // Navigate to the product detail page with the selected product's information.
  const navigate = useNavigate();
  const handleProductClick = (list) => {
    navigate(`/product/${list.id}`, {
      state: {
        image: list.image,
        name: list.name,
        price: list.price,
        type: list.type,
      },
    });
  };

  return (
    <div className="section">
      <div className="flex flex-col gap-y-10">
        <div className="flex justify-between  items-end">
          <h2
            data-aos="fade-right"
            data-aos-duration="800"
            className="sm:text-6xl text-4xl font-bold text-gray-950 uppercase font-Rubik w-1/2 sm:w-1/3"
          >
            {title}
          </h2>

          <Link data-aos="fade-right" data-aos-duration="900" to="/shop">
            <Button2 name="shop new drops" />
          </Link>
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-16 grid-cols-2 ">
          {ListOfProducts.slice(21, 25).map((list) => (
            <div data-aos="fade-right" key={list.id} className="w-full h-full">
              <div className="bg-white p-3 rounded-3xl">
                <div className="relative overflow-hidden">
                  <span className="absolute top-0 font-Rubik text-xl text-white bg-blue-600 py-3 px-5 rounded-tl-3xl rounded-br-3xl">
                    {list.type}
                  </span>
                  <div
                    onClick={() => handleProductClick(list)}
                    className="cursor-pointer"
                  >
                    <img
                      src={list.image}
                      alt={list.name}
                      loading="lazy"
                      className="w-full hover:brightness-75 rounded-2xl h-[22rem] sm:h-[30rem] object-cover"
                    />
                  </div>
                </div>
              </div>

              <h3 className="font-Rubik text-nowrap my-7 text-[1.3rem] sm:text-3xl font-semibold text-gray-950 uppercase">
                {list.name}
              </h3>
              <div
                onClick={() => handleProductClick(list)}
                className="cursor-pointer"
              >
                <Button name="view products" price={list.price} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Drops.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Drops;

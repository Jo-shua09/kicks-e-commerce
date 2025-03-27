import { useState } from "react";
import Home from "../../pages/Home";
import { useLocation } from "react-router-dom";
import { Colors, Sizes } from "../../data/ProductData";
import { FavoriteOutlined } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";

const LgProductDesc = () => {
  const [activeColor, setActiveColor] = useState(null);
  const [activeSize, setActiveSize] = useState(null);
  const location = useLocation();
  const { image, name, price, type } = location.state || {};

  // Select color
  const handleColorClick = (color) => {
    const selectedColor = Colors.find((c) => c.id === color);
    setActiveColor(selectedColor.color);
  };

  // Select size
  const handleSizeClick = (size) => {
    setActiveSize(size);
  };

  // const addToFavorites = () => {
  //   const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  //   const isFavorite = favorites.some((item) => item.name === name);

  //   if (!isFavorite) {
  //     favorites.push({ name, price, image, type });
  //     localStorage.setItem("favorites", JSON.stringify(favorites));
  //     toast.success("Added to favourites successfully!");
  //   } else {
  //     toast.info("Already in favourites!");
  //   }
  // };

  const addToCart = () => {
    if (!activeColor || !activeSize) {
      toast.error("Please select both color and size");
      return;
    }

    const cartItem = {
      name,
      price,
      type,
      image,
      color: activeColor,
      size: activeSize,
      quantity: 1,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = existingCart.findIndex(
      (item) =>
        item.name === name &&
        item.type === type &&
        item.color === activeColor &&
        item.size === activeSize
    );

    if (existingItemIndex !== -1) {
      toast.info("Item already in cart!");
      return;
    } else {
      existingCart.push(cartItem);
      localStorage.setItem("cart", JSON.stringify(existingCart));
      toast.success("Added to cart successfully!");
    }
  };

  if (!location.state) {
    return <Home />;
  }

  return (
    <div className="section-two !pt-0 w-full h-full mb-24 relative">
      <div className="flex items-start flex-wrap justify-between gap-6">
        <div data-aos="fade-down" data-aos-duration="900" className="flex-[4]">
          <img
            src={image}
            alt={name}
            className="w-full h-[50rem] rounded-3xl shadow-[1px_1px_10px_rgba(0,0,0,0.2)] object-cover"
          />
          <div className="absolute top-0 right-2/5 pl-4 pt-3 bottom-0">
            <div className="text-white w-fit uppercase font-Rubik font-semibold bg-blue-600 rounded-xl py-4 tracking-widest px-8 text-xl">
              {type}
            </div>
            <h3 className="uppercase mt-5 text-3xl font-bold font-Rubik text-gray-900">
              {name}
            </h3>
            <div className="text-3xl lg:mt-4 mt-2 text-blue-600 font-bold font-Rubik">
              ${price}
            </div>
          </div>
        </div>

        <div className="flex-[3] w-max mx-auto mr-10 h-full flex flex-col">
          <div className="flex flex-col gap-y-8 w-full">
            {/* Color Selection */}
            <div className="flex flex-col">
              <h5
                data-aos="fade-right"
                data-aos-duration="900"
                className="text-xl lg:mb-2 mb-1 text-gray-900 font-Rubik font-semibold"
              >
                Colors
              </h5>
              <div className="flex items-center gap-x-4">
                {Colors.map((color) => (
                  <div
                    data-aos="fade-right"
                    data-aos-duration="900"
                    data-aos-delay="500"
                    key={color.id}
                    className={`p-[.2rem] rounded-full transition-all duration-300 ${
                      activeColor === color.color
                        ? "border-2 border-gray-900"
                        : ""
                    }`}
                    onClick={() => handleColorClick(color.id)}
                  >
                    <div
                      className={`text-white ${color.color} p-7 text-sm rounded-full font-bold cursor-pointer`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="flex flex-col">
              <h5
                data-aos="fade-right"
                data-aos-duration="900"
                className="text-xl text-gray-900 mb-1 font-Rubik font-semibold"
              >
                Size
              </h5>
              <div className="flex items-center gap-x-4">
                {Sizes.map((size) => (
                  <div
                    data-aos="fade-right"
                    data-aos-duration="900"
                    data-aos-delay="500"
                    key={size.id}
                    className={`text-gray-900 py-4 px-5 text-xl font-bold font-Rubik cursor-pointer rounded-xl transition-all duration-300 ${
                      activeSize === size.size
                        ? "bg-black/90 text-white"
                        : "bg-white"
                    }`}
                    onClick={() => handleSizeClick(size.size)}
                  >
                    {size.size}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-y-5 mt-4 lg:mt-12 md:mt-14 h-full">
            <div
              data-aos="flip-up"
              data-aos-duration="900"
              className="flex items-center w-full gap-x-3"
            >
              <button
                onClick={addToCart}
                className="w-[90%] h-[4.5rem] bg-black/85 hover:scale-95 rounded-2xl text-xl cursor-pointer text-white font-semibold uppercase font-Rubik"
              >
                Add to Cart
              </button>
              <div
                // onClick={addToFavorites}
                className="w-[10%] cursor-pointer h-[4.5rem] hover:scale-95 flex items-center bg-black/85 rounded-2xl text-white"
              >
                <FavoriteOutlined
                  sx={{ fontSize: "2.5rem" }}
                  className="mx-auto"
                />
              </div>
            </div>

            <button
              data-aos="flip-up"
              data-aos-duration="900"
              className="w-full h-[4.5rem] bg-blue-600 rounded-2xl hover:scale-95 text-xl flex-[7] cursor-pointer text-white font-semibold uppercase font-Rubik"
            >
              Buy It Now
            </button>
          </div>

          {/* About Product */}
          <div
            data-aos="fade-down"
            data-aos-duration="900"
            data-aos-delay="700"
            className="lg:mt-10 mt-5"
          >
            <h4 className="text-2xl lg:mb-4 mb-2 font-bold font-Rubik uppercase">
              About the Product
            </h4>
            <p className="text-gray-600 lg:mb-4 mb-2 font-semibold text-xl">
              Shadow Navy - Army Green
            </p>
            <div className="text-gray-600">
              <p className="text-[1.9rem] pb-2 leading-8 font-Rubik font-medium normal-case">
                This product is excluded from all promotional discounts and
                offers.
              </p>
              <ul className="pl-[2.5rem] font-Rubik ">
                <li className="list-disc text-2xl mb-3 normal-case">
                  Pay over time in interest-free installments with Affirm,
                  Klarna, or Afterpay.
                </li>
                <li className="list-disc text-2xl normal-case">
                  Join adiClub to get unlimited free standard shipping, returns,
                  & exchanges.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Toast Container */}
        <ToastContainer
          position="top-right"
          style={{
            fontSize: "1.4rem",
            fontFamily: "sans-serif",
            fontWeight: "800",
          }}
        />
      </div>
    </div>
  );
};

export default LgProductDesc;

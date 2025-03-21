import { useState } from "react";
import { useLocation } from "react-router-dom";
import Home from "../../pages/Home";
import { Colors, Sizes } from "../../data/ProductData";
import { Favorite } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";

/**
 * Component that displays the small product description.
 * It allows users to select colors and sizes for the product.
 */
const SmProductDesc = () => {
  const [activeColor, setActiveColor] = useState(null);
  const [activeSize, setActiveSize] = useState(null);
  const location = useLocation();
  const { image, name, price, type } = location.state;

  const handleColorClick = (color) => {
    const selectedColor = Colors.find((c) => c.id === color);
    setActiveColor(selectedColor.color);
  };

  const handleSizeClick = (size) => {
    setActiveSize(size);
  };

  const addToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorite = favorites.some(
      (item) => item.name === name && item.type === type
    );

    if (!isFavorite) {
      favorites.push({ name, price, image, type });
      localStorage.setItem("favorites", JSON.stringify(favorites));
      toast.success("Added to favourites successfully!");
    } else {
      toast.info("Already in favourites!");
    }
  };

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
    <div className="section-two mb-10">
      <div className="">
        <div className="relative w-full h-full">
          <div className="rounded-3xl">
            <img
              src={image}
              alt={name}
              className="w-full h-[45rem] shadow-[1px_1px_10px_rgba(0,0,0,0.2)] rounded-3xl border border-gray-50 object-cover"
            />
          </div>
          <div className="absolute top-0 pl-3 pt-3">
            <div className="text-white w-fit uppercase font-Rubik font-semibold bg-blue-600 rounded-xl py-4 tracking-widest px-8 text-xl">
              {type}
            </div>
            <h3 className="uppercase mt-6 text-3xl font-bold font-Rubik text-gray-900">
              {name}
            </h3>
            <div className="text-3xl lg:mt-4 mt-4 lg:mb-10 mb-10 text-blue-600 font-bold font-Rubik">
              ${price}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-[2] mt-16 w-full h-full flex flex-col">
        <div className="flex flex-col mb-12 gap-y-12 w-full">
          <div className="flex flex-col">
            <h5 className="text-2xl lg:mb-2 mb-3 text-gray-900 font-Rubik font-semibold">
              colors
            </h5>
            <div className="flex items-center gap-x-4">
              {Colors.map((color) => (
                <div
                  key={color.id}
                  className={`p-[.2rem] rounded-full transition-all duration-300 ${
                    activeColor === color.color
                      ? "border-2 border-gray-900"
                      : ""
                  }`}
                  onClick={() => handleColorClick(color.id)}
                >
                  <div
                    className={`text-white ${color.color} sm:p-5 p-8 text-sm rounded-full normal-case font-bold font-Rubik cursor-pointer`}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h5 className="text-2xl text-gray-900 mb-3 font-Rubik font-semibold">
              size
            </h5>
            <div className="flex items-center gap-x-4">
              {Sizes.map((size) => (
                <div
                  key={size.id}
                  className={`text-gray-900 py-5 px-6 text-xl normal-case font-bold font-Rubik cursor-pointer rounded-xl transition-all duration-300 ${
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

        <div className="flex flex-wrap gap-y-5 mt-4 lg:mt-10 h-full">
          <div className="flex items-center w-full gap-x-3">
            <button
              onClick={addToCart}
              className="w-full h-[5.5rem] bg-black/85 hover:scale-95 rounded-2xl text-xl lg:flex-[7] flex-[5] cursor-pointer text-white font-semibold uppercase font-Rubik"
            >
              add to cart
            </button>
            <div
              onClick={addToFavorites}
              className="w-full cursor-pointer h-[5.5rem] lg:flex-1 flex-[1.2] hover:scale-95 flex items-center bg-black/85 rounded-2xl text-white font-semibold uppercase font-Rubik"
            >
              <Favorite sx={{ fontSize: "2.5rem" }} className="mx-auto" />
            </div>
          </div>
          <button className="w-full h-[5.5rem] bg-blue-600 rounded-2xl hover:scale-95 text-xl flex-[7] cursor-pointer text-white font-semibold uppercase font-Rubik">
            buy it now
          </button>
        </div>

        <div className="lg:mt-10 mt-14">
          <h4 className="text-3xl lg:mb-4 mb-6 font-bold font-Rubik uppercase">
            about the product
          </h4>
          <p className="text-gray-600 lg:mb-4 mb-6 font-semibold text-2xl">
            shadow navy - army green
          </p>
          <div className="text-gray-600">
            <p className="text-[1.9rem] pb-2 leading-8 font-Rubik font-medium normal-case">
              This product is excluded from all promotional discounts and
              offers.
            </p>
            <ul className="pl-[4rem] text-2xl font-Rubik">
              <li className="list-disc mb-4 normal-case">
                Pay over time in interest-free installments with Affirm, Klarna
                or Afterpay.
              </li>
              <li className="list-disc normal-case">
                Join adiClub to get unlimited free standard shipping, returns, &
                exchanges.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        style={{
          width: "100%",
          fontSize: "1.4rem",
          fontFamily: "sans-serif",
          fontWeight: "800",
        }}
      />
    </div>
  );
};

export default SmProductDesc;

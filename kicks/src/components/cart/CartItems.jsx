import React, { useState, useEffect } from "react";
import Shoe10 from "../../assets/List/shoe10.jpg";
import {
  RemoveCircleOutlineSharp,
  AddCircleOutlineSharp,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const CartItems = () => {
  const [showPromo, setShowPromo] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Dispatch event to update Navbar count instantly
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleQuantityChange = (index, change) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = Math.max(
      1,
      updatedCart[index].quantity + change
    );
    updateCart(updatedCart);
  };

  const handleRemoveItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    updateCart(updatedCart);
  };

  // const handleAddToWishlist = (item) => {
  //   const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  //   if (!wishlist.some((wishlistItem) => wishlistItem.id === item.id)) {
  //     const updatedWishlist = [...wishlist, item];
  //     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  //   }
  // };

  const calculateTotal = () => {
    const itemsTotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const delivery = cartItems.length > 0 ? 6.99 : 0;
    const tax = itemsTotal * 0.1;
    return (itemsTotal + delivery + tax).toFixed(2);
  };

  const handleApplyPromo = () => {
    const validPromoCodes = {
      DISCOUNT10: 10,
      SALE20: 20,
    };

    if (validPromoCodes[promoCode]) {
      setDiscount(validPromoCodes[promoCode]);
    } else {
      setDiscount(0);
      alert("Invalid promo code.");
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="section !pt-0">
        <div className="w-full md:flex-[2] bg-white p-4 rounded-xl">
          <div className="space-y-6 text-center py-12">
            <h3 className="text-3xl font-bold capitalize font-Rubik">
              Your cart is empty
            </h3>
            <p className="text-gray-600 text-xl normal-case mt-1">
              Add some items to your cart to get started!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section !pt-0">
      <div className="flex items-center gap-8 justify-between flex-wrap w-full h-full">
        <div className="w-full md:flex-[2] bg-white p-4 rounded-xl">
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h3 className="text-3xl font-bold capitalize font-Rubik">
                your bag
              </h3>
              <p className="text-gray-600 text-xl normal-case mt-1">
                Items in your bag are not reserved - check out now to make them
                yours.
              </p>
            </div>

            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-y-10 justify-between pb-6 place-items-end w-full"
              >
                <div className="flex gap-6 w-full">
                  <div className="bg-gray-100 rounded-lg w-[25rem] h-[16rem]">
                    <img
                      src={item.image || Shoe10}
                      alt={item.name || "cart shoe image"}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full">
                    <div className="w-full">
                      <h2 className="sm:text-3xl text-[1.8rem] uppercase font-bold">
                        {item.name || "shoe name"}
                      </h2>
                      <p className="text-2xl leading-2 normal-case mt-2 font-medium text-gray-600">
                        {item.description || "Men's Road Running Shoes"}
                      </p>
                      <p className="text-2xl leading-2 mt-1 font-bold normal-case text-gray-600">
                        brand:
                        <span className="pl-2 font-bold normal-case font-Rubik text-black">
                          {item.type || "Enamel Blue / University White"}
                        </span>
                      </p>
                    </div>

                    <div className="w-[95%] my-5">
                      <div className=" flex justify-between items-center">
                        <div className="font-medium font-Rubik sm:text-2xl text-3xl text-gray-600">
                          size:
                          <span className="font-bold text-black pl-1 font-Rubik">
                            {item.size || "Size"}
                          </span>
                        </div>
                        <div className="flex items-center rounded-full font-medium font-Rubik sm:text-2xl text-3xl text-gray-600">
                          color:
                          <div
                            className={`${item.color} ml-2 rounded-full w-4 h-4 p-6`}
                          ></div>
                        </div>
                      </div>

                      <div className="sm:text-2xl text-3xl font-bold font-Rubik normal-case mt-5 text-blue-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex w-full justify-between gap-x-5">
                  <div className="flex  justify-between flex-1 items-center">
                    <div
                      className="cursor-pointer hover:scale-105 text-3xl font-Rubik font-semibold text-red-600 transition-colors"
                      onClick={() => handleRemoveItem(index)}
                    >
                      remove
                    </div>
                  </div>

                  <div className="flex items-center gap-x-8 flex-1 place-content-end">
                    <button
                      className="w-12 h-12 flex text-4xl items-center justify-center rounded-full hover:bg-gray-100"
                      onClick={() => handleQuantityChange(index, -1)}
                    >
                      <RemoveCircleOutlineSharp sx={{ fontSize: "3rem" }} />
                    </button>
                    <span className="text-3xl font-medium font-Rubik">
                      {item.quantity}
                    </span>
                    <button
                      className="w-12 h-12 flex text-4xl items-center justify-center rounded-full hover:bg-gray-100"
                      onClick={() => handleQuantityChange(index, 1)}
                    >
                      <AddCircleOutlineSharp sx={{ fontSize: "3rem" }} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:flex-1 p-4 rounded-xl sm:bg-transparent bg-white">
          <h2 className="text-3xl font-bold font-Rubik">Order Summary</h2>
          <div className="w-full mt-5 h-full flex flex-col gap-y-5">
            <div className="flex justify-between font-semibold">
              <div className="text-2xl uppercase">{cartItems.length} Items</div>
              <div className="text-blue-600 text-2xl font-Rubik">
                $
                {cartItems
                  .reduce((sum, item) => sum + item.price * item.quantity, 0)
                  .toFixed(2)}
              </div>
            </div>
            <div className="flex justify-between font-semibold">
              <div className="text-2xl">Delivery</div>
              <div className="text-blue-600 text-2xl font-Rubik">
                ${cartItems.length > 0 ? "6.99" : "0.00"}
              </div>
            </div>
            <div className="flex justify-between font-semibold">
              <div className="text-2xl">Sales Tax</div>
              <div className="text-blue-600 text-2xl font-Rubik">
                $
                {(
                  cartItems.reduce(
                    (sum, item) => sum + item.price * item.quantity,
                    0
                  ) * 0.1
                ).toFixed(2)}
              </div>
            </div>
            <div className="flex justify-between font-semibold">
              <div className="text-3xl font-bold font-Rubik">Total</div>
              <div className="text-blue-600 text-2xl font-Rubik">
                ${calculateTotal()}
              </div>
            </div>
          </div>
          <div className="m-auto mt-8">
            <Link to="/checkout">
              <button className="text-2xl w-full h-[5rem] rounded-xl hover:scale-95 font-semibold uppercase text-white bg-black/90">
                Checkout
              </button>
            </Link>
          </div>
          <div className="">
            <div
              className="mt-6 text-2xl font-semibold font-Rubik text-gray-800 underline hover:no-underline cursor-pointer"
              onClick={() => setShowPromo(!showPromo)}
            >
              use promo code
            </div>
            {showPromo && (
              <div className="mt-4">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="promo code"
                  className="text-2xl font-medium font-Rubik pl-2 border border-gray-800 w-full h-[5rem] focus:border-2 sm:h-[4.5rem] sm:bg-transparent sm:focus:bg-white rounded-xl"
                />
                <button
                  onClick={handleApplyPromo}
                  className="text-[1.4rem] w-1/2 h-[5rem] sm:h-[4.5rem] rounded-xl hover:scale-95 mt-3 font-semibold font-Rubik uppercase text-white bg-black/90"
                >
                  apply
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

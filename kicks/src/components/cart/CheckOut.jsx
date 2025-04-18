import Navbar from "../general/Navbar";
import Footer from "../general/Footer";
import React, { useState, useEffect } from "react";
import Shoe10 from "../../assets/List/shoe10.jpg";
import { ArrowRightAlt } from "@mui/icons-material";
import Loader from "../loader/Loader";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const [cartItems, setCartItems] = useState([]);
  const [deliveryOption, setDeliveryOption] = useState("standard");

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const calculateTotal = () => {
    const itemsTotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const delivery =
      cartItems.length > 0 && deliveryOption === "standard" ? 6.99 : 0;
    const tax = itemsTotal * 0.1;
    return (itemsTotal + delivery + tax).toFixed(2);
  };

  const handleDeliveryOptionChange = (option) => {
    setDeliveryOption(option);
  };

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const checkContentLoaded = async () => {
      try {
        await Promise.all([
          new Promise((resolve) => setTimeout(resolve, 1000)),
        ]);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading content:", error);
        setIsLoading(false);
      }
    };

    checkContentLoaded();
  }, []);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // React Router hook for navigation

  const handleCheckout = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/checked-success"); // Redirect to CheckedSuccess page
    }, 1500);
  };

  return (
    <div className="max-w-[200rem] w-full m-auto">
      {isLoading && <Loader />}
      <div className={isLoading ? "hidden" : ""}>
        <div className="">
          <Navbar />
        </div>
        <div className="max-w-[140rem] w-full m-auto">
          <div className="section pt-0 w-full h-full">
            <div className="flex justify-between gap-10 flex-wrap-reverse w-full">
              <div className="w-full sm:flex-[4]">
                {/* Contact Details Section */}
                <div className="">
                  <h3
                    data-aos="fade-right"
                    className="font-semibold text-4xl font-Rubik text-black"
                  >
                    contact details
                  </h3>
                  <p
                    data-aos="fade-right"
                    className="text-gray-600 normal-case text-2xl leading-[1.8rem] font-medium mt-2"
                  >
                    We will use these details to keep you inform about your
                    delivery.
                  </p>
                  <input
                    data-aos="fade-right"
                    data-aos-delay="100"
                    type="email"
                    placeholder="Email"
                    className="lg:w-[35%] font-Rubik sm:w-3/4 w-full sm:h-[4.5rem] h-[6rem] mt-7 pl-3 focus:border-gray-950 rounded-xl border border-t-2 text-2xl border-gray-400 bg-transparent"
                  />
                </div>

                {/* Shipping Address Section */}
                <div
                  data-aos="fade-right"
                  data-aos-duration="900"
                  className="mt-10"
                >
                  <h3 className="font-semibold text-4xl font-Rubik text-black">
                    shipping address
                  </h3>
                  <div className="flex gap-5 w-full font-Rubik mt-5 sm:flex-nowrap flex-wrap justify-between">
                    <input
                      type="text"
                      placeholder="First name*"
                      className="w-full sm:h-[4.5rem] h-[6rem] pl-3 focus:border-gray-950 rounded-xl border border-t-2 text-2xl border-gray-400 bg-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Last Name*"
                      className="w-full sm:h-[4.5rem] h-[6rem] pl-3 focus:border-gray-950 rounded-xl border border-t-2 text-2xl border-gray-400 bg-transparent"
                    />
                  </div>

                  <div className="my-5">
                    <input
                      type="text"
                      placeholder="Find delivery address*"
                      className="w-full sm:h-[4.5rem] h-[6rem] pl-3 focus:border-gray-950 rounded-xl border border-t-2 text-2xl border-gray-400 bg-transparent"
                    />
                    <p className="text-xl text-gray-600 font-medium normal-case mt-1">
                      Start typing your street address or zip code for
                      suggestion
                    </p>
                  </div>

                  <div className="">
                    <input
                      type="text"
                      placeholder="Phone number*"
                      className="lg:w-[35%] font-Rubik sm:w-3/4 w-full sm:h-[4.5rem] h-[6rem] pl-3 focus:border-gray-950 rounded-xl border border-t-2 text-2xl border-gray-400 bg-transparent"
                    />
                    <p className="text-xl text-gray-600 font-medium normal-case mt-1">
                      E.g. (123) 456-7890
                    </p>
                  </div>
                </div>

                {/* Delivery Options Section */}
                <div
                  data-aos="fade-up"
                  data-aos-duration="900"
                  className="mt-10"
                >
                  <h3 className="font-semibold text-4xl font-Rubik text-black">
                    delivery options
                  </h3>
                  <div
                    onClick={() => handleDeliveryOptionChange("standard")}
                    className={`${
                      deliveryOption === "standard"
                        ? "bg-white"
                        : "bg-transparent border-2 border-gray-600"
                    } cursor-pointer hover:scale-95 duration-200 rounded-2xl p-5 my-5 flex justify-between w-full text-black`}
                  >
                    <div className="flex flex-col gap-y-2">
                      <h4 className="text-black font-Rubik text-2xl font-semibold">
                        standard delivery
                      </h4>
                      <p className="text-gray-600 font-medium text-xl normal-case">
                        Enter your address to see when you'll get your order
                      </p>
                    </div>
                    <div className="text-blue-600 font-semibold font-Rubik text-2xl">
                      $6.99
                    </div>
                  </div>

                  <div
                    onClick={() => handleDeliveryOptionChange("collect")}
                    className={`${
                      deliveryOption === "collect"
                        ? "bg-white"
                        : "bg-transparent border-2 border-gray-600"
                    } cursor-pointer hover:scale-95 duration-200 rounded-2xl p-5 flex justify-between w-full text-black`}
                  >
                    <div className="flex flex-col gap-y-2">
                      <h4 className="text-black font-Rubik text-2xl font-semibold normal-case">
                        Collect in store
                      </h4>
                      <p className="text-gray-600 font-medium text-xl normal-case">
                        Pay now, collect in store
                      </p>
                    </div>
                    <div className="text-black font-Rubik text-2xl font-semibold">
                      free
                    </div>
                  </div>
                </div>

                {/* Checkboxes Section */}
                <div
                  data-aos="fade-down"
                  data-aos-duration="900"
                  className="my-10"
                >
                  <div className="flex gap-x-3">
                    <input
                      type="checkbox"
                      className="cursor-pointer accent-black"
                    />
                    <p className="font-semibold normal-case text-2xl ">
                      My billing and delivery information are the same
                    </p>
                  </div>

                  <div className="flex gap-x-3 my-7">
                    <input
                      type="checkbox"
                      className="cursor-pointer accent-black"
                    />
                    <p className="font-semibold normal-case text-2xl ">
                      I'm 13+ year old
                    </p>
                  </div>

                  <div className="">
                    <p className="normal-case text-2xl font-bold mb-2 font-Rubik">
                      Also want product updates with our newsletter?
                    </p>
                    <div className="flex gap-x-3">
                      <input
                        type="checkbox"
                        className="cursor-pointer accent-black"
                      />
                      <p className="font-semibold normal-case text-2xl ">
                        My billing and delivery information are the same
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  data-aos="fade-up-right"
                  data-aos-duration="900"
                  className="mt-12"
                >
                  <button
                    onClick={handleCheckout}
                    className="lg:w-[35%] hover:scale-95 hidden sm:block text-center duration-200 transition-all bg-black uppercase font-semibold font-Rubik sm:w-3/4 w-full sm:h-[4.5rem] h-[6rem] text-white rounded-xl text-2xl items-center justify-center"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="w-12 h-12 rounded-full border-t-2 text-center items-center mx-auto animate-spin duration-200 delay-200 transition-all"></div>
                    ) : (
                      "Review and Pay"
                    )}
                  </button>

                  <button
                    onClick={handleCheckout}
                    className="lg:w-[35%] sm:hidden mt-2 flex justify-between items-center px-4 hover:scale-95 duration-200 transition-all bg-black uppercase font-semibold font-Rubik sm:w-3/4 w-full sm:h-[4.5rem] h-[6rem] text-white rounded-xl text-2xl"
                    disabled={loading}
                  >
                    <div className="flex items-center gap-2 w-full justify-between">
                      {loading ? (
                        <div className="w-12 h-12 rounded-full border-t-2 text-center items-center mx-auto animate-spin duration-200 delay-200 transition-all"></div>
                      ) : (
                        <>
                          <span className="uppercase font-semibold font-Rubik">
                            Review and Pay
                          </span>
                          <ArrowRightAlt sx={{ fontSize: "2.5rem" }} />
                        </>
                      )}
                    </div>
                  </button>
                </div>
              </div>

              {/* Order Summary Section */}
              <div className="w-full sm:flex-[2]">
                <div className="w-full h-full">
                  <div
                    data-aos="flip-down"
                    data-aos-duration="900"
                    className="w-full p-4 mb-10 rounded-xl bg-white"
                  >
                    <h2 className="text-3xl font-bold font-Rubik">
                      Order Summary
                    </h2>
                    <div className="w-full mt-5 h-full flex flex-col gap-y-5">
                      <div className="flex justify-between font-semibold">
                        <div className="text-2xl uppercase">
                          {cartItems.length} Items
                        </div>
                        <div className="text-blue-600 text-2xl font-Rubik">
                          $
                          {cartItems
                            .reduce(
                              (sum, item) => sum + item.price * item.quantity,
                              0
                            )
                            .toFixed(2)}
                        </div>
                      </div>
                      <div className="flex justify-between font-semibold">
                        <div className="text-2xl">Delivery</div>
                        <div className="text-blue-600 text-2xl font-Rubik">
                          $
                          {cartItems.length > 0 && deliveryOption === "standard"
                            ? "6.99"
                            : "0.00"}
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
                      <div className="flex justify-between pb-3 font-semibold">
                        <div className="text-3xl font-bold font-Rubik">
                          Total
                        </div>
                        <div className="text-blue-600 text-2xl font-Rubik">
                          ${calculateTotal()}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    data-aos="flip-down"
                    data-aos-duration="900"
                    className="w-full bg-white p-4 rounded-xl"
                  >
                    <div className="space-y-6">
                      <div className="">
                        <h3 className="text-3xl font-bold capitalize font-Rubik">
                          order details
                        </h3>
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
                                  {item.description ||
                                    "Men's Road Running Shoes"}
                                </p>
                                <p className="text-2xl leading-2 mt-1 font-bold normal-case text-gray-600">
                                  brand:
                                  <span className="pl-2 font-bold normal-case font-Rubik text-black">
                                    {item.type ||
                                      "Enamel Blue / University White"}
                                  </span>
                                </p>
                              </div>

                              <div className="w-[95%] my-5">
                                <div className=" flex justify-between items-center">
                                  <div className="font-medium font-Rubik sm:text-2xl text-[1.65rem] text-gray-600">
                                    size:
                                    <span className="font-bold text-black pl-1 font-Rubik">
                                      {item.size || "Size"}
                                    </span>
                                  </div>
                                  <div className="flex items-center rounded-full font-medium font-Rubik sm:text-2xl text-[1.65rem] text-gray-600">
                                    color:
                                    <div
                                      className={`${item.color} ml-2 rounded-full w-4 h-4 p-6`}
                                    ></div>
                                  </div>
                                </div>

                                <div className="flex justify-between items-center mt-7">
                                  <div className="sm:text-2xl text-3xl font-bold font-Rubik normal-case text-blue-600">
                                    ${(item.price * item.quantity).toFixed(2)}
                                  </div>
                                  <div className="flex items-center rounded-full font-medium font-Rubik sm:text-2xl text-[1.65rem] text-gray-600">
                                    quantity:
                                    <span className="font-bold text-black pl-1 font-Rubik">
                                      {item.quantity}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

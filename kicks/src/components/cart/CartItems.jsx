import React, { useState } from "react";
import Shoe10 from "../../assets/List/shoe10.jpg";
import { FavoriteOutlined, DeleteOutlineRounded } from "@mui/icons-material";

const CartItems = () => {
  const [quantity, setQuantity] = useState(1);

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
                Items in your bag not reserved - check out now to make them
                yours.
              </p>
            </div>

            <div className="flex gap-6 justify-between place-items-end w-full">
              <div className="flex gap-6">
                <div className="bg-gray-100 rounded-lg w-[16rem] h-[16rem]">
                  <img
                    src={Shoe10}
                    alt="cart shoe image"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="max-w-fit">
                  <div className="w-full">
                    <h2 className="sm:text-3xl text-[1.4rem] uppercase font-bold">
                      DROPSET TRAINER SHOES
                    </h2>
                    <p className="text-2xl leading-2 normal-case mt-2 font-medium text-gray-600">
                      Men's Road Running Shoes
                    </p>
                    <p className="text-2xl leading-2 normal-case font-medium text-gray-600">
                      Enamel Blue / University White
                    </p>
                  </div>

                  <div className="flex items-center w-full justify-between my-4">
                    <div className="font-medium text-2xl normal-case">size</div>
                    <div className="flex items-center gap-x-4">
                      <button
                        className="w-12 h-12 flex text-4xl items-center justify-center rounded-full hover:bg-gray-100"
                        onClick={() =>
                          setQuantity((prev) => Math.max(1, prev - 1))
                        }
                      >
                        -
                      </button>
                      <span className="text-3xl font-medium font-Rubik">
                        {quantity}
                      </span>
                      <button
                        className="w-12 h-12 flex text-4xl items-center justify-center rounded-full hover:bg-gray-100"
                        onClick={() => setQuantity((prev) => prev + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-2xl font-bold font-Rubik normal-case mt-5 text-blue-600">
                    price
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between h-[16rem]">
                <div className="cursor-pointer hover:animate-ping hover:text-blue-600 transition-colors">
                  <FavoriteOutlined
                    sx={{
                      fontSize: { xs: "3rem", sm: "2.5rem", md: "3rem" },
                    }}
                  />
                </div>
                <div className="cursor-pointer hover:animate-bounce hover:text-red-600 transition-colors">
                  <DeleteOutlineRounded
                    sx={{
                      fontSize: { xs: "3rem", sm: "2.5rem", md: "3rem" },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:flex-1 p-4 rounded-xl sm:bg-transparent bg-white">
          <div className="">
            <h2 className="">order summary</h2>
            <div className="flex justify-between w-full h-full">
              <div className="">{quantity} item</div>
              <div className="">price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

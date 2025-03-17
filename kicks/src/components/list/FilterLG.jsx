import { connect } from "react-redux";
import {
  toggleRefine,
  toggleSize,
  toggleColor,
  toggleType,
  toggleGender,
  togglePrice,
  selectSize,
  selectColor,
  selectGender,
  updatePrice,
} from "./actions";
import { KeyboardArrowDown } from "@mui/icons-material";
import LimitTags from "./type";
import { useState } from "react";
import CheckboxesTags from "./type";

function GenderSelection({ selectGender, toggleGender }) {
  const [gender, setGender] = useState({
    gender: "",
    isOpen: true,
  });

  const handleRadioChange = (event) => {
    setGender({ ...gender, gender: event.target.value });
    selectGender(event.target.value);
  };

  return (
    <div className="w-full">
      <div className={`flex flex-col gap-y-5`}>
        <div className="flex items-center gap-x-4">
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={gender.gender === "male"}
            onChange={handleRadioChange}
          />
          <label className="text-xl font-normal font-Rubik" htmlFor="male">
            male
          </label>
        </div>
        <div className="flex items-center gap-x-4">
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={gender.gender === "female"}
            onChange={handleRadioChange}
          />
          <label className="text-xl font-normal font-Rubik" htmlFor="female">
            female
          </label>
        </div>
      </div>
    </div>
  );
}

const FilterLG = ({
  refine,
  size,
  color,
  type,
  gender,
  price,
  toggleRefine,
  toggleSize,
  toggleColor,
  toggleType,
  toggleGender,
  togglePrice,
  selectSize,
  selectColor,
  selectGender,
  updatePrice,
}) => {
  return (
    <div className="w-full overflow-hidden">
      <div className="">
        <div className="w-full">
          <div className="flex justify-between gap-x-96 mb-5">
            <span className="text-xl uppercase font-Rubik font-bold">
              refine by
            </span>
            <KeyboardArrowDown
              sx={{
                fontSize: "2rem",
                cursor: "pointer",
                transform: refine.isRotated ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease-in-out",
              }}
              onClick={toggleRefine}
            />
          </div>
          <div
            className={`gap-x-6 items-center transition-all duration-300 ${
              refine.isOpen ? "hidden" : "flex"
            }`}
          >
            <div className="py-3 px-7 text-center flex cursor-pointer hover:scale-90 text-xl font-Rubik bg-blue-600 text-white rounded-2xl">
              outing
            </div>
            <div className="py-3 px-7 text-center flex cursor-pointer hover:scale-90 text-xl font-Rubik bg-blue-600 text-white rounded-2xl">
              casual
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex justify-between gap-x-96 my-10 mb-5">
          <span className="text-xl uppercase font-Rubik font-bold">size</span>
          <KeyboardArrowDown
            sx={{
              fontSize: "2rem",
              cursor: "pointer",
              transform: size.isRotated ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease-in-out",
            }}
            onClick={toggleSize}
          />
        </div>
        <div
          className={`gap-5 flex-wrap items-center transition-all duration-300 ${
            size.isOpen ? "hidden" : "flex"
          }`}
        >
          {size.sizes.map((size) => (
            <div key={size.id} className="transition-all duration-300">
              <div
                className={`py-4 px-5  text-gray-900  text-2xl bg-white normal-case font-bold font-Rubik cursor-pointer rounded-xl ${
                  size.active
                    ? "!bg-black !text-white"
                    : "bg-white text-gray-900"
                }`}
                onClick={() => selectSize(size.id)}
              >
                {size.size}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        <div className="flex justify-between gap-x-96 my-10 mb-5">
          <span className="text-xl uppercase font-Rubik font-bold">Color</span>
          <KeyboardArrowDown
            sx={{
              fontSize: "2rem",
              cursor: "pointer",
              transform: color.isRotated ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease-in-out",
            }}
            onClick={toggleColor}
          />
        </div>
        <div
          className={`flex gap-5 flex-wrap items-center ${
            color.isOpen ? "hidden" : "flex"
          }`}
        >
          {color.colors.map((color) => (
            <div
              key={color.id}
              className={`p-[.1rem] rounded-xl transition-all duration-300 ${
                color.activeColor === color.id ? "border-2 border-gray-900" : ""
              }`}
              onClick={() => selectColor(color.id)}
            >
              <div
                className={`py-7 px-8 cursor-pointer rounded-xl ${color.color}`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-full">
        <div className="flex justify-between gap-x-96 my-10 mb-5">
          <span className="text-xl uppercase font-Rubik font-bold">type</span>
          <KeyboardArrowDown
            sx={{
              fontSize: "2rem",
              cursor: "pointer",
              transform: type.isRotated ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease-in-out",
            }}
            onClick={toggleType}
          />
        </div>
        <div
          className={`w-full h-full flex flex-col z-50 gap-y-5 ${
            type.isOpen ? "hidden" : "flex"
          }`}
        >
          <CheckboxesTags />
        </div>
      </div>

      <div className="w-full">
        <div className="flex justify-between gap-x-96 my-10 mb-5">
          <span className="text-xl uppercase font-Rubik font-bold">gender</span>
          <KeyboardArrowDown
            sx={{
              fontSize: "2rem",
              cursor: "pointer",
              transform: gender.isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease-in-out",
            }}
            onClick={toggleGender}
          />
        </div>
        <div className={` ${gender.isOpen ? "hidden" : "flex"}`}>
          <GenderSelection
            selectGender={selectGender}
            toggleGender={toggleGender}
          />
        </div>
      </div>

      <div className="w-full">
        <div className="flex justify-between gap-x-96 my-10 mb-5">
          <span className="text-xl uppercase font-Rubik font-bold">
            price range
          </span>
          <KeyboardArrowDown
            sx={{
              fontSize: "2rem",
              cursor: "pointer",
              transform: price.isRotated ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease-in-out",
            }}
            onClick={togglePrice}
          />
        </div>
        <div className={`flex ${price.isOpen ? "hidden" : "flex"}`}>
          <input
            type="range"
            name="price"
            id="price"
            min="0"
            max="500"
            value={price.price}
            onChange={(e) => updatePrice(e.target.value)}
            className="w-full h-[2rem] !bg-black cursor-pointer"
          />
          <span className="text-xl font-semibold font-Rubik">
            ${price.price}
          </span>
        </div>
        <div className=" mt-16 flex items-center justify-between w-full h-full gap-x-5">
          <div className="bg-transparent border-2 border-gray-900 text-gray-950 flex cursor-pointer hover:scale-95 justify-center text-3xl items-center font-semibold font-Rubik rounded-2xl w-full h-[5rem]">
            reset
          </div>
          <div className="text-white bg-gray-950 font-semibold font-Rubik rounded-2xl flex cursor-pointer hover:scale-95 justify-center text-3xl items-center w-full h-[5rem]">
            apply
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    refine: state.refine,
    size: state.size,
    color: state.color,
    type: state.type,
    gender: state.gender,
    price: state.price,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleRefine: () => dispatch({ type: "TOGGLE_REFINE" }),
    toggleSize: () => dispatch({ type: "TOGGLE_SIZE" }),
    toggleColor: () => dispatch({ type: "TOGGLE_COLOR" }),
    toggleType: () => dispatch({ type: "TOGGLE_TYPE" }),
    toggleGender: () => dispatch({ type: "TOGGLE_GENDER" }),
    togglePrice: () => dispatch({ type: "TOGGLE_PRICE" }),
    selectSize: (size) => dispatch({ type: "SELECT_SIZE", payload: size }),
    selectColor: (color) => dispatch({ type: "SELECT_COLOR", payload: color }),
    selectGender: (gender) =>
      dispatch({ type: "SELECT_GENDER", payload: gender }),
    updatePrice: (price) => dispatch({ type: "UPDATE_PRICE", payload: price }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterLG);

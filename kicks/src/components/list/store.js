import { createStore, combineReducers } from "redux";
import { Colors, Sizes } from "../../data/ListedData";

// Define the initial state
const initialState = {
  refine: {
    isOpen: false,
    isRotated: false,
  },
  size: {
    isOpen: false,
    isRotated: false,
    sizes: Sizes,
    selected: null, // Add selected size
  },
  color: {
    isOpen: false,
    isRotated: false,
    colors: Colors,
    selected: null, // Add selected color
  },
  type: {
    isOpen: false,
    isRotated: false,
  },
  gender: {
    isOpen: false,
    isRotated: false,
    gender: null, // Add selected gender
  },
  price: {
    isOpen: false,
    isRotated: false,
    value: 0,
  },
};

// Define the reducers
const refineReducer = (state = initialState.refine, action) => {
  switch (action.type) {
    case "TOGGLE_REFINE":
      return { ...state, isOpen: !state.isOpen, isRotated: !state.isRotated };
    default:
      return state;
  }
};

const sizeReducer = (state = initialState.size, action) => {
  switch (action.type) {
    case "TOGGLE_SIZE":
      return { ...state, isOpen: !state.isOpen, isRotated: !state.isRotated };
    case "SELECT_SIZE":
      return {
        ...state,
        selected: action.payload, // Update selected size
        sizes: state.sizes.map((size) =>
          size.id === action.payload
            ? { ...size, active: true }
            : { ...size, active: false }
        ),
      };
    default:
      return state;
  }
};

const colorReducer = (state = initialState.color, action) => {
  switch (action.type) {
    case "TOGGLE_COLOR":
      return { ...state, isOpen: !state.isOpen, isRotated: !state.isRotated };
    case "SELECT_COLOR":
      return {
        ...state,
        selected: action.payload, // Update selected color
        colors: state.colors.map((color) =>
          color.id === action.payload
            ? { ...color, activeColor: color.id }
            : { ...color, activeColor: null }
        ),
      };
    default:
      return state;
  }
};

const typeReducer = (state = initialState.type, action) => {
  switch (action.type) {
    case "TOGGLE_TYPE":
      return { ...state, isOpen: !state.isOpen, isRotated: !state.isRotated };
    default:
      return state;
  }
};

const genderReducer = (state = initialState.gender, action) => {
  switch (action.type) {
    case "TOGGLE_GENDER":
      return { ...state, isOpen: !state.isOpen, isRotated: !state.isRotated };
    case "SELECT_GENDER":
      return { ...state, gender: action.payload }; // Update selected gender
    default:
      return state;
  }
};

const priceReducer = (state = initialState.price, action) => {
  switch (action.type) {
    case "TOGGLE_PRICE":
      return { ...state, isOpen: !state.isOpen, isRotated: !state.isRotated };
    case "UPDATE_PRICE":
      return { ...state, value: action.payload }; // Update price value
    default:
      return state;
  }
};

// Combine the reducers
const rootReducer = combineReducers({
  refine: refineReducer,
  size: sizeReducer,
  color: colorReducer,
  type: typeReducer,
  gender: genderReducer,
  price: priceReducer,
});

// Create the store
const store = createStore(rootReducer);

export default store;

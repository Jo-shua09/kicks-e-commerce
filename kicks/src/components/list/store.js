import { createStore, combineReducers } from "redux";
import { Colors, Sizes } from "../../data/ListedData";

// Define the initial state
/**
 * Initial state for the Redux store.
 * It contains the state for refine, size, color, type, gender, and price filters.
 */
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
/**
 * Reducer for managing the refine filter state.
 * It handles toggling the visibility of the refine filter.
 */
const refineReducer = (state = initialState.refine, action) => {
  switch (action.type) {
    case "TOGGLE_REFINE":
      return { ...state, isOpen: !state.isOpen, isRotated: !state.isRotated };
    default:
      return state;
  }
};

/**
 * Reducer for managing the size filter state.
 * It handles toggling the visibility of the size filter and selecting a size.
 */
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

/**
 * Reducer for managing the color filter state.
 * It handles toggling the visibility of the color filter and selecting a color.
 */
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

/**
 * Reducer for managing the type filter state.
 * It handles toggling the visibility of the type filter.
 */
const typeReducer = (state = initialState.type, action) => {
  switch (action.type) {
    case "TOGGLE_TYPE":
      return { ...state, isOpen: !state.isOpen, isRotated: !state.isRotated };
    default:
      return state;
  }
};

/**
 * Reducer for managing the gender filter state.
 * It handles toggling the visibility of the gender filter and selecting a gender.
 */
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

/**
 * Reducer for managing the price filter state.
 * It handles toggling the visibility of the price filter and updating the price value.
 */
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
/**
 * Root reducer that combines all individual reducers for the Redux store.
 */
const rootReducer = combineReducers({
  refine: refineReducer,
  size: sizeReducer,
  color: colorReducer,
  type: typeReducer,
  gender: genderReducer,
  price: priceReducer,
});

// Create the store
/**
 * Create the Redux store with the root reducer.
 */
const store = createStore(rootReducer);

export default store;

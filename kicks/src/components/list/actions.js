/**
 * Action creator to toggle the refine filter visibility.
 */
export const toggleRefine = () => ({ type: "TOGGLE_REFINE" });

/**
 * Action creator to toggle the size filter visibility.
 */
export const toggleSize = () => ({ type: "TOGGLE_SIZE" });

/**
 * Action creator to toggle the color filter visibility.
 */
export const toggleColor = () => ({ type: "TOGGLE_COLOR" });

/**
 * Action creator to toggle the type filter visibility.
 */
export const toggleType = () => ({ type: "TOGGLE_TYPE" });

/**
 * Action creator to toggle the gender filter visibility.
 */
export const toggleGender = () => ({ type: "TOGGLE_GENDER" });

/**
 * Action creator to toggle the price filter visibility.
 */
export const togglePrice = () => ({ type: "TOGGLE_PRICE" });

/**
 * Action creator to select a size filter.
 * @param {string} size - The size to select.
 */
export const selectSize = (size) => ({ type: "SELECT_SIZE", payload: size });

/**
 * Action creator to select a color filter.
 * @param {string} color - The color to select.
 */
export const selectColor = (color) => ({
  type: "SELECT_COLOR",
  payload: color,
});

/**
 * Action creator to select a gender filter.
 * @param {string} gender - The gender to select.
 */
export const selectGender = (gender) => ({
  type: "SELECT_GENDER",
  payload: gender,
});

/**
 * Action creator to update the price filter value.
 * @param {number} price - The price value to set.
 */
export const updatePrice = (price) => ({
  type: "UPDATE_PRICE",
  payload: price,
});

export const toggleRefine = () => ({ type: "TOGGLE_REFINE" });
export const toggleSize = () => ({ type: "TOGGLE_SIZE" });
export const toggleColor = () => ({ type: "TOGGLE_COLOR" });
export const toggleType = () => ({ type: "TOGGLE_TYPE" });
export const toggleGender = () => ({ type: "TOGGLE_GENDER" });
export const togglePrice = () => ({ type: "TOGGLE_PRICE" });
export const selectSize = (size) => ({ type: "SELECT_SIZE", payload: size });
export const selectColor = (color) => ({
  type: "SELECT_COLOR",
  payload: color,
});
export const selectGender = (gender) => ({
  type: "SELECT_GENDER",
  payload: gender,
});
export const updatePrice = (price) => ({
  type: "UPDATE_PRICE",
  payload: price,
});

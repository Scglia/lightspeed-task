import { combineReducers } from "redux";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/ActionTypes";

const addedIds = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.payload.productId) !== -1) {
        return state;
      }
      return [...state, action.payload.productId];

    case REMOVE_FROM_CART:
      if (action.payload.updatedQuantity === 0) {
        // if there's none left in the cart, remove the productId from the array
        return state.filter(element => element !== action.payload.productId);
      }
      return state;

    default:
      return state;
  }
};

const quantityById = (state = {}, action) => {
  let productId;
  switch (action.type) {
    case ADD_TO_CART:
      productId = action.payload.productId;
      return { ...state, [productId]: (state[productId] || 0) + 1 };

    case REMOVE_FROM_CART:
      productId = action.payload.productId;
      return {
        ...state,
        [productId]: state[productId] - action.payload.quantityToRemove
      };
    default:
      return state;
  }
};

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0;

export const getAddedIds = state => state.addedIds;

export default combineReducers({
  addedIds,
  quantityById
});

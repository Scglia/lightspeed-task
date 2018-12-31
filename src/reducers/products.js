import { combineReducers } from "redux";
import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  ADD_TO_CART,
  REMOVE_FROM_CART
} from "../constants/ActionTypes";

const initialProductFetcherState = {
  loading: false,
  error: null
};

// REDUCERS
const fetcher = (state = initialProductFetcherState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_BEGIN:
      // Mark the state as "loading"
      // Reset any errors
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_PRODUCTS_SUCCESS:
      // All done: set loading "false".
      // Replace the items with the ones from the server
      return {
        ...state,
        loading: false
      };

    case FETCH_PRODUCTS_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error
      // Set `items` to empty.
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  let productId, product;
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        ...action.payload.products.reduce((obj, product) => {
          obj[product._id] = product;
          return obj;
        }, {})
      };
    case ADD_TO_CART:
      productId = action.payload.productId;
      product = state[productId];

      return {
        ...state,
        [productId]: {
          ...product,
          stock: {
            ...product.stock,
            remaining: product.stock.remaining - 1
          }
        }
      };
    case REMOVE_FROM_CART:
      productId = action.payload.productId;
      product = state[productId];

      return {
        ...state,
        [productId]: {
          ...product,
          stock: {
            ...product.stock,
            remaining: product.stock.remaining + action.payload.quantityToRemove
          }
        }
      };
    default:
      return state;
  }
};

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return action.payload.products.map(product => product._id);
    default:
      return state;
  }
};

export default combineReducers({
  fetcher,
  byId,
  visibleIds
});

// GETTERS
export const getProduct = (state, id) => state.byId[id];

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id));

import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART
} from "../constants/ActionTypes.js";

import * as api from "../api";

// PRODUCTS
export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export const fetchProducts = () => {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return api
      .fetchProducts()
      .then(json => {
        dispatch(fetchProductsSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
};

// CART
export const addToCart = productId => ({
  type: ADD_TO_CART,
  payload: { productId }
});

export const removeFromCartAction = ({
  productId,
  quantity,
  quantityToRemove
}) => ({
  type: REMOVE_FROM_CART,
  payload: {
    productId,
    updatedQuantity: quantity - quantityToRemove,
    quantityToRemove
  }
});

// adds the product quantity to the payload
export const removeFromCart = (productId, quantityToRemove = 1) => {
  return (dispatch, getState) => {
    const { cart } = getState();
    dispatch(
      removeFromCartAction({
        productId,
        quantity: cart.quantityById[productId],
        quantityToRemove
      })
    );
  };
};

export const clearCart = () => ({
  type: CLEAR_CART
});

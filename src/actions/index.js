import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from "../ActionTypes.js";

import * as api from "../api";

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
    api
      .fetchProducts()
      .then(json => {
        dispatch(fetchProductsSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
};

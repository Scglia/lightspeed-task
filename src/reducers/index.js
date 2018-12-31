import { combineReducers } from "redux";
import products, * as fromProducts from "./products";
import cart, * as fromCart from "./cart";

export default combineReducers({
  products,
  cart
});

const getAddedIdsFromCart = state => fromCart.getAddedIds(state.cart);
const getQuantityFromCart = (state, productId) =>
  fromCart.getQuantity(state.cart, productId);
const getProduct = (state, productId) =>
  fromProducts.getProduct(state.products, productId);

export const getCartProducts = state =>
  getAddedIdsFromCart(state).map(id => ({
    ...getProduct(state, id),
    quantityInCart: getQuantityFromCart(state, id)
  }));

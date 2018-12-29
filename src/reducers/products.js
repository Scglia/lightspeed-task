const initialState = {
  items: [],
  loading: false,
  error: null
};

const productFetcher = (state = initialState, action) => {
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
        loading: false,
        items: action.payload.products
      };

    case FETCH_PRODUCTS_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error
      // Set `items` to empty.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:
      return state;
  }
};

const products = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default combineReducers({
  productFetcher,
  products
});

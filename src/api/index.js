import {
  fetchProductsBegin,
  fetchProductsSuccess,
  fetchProductsError
} from "../actions";

export const fetchProducts = () => {
  return new Promise((resolve, reject) => {
    fetch("https://next.json-generator.com/api/json/get/4kiDK7gxZ")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        resolve(json.products);
      })
      .catch(error => reject(error));
  });
};

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

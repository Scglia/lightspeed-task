export const fetchProducts = () => {
  return new Promise((resolve, reject) => {
    return fetch("https://next.json-generator.com/api/json/get/4kiDK7gxZ")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        resolve(json);
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

import React from "react";

const AddToCartButton = ({ addToCart, isSoldOut }) => {
  if (isSoldOut) {
    return <button disabled>Sold out</button>;
  }

  return <button onClick={addToCart}>Add to cart</button>;
};

export default AddToCartButton;

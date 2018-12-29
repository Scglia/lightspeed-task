import React from "react";

const ProductDetailContainer = ({ match }) => (
  <div>
    <h2>Product Detail {match.params.productId}</h2>
  </div>
);

export default ProductDetailContainer;

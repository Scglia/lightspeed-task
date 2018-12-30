import React from "react";
import { connect } from "react-redux";
import { getProduct } from "../reducers/products";

const ProductDetailContainer = ({ error, loading, product }) => {
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (product === undefined) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>Product Detail</h2>
      {product.description}, {product.image}
    </div>
  );
};

const mapStateToProps = (state, { match }) => ({
  product: getProduct(state.products, match.params.productId),
  loading: state.products.fetcher.loading,
  error: state.products.fetcher.error
});

export default connect(mapStateToProps)(ProductDetailContainer);

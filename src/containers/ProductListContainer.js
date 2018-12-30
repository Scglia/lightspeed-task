import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getVisibleProducts } from "../reducers/products";

const ProductListContainer = ({ error, loading, products }) => {
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product._id}>
          <Link to={`/detail/${product._id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
  loading: state.products.fetcher.loading,
  error: state.products.fetcher.error
});

export default connect(mapStateToProps)(ProductListContainer);

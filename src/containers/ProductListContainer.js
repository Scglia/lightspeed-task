import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getVisibleProducts } from "../reducers/products";
import ProductCard from "../components/ProductCard";

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: middle;
  margin: 0 -15px; // compensates for cards padding
`;

const ProductCardStyled = styled.div`
  width: 300px;
  padding: 15px;
`;

const ProductListContainer = ({ error, loading, products }) => {
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ProductWrapper>
      {products.map(product => (
        <ProductCardStyled>
          <ProductCard
            key={product._id}
            product={product}
            onClick={() => null}
          />
        </ProductCardStyled>
      ))}
    </ProductWrapper>
  );
};

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
  loading: state.products.fetcher.loading,
  error: state.products.fetcher.error
});

export default connect(mapStateToProps)(ProductListContainer);

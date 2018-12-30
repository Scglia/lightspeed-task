import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getProduct } from "../reducers/products";

const ProductDetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  margin-top: 10px;
`;

const Image = styled.img`
  height: 300px;
  width: 300px;
  flex-shrink: 0;
`;

const Details = styled.div`
  padding: 0 50px;

  div {
    padding-bottom: 10px;
  }
`;

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

  const { description, image, title, stock, price } = product;

  return (
    <ProductDetailWrapper>
      <Image src={image} alt={`Illustration for ${title}`} />
      <Details>
        <h2>{title}</h2>
        <div>{description}</div>
        <div>Quantity left: {stock.remaining}</div>
        <div>Price: {price}</div>
        <button>Add to cart</button>
      </Details>
    </ProductDetailWrapper>
  );
};

const mapStateToProps = (state, { match }) => ({
  product: getProduct(state.products, match.params.productId),
  loading: state.products.fetcher.loading,
  error: state.products.fetcher.error
});

export default connect(mapStateToProps)(ProductDetailContainer);

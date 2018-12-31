import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getCartProducts } from "../reducers";

const CartWrapper = styled.div``;

const CartItem = styled.div``;

const Cart = ({ error, loading, products }) => {
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <CartWrapper>
      {products.map(product => (
        <CartItem>{product.title}</CartItem>
      ))}
    </CartWrapper>
  );
};

const mapStateToProps = state => ({
  products: getCartProducts(state)
});

export default connect(mapStateToProps)(Cart);

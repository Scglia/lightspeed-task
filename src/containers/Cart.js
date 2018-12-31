import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getCartProducts } from "../reducers";
import { removeFromCart, clearCart } from "../actions";

const CartWrapper = styled.div`
  margin-top: 10px;
`;

const CartItem = styled.tr`
  td {
    vertical-align: top;
    padding-right: 10px;
  }
`;

const Title = styled.td`
  width: 200px;
`;

const Cart = ({ error, loading, products, removeFromCart, clearCart }) => {
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (products.length === 0) {
    return <CartWrapper>Your cart is empty</CartWrapper>;
  }

  return (
    <CartWrapper>
      <table>
        <tbody>
          {products.map(product => (
            <CartItem key={product._id}>
              <Title>{product.title}</Title>
              <td>Quantity: {product.quantityInCart}</td>
              <td>
                <button onClick={() => removeFromCart(product._id)}>
                  Remove
                </button>
              </td>
            </CartItem>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={clearCart}>Checkout</button>
      </div>
    </CartWrapper>
  );
};

const mapStateToProps = state => ({
  products: getCartProducts(state)
});

const mapDispatchToProps = dispatch => ({
  removeFromCart: productId => dispatch(removeFromCart(productId)),
  clearCart: () => dispatch(clearCart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

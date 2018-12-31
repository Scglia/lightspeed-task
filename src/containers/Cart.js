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

const CheckoutButton = styled.button`
  margin-top: 10px;
`;

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSuccessMessageDisplayed: false };
    this.handleCheckout = this.handleCheckout.bind(this);
  }

  handleRemove = productId => () => this.props.removeFromCart(productId);

  toggleSuccessMessage() {
    this.setState({
      isSuccessMessageDisplayed: !this.state.isSuccessMessageDisplayed
    });
  }

  handleCheckout() {
    this.props.clearCart();
    this.toggleSuccessMessage();
  }

  render() {
    const { error, loading, products } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    if (this.state.isSuccessMessageDisplayed) {
      return <CartWrapper>Checkout complete</CartWrapper>;
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
                  <button onClick={this.handleRemove(product._id)}>
                    Remove
                  </button>
                </td>
              </CartItem>
            ))}
          </tbody>
        </table>
        <div>
          <CheckoutButton onClick={this.handleCheckout}>
            Checkout
          </CheckoutButton>
        </div>
      </CartWrapper>
    );
  }
}

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

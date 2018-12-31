import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getProduct } from "../reducers/products";
import { addToCart } from "../actions/";
import AddToCartButton from "../components/AddToCartButton";

const ProductDetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  margin-top: 10px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.img`
  height: 300px;
  width: 300px;
  flex-shrink: 0;
`;

const Details = styled.div`
  padding-left: 50px;

  @media (max-width: 800px) {
    padding-left: 0px;
  }

  div {
    padding-bottom: 10px;
  }
`;

class ProductDetailContainer extends React.Component {
  handleAddToCart = id => () => this.props.addToCart(id);

  render() {
    const { error, loading, product } = this.props;
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    if (product === undefined) {
      return <div>Product not found</div>;
    }

    const { description, image, title, stock, price, _id } = product;

    return (
      <ProductDetailWrapper>
        <Image src={image} alt={`Illustration for ${title}`} />
        <Details>
          <h2>{title}</h2>
          <div>{description}</div>
          <div>Quantity left: {stock.remaining}</div>
          <div>Price: {price}</div>
          <AddToCartButton
            addToCart={this.handleAddToCart(_id)}
            isSoldOut={stock.remaining === 0}
          />
        </Details>
      </ProductDetailWrapper>
    );
  }
}

const mapStateToProps = (state, { match }) => ({
  product: getProduct(state.products, match.params.productId),
  loading: state.products.fetcher.loading,
  error: state.products.fetcher.error
});

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductDetailContainer);

import React from "react";
import { connect } from "react-redux";
import { getProduct } from "../reducers/products";
import { fetchProducts } from "../actions";

class ProductDetailContainer extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { error, loading, product, match } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    if (product === undefined) {
      return null;
    }

    return (
      <div>
        <h2>Product Detail</h2>
        {product.description}, {product.image}
      </div>
    );
  }
}

const mapStateToProps = (state, { match }) => ({
  product: getProduct(state.products, match.params.productId),
  loading: state.products.fetcher.loading,
  error: state.products.fetcher.error
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => {
    dispatch(fetchProducts());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailContainer);

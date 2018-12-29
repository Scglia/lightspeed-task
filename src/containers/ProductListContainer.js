import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions";
import { getVisibleProducts } from "../reducers/products";

class ProductListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { error, loading, products } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {products.map(product => (
          <li key={product._id}>{product.title}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
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
)(ProductListContainer);

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductListContainer from "./ProductListContainer";
import ProductDetailContainer from "./ProductDetailContainer";
import Cart from "./Cart";
import Layout from "../components/Layout";

const App = () => (
  <Router>
    <Layout>
      <Route exact path="/" component={ProductListContainer} />
      <Route path="/detail/:productId" component={ProductDetailContainer} />
      <Route path="/cart/" component={Cart} />
    </Layout>
  </Router>
);

export default App;

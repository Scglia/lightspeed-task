import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductListContainer from "./ProductListContainer";
import ProductDetailContainer from "./ProductDetailContainer";
import Layout from "../components/Layout";

const App = () => (
  <Router>
    <Layout>
      <Route exact path="/" component={ProductListContainer} />
      <Route path="/detail/:productId" component={ProductDetailContainer} />
    </Layout>
  </Router>
);

export default App;

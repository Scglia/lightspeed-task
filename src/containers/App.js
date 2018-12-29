import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProductListContainer from "./ProductListContainer";
import ProductDetailContainer from "./ProductDetailContainer";

const App = () => (
  <Router>
    <div>
      <h1>Shopping Cart Example</h1>
      <nav>
        <Link to="/">Products</Link>
      </nav>
      <hr />
      <Route exact path="/" component={ProductListContainer} />
      <Route path="/detail/:productId" component={ProductDetailContainer} />
      <hr />
    </div>
  </Router>
);

export default App;

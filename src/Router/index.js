import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "../views/homepage";
import ProductDetail from "../views/productDetail";

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/product" exact component={ProductDetail} />
      </Switch>
    </Router>
  );
};

export default Routing;

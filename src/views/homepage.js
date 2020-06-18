import React, { Component } from "react";
import Product from "../components/Product";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div className="products-container box-wrap">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    );
  }
}

export default Homepage;

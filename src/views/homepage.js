import React, { Component } from "react";
import Product from "../components/Product";
import { connect } from "react-redux";
import Skeleton from "../components/Skeleton";
class Homepage extends Component {
  state = {};
  render() {
    const { products } = this.props;

    return (
      <div className="products-container box-wrap">
        {products.length !== 0 ? (
          products.map((prod) => <Product product={prod} key={prod.id} />)
        ) : (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ products }) => {
  return {
    products: Object.values(products),
  };
};

export default connect(mapStateToProps)(Homepage);

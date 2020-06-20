import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./views/homepage";
import ProductDetail from "./views/productDetail";
import AddProduct from "./views/addProduct";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/initialData";
import LoadingBar from "react-redux-loading";

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <div className="grid-container">
          <NavBar />
          <div className="main">
            <div className="loading-bar">
              <LoadingBar />
            </div>
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/product/:id" exact component={ProductDetail} />
              <Route path="/add-product" exact component={AddProduct} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect()(App);

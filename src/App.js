import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./views/homepage";
import ProductDetail from "./views/productDetail";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="grid-container">
          <NavBar />
          <div className="main">
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/product" exact component={ProductDetail} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

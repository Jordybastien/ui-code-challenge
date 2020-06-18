import React, { Component } from "react";
import NavBar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div className="grid-container">
        <NavBar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Homepage;

import React from "react";
import Slider from "../components/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import ReactLoading from "react-loading";

const ProductDetail = ({ product }) => {

  if (!product) {
    return (
      <div className="loading-container">
        <ReactLoading
          type={"bars"}
          color={"#163172"}
          height={"10%"}
          width={"10%"}
        />
      </div>
    );
  }
  const { name, price, images, specs, description } = product;

  return (
    <div className="product-details-container">
      <div className="product-details">
        <div className="product-details-img-cont">
          <Slider images={images} />
        </div>
        <div className="product-details-labels">
          <div className="single-text-price">
            <span className="prod-price-text">
              {price.toLocaleString()} RWF
            </span>
          </div>
          <div>
            <span className="prod-name-text">{name}</span>
          </div>
          <div>
            <ul className="custom-list">
              {specs.map((spec, index) => (
                <li key={index}>
                  <div className="single-text">
                    <FontAwesomeIcon
                      icon={faClipboard}
                      size="1x"
                      color="#163172"
                    />
                    <span className="prod-spec-text">{spec}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="btn-container">
            <button className="purchase-btn">Purchase</button>
          </div>
        </div>
      </div>
      <div className="product-description">
        <div className="prod-desc-cont">
          <span className="prod-desc-title">Product description</span>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

const mapStateToProps = ({ products }, props) => {
  const { id } = props.match.params;

  return {
    product: products && products[id],
  };
};

export default connect(mapStateToProps)(ProductDetail);

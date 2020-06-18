import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faTag } from "@fortawesome/free-solid-svg-icons";

const Product = () => {
  return (
    <div className="product-card other-cards">
      <div className="product-card-image">
        <img
          src={
            "https://res.cloudinary.com/dodfpnbik/image/upload/v1572441788/4_w3o5fj.jpg"
          }
          className="img-card"
          alt="product"
        />
      </div>
      <div className="product-card-details">
        <div>
          <FontAwesomeIcon icon={faClipboard} size="1x" color="#163172" />
          <span className="prod-card-text">Product Name</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faTag} size="1x" color="#163172" />
          <span className="prod-card-text">Price</span>
        </div>
      </div>
    </div>
  );
};

export default Product;

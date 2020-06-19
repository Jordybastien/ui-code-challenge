import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faTag } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { id, name, price, images } = product;
  return (
    <Link to={`/product/${id}`}>
      <div className="product-card other-cards">
        <div className="product-card-image">
          <img src={images[0]} className="img-card" alt="product" />
        </div>
        <div className="product-card-details">
          <div>
            <FontAwesomeIcon icon={faClipboard} size="1x" color="#163172" />
            <span className="prod-card-text">{name}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faTag} size="1x" color="#163172" />
            <span className="prod-card-text">{price.toLocaleString()} RWF</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;

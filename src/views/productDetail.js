import React from "react";
import Slider from "../components/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";

const ProductDetail = () => {
  return (
    <div className="product-details-container">
      <div className="product-details">
        <div className="product-details-img-cont">
          <Slider />
        </div>
        <div className="product-details-labels">
          <div className="single-text-price">
            <span className="prod-price-text">70,000,000 RWF</span>
          </div>
          <div>
            <span className="prod-name-text">Product Name</span>
          </div>
          <div>
            <ul className="custom-list">
              <li>
                <div className="single-text">
                  <FontAwesomeIcon
                    icon={faClipboard}
                    size="1x"
                    color="#163172"
                  />
                  <span className="prod-spec-text">Spec</span>
                </div>
              </li>
              <li>
                <div className="single-text">
                  <FontAwesomeIcon
                    icon={faClipboard}
                    size="1x"
                    color="#163172"
                  />
                  <span className="prod-spec-text">Spec</span>
                </div>
              </li>
              <li>
                <div className="single-text">
                  <FontAwesomeIcon
                    icon={faClipboard}
                    size="1x"
                    color="#163172"
                  />
                  <span className="prod-spec-text">Spec</span>
                </div>
              </li>
              <li>
                <div className="single-text">
                  <FontAwesomeIcon
                    icon={faClipboard}
                    size="1x"
                    color="#163172"
                  />
                  <span className="prod-spec-text">Spec</span>
                </div>
              </li>
            </ul>
          </div>
          <div className='btn-container'>
            <button className="purchase-btn">Purchase</button>
          </div>
        </div>
      </div>
      <div className="product-description">
        <div className="prod-desc-cont">
          <span className="prod-desc-title">Product description</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;

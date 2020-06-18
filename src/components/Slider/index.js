import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  return (
    <div className="slider-container">
      <div className="slider-thumbnails">
        <ul className="slider-list">
          <li className="custom-list">
            <div className="arrow-up">
              <FontAwesomeIcon icon={faAngleUp} size="3x" color="#fff" />
            </div>
          </li>
          <li className="custom-list">
            <img
              src={
                "https://res.cloudinary.com/dodfpnbik/image/upload/v1572441788/4_w3o5fj.jpg"
              }
              className="img-thumbnail"
              alt="product"
            />
          </li>
          <li className="custom-list">
            <img
              src={
                "https://res.cloudinary.com/dodfpnbik/image/upload/v1572441788/4_w3o5fj.jpg"
              }
              className="img-thumbnail"
              alt="product"
            />
          </li>
          <li className="custom-list">
            <img
              src={
                "https://res.cloudinary.com/dodfpnbik/image/upload/v1572441788/4_w3o5fj.jpg"
              }
              className="img-thumbnail"
              alt="product"
            />
          </li>
          <li className="custom-list">
            <img
              src={
                "https://res.cloudinary.com/dodfpnbik/image/upload/v1572441788/4_w3o5fj.jpg"
              }
              className="img-thumbnail"
              alt="product"
            />
          </li>
          <li className="custom-list">
            <div className="arrow-down">
              <FontAwesomeIcon icon={faAngleDown} size="3x" color="#fff" />
            </div>
          </li>
        </ul>
      </div>
      <div className="slider-main-image">
        <img
          src={
            "https://res.cloudinary.com/dodfpnbik/image/upload/v1572441788/4_w3o5fj.jpg"
          }
          className="main-image"
          alt="product"
        />
      </div>
    </div>
  );
};

export default Slider;

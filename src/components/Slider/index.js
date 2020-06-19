import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Slider = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const slideDown = () => {
    if (images[current + 1]) {
      setCurrent(current + 1);
    }
  };
  const slideUp = () => {
    if (images[current - 1]) {
      setCurrent(current - 1);
    }
  };
  return (
    <div className="slider-container">
      <div className="slider-thumbnails">
        <ul className="slider-list">
          <li className="custom-list" onClick={() => slideUp()}>
            <div className="arrow-up">
              <FontAwesomeIcon icon={faAngleUp} size="3x" color="#fff" />
            </div>
          </li>
          {images.map((image, index) => (
            <li
              className={`custom-list ${
                current === index && "active-thumbnail"
              }`}
              key={index}
              onClick={() => setCurrent(index)}
            >
              <img src={image} className="img-thumbnail" alt="product" />
            </li>
          ))}

          <li className="custom-list" onClick={() => slideDown()}>
            <div className="arrow-down">
              <FontAwesomeIcon icon={faAngleDown} size="3x" color="#fff" />
            </div>
          </li>
        </ul>
      </div>
      <div className="slider-main-image">
        <img src={images[current]} className="main-image" alt="product" />
      </div>
    </div>
  );
};

export default Slider;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LoadingBar from "react-redux-loading";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isHome, setIsHome] = useState(true);

  return (
    <>
      <LoadingBar />
      <div className="header">
        <div>Logo Here</div>
        <div>
          <ul className="menu desktop">
            <li
              className={`${isHome && "active-menu"} menu-item`}
              onClick={() => setIsHome(true)}
            >
              <NavLink to="/" className="menu-item">
                Home
              </NavLink>
            </li>
            <li
              className={`${!isHome && "active-menu"} menu-item`}
              onClick={() => setIsHome(false)}
            >
              <NavLink to="/add-product" className="menu-item">
                Add Product
              </NavLink>
            </li>
          </ul>
          <div
            className="mobile"
            onClick={() => setIsActive(!isActive)}
            onMouseLeave={() => setIsActive(false)}
          >
            <FontAwesomeIcon icon={faBars} size="2x" color="#163172" />
          </div>
          <div>
            {isActive && (
              <ul className="menu mobile-menu">
                <li className="menu-item-mobile">
                  <NavLink to="/" className="menu-item">
                    Home
                  </NavLink>
                </li>
                <li className="menu-item-mobile">
                  <NavLink to="/add-product" className="menu-item">
                    Add Product
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

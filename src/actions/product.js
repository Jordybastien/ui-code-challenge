import { FETCH_PRODUCTS, ADD_PRODUCT } from "./actionTypes";

export const fetchProducts = (products) => {
  return {
    type: FETCH_PRODUCTS,
    products,
  };
};

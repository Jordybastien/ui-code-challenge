import { FETCH_PRODUCTS, ADD_PRODUCT } from "./actionTypes";
import { saveProduct } from "../utils/data";

export const fetchProducts = (products) => {
  return {
    type: FETCH_PRODUCTS,
    products,
  };
};

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    product,
  };
};

export const handleNewProduct = (newProduct) => {
  return async (dispatch) => {
    const product = await saveProduct(newProduct);
    dispatch(addProduct(product));
    return product;
  };
};

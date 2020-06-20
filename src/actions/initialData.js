import { showLoading, hideLoading } from "react-redux-loading";
import { getProducts } from "../utils/data";
import { fetchProducts } from "./product";

const getInitialData = async () => {
  const [products] = await Promise.all([getProducts()]);

  return {
    products,
  };
};

export const handleInitialData = () => {
  return async (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(({ products }) => {
        dispatch(fetchProducts(products));
        dispatch(hideLoading());
      })
      .catch(() => dispatch(hideLoading()));
  };
};

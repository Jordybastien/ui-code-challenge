import { FETCH_PRODUCTS, ADD_PRODUCT } from "../actions/actionTypes";

export default function products(state = {}, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        ...action.products,
      };
    default:
      return state;
  }
}

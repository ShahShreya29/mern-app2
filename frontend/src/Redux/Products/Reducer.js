import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
} from "./Action.js";
const initialState = {
  products: [],
  product: null,
  error: null,
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
    case GET_PRODUCT_REQUEST:
      return { ...state, error: null };

    case GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };

    case GET_PRODUCT_SUCCESS:
      return { ...state, product: action.payload };
  
    case GET_PRODUCTS_FAIL:
    case GET_PRODUCT_FAIL:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

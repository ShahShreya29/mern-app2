// import api from "../../Config/apiConfig";
import axios from "axios";

export const GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST";
export const GET_PRODUCT_FAIL = "GET_PRODUCT_FAIL";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";

export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAIL = "GET_PRODUCTS_FAIL";

export const CREATE_PRODUCTS_REQUEST = "CREATE_PRODUCTS_REQUEST";
export const CREATE_PRODUCTS_SUCCESS = "CREATE_PRODUCTS_SUCCESS";
export const CREATE_PRODUCTS_FAIL = "CREATE_PRODUCTS_FAIL";

export const REMOVE_PRODUCTS_REQUEST = "REMOVE_PRODUCTS_REQUEST";
export const REMOVE_PRODUCTS_SUCCESS = "REMOVE_PRODUCTS_SUCCESS";
export const REMOVE_PRODUCTS_FAIL = "REMOVE_PRODUCTS_FAIL";

const API_URL = "http://localhost:8080/api/";

export const getProducts = (data) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST });
  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    stock,
    sort,
    category,
    pageNumber,
    pageSize,
  } = data;
  try {
    console.log("here");
    const response = await axios.get(
      `${API_URL}products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
    console.log("here1");
    console.log("product data", response);
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAIL, payload: error.message });
  }
};

export const getProduct = (data) => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST });
  const { productId } = data;
  try {
    const response = await axios.get(`${API_URL}products/${productId}`);
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_PRODUCT_FAIL, payload: error.message });
  }
};

export const createProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PRODUCTS_REQUEST });
    const response = await axios.post(
      `${API_URL}/admin/products/`,
      product.response
    );
    dispatch({ type: CREATE_PRODUCTS_SUCCESS, payload: response.product });
  } catch (error) {
    dispatch({ type: CREATE_PRODUCTS_FAIL, payload: error.message });
  }
};



export const removeProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_PRODUCTS_REQUEST });
    const response = await axios.delete(
      `${API_URL}/admin/products/${productId}`,
    );
    dispatch({ type: REMOVE_PRODUCTS_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: REMOVE_PRODUCTS_FAIL, payload: error.message });
  }
};

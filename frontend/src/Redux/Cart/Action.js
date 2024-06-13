import api from "../../Config/apiConfig";

export const ADD_ITEM_CART_REQUEST = "ADD_ITEM_CART_REQUEST";
export const ADD_ITEM_CART_FAIL = "ADD_ITEM_CART_FAIL";
export const ADD_ITEM_CART_SUCCESS = " ADD_ITEM_CART_SUCCESS ";

export const GET_CART_REQUEST = "GET_CART_REQUEST";
export const GET_CART_SUCCESS = "GET_CART_SUCCESS";
export const GET_CART_FAIL = "GET_CART_FAIL  ";

export const REMOVE_ITEM_REQUEST = "REMOVE_ITEM_REQUEST";
export const REMOVE_ITEM_FAIL = "REMOVE_ITEM_FAIL";
export const REMOVE_ITEM_SUCCESS = " REMOVE_ITEM_SUCCESS ";

export const UPDATE_ITEM_REQUEST = "UPDATE_ITEM_REQUEST";
export const UPDATE_ITEM_FAIL = "UPDATE_ITEM_FAIL";
export const UPDATE_ITEM_SUCCESS = " UPDATE_ITEM_SUCCESS ";

export const API_URL = "http://localhost:8080/api";

export const GetCartItem = () => async (dispatch) => {
  dispatch({ GET_CART_REQUEST });
  try {
    const { response } = await api.get("/cart");
    dispatch({ type: GET_CART_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: GET_CART_FAIL, payload: error.message });
  }
};

export const addCartItem = (data) => async (dispatch) => {
  dispatch({ ADD_ITEM_CART_REQUEST });
  try {
    const { response } = await api.post("/cart/add", data.response);
    dispatch({ type: ADD_ITEM_CART_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: ADD_ITEM_CART_FAIL, payload: error.message });
  }
};

export const RemoveCartItem = (data) => async (dispatch) => {
  dispatch({ REMOVE_ITEM_REQUEST });
  try {
    const { response } = await api.delete(`/cartItems/${data.cartItemId}`);
    dispatch({ type: REMOVE_ITEM_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: REMOVE_ITEM_FAIL, payload: error.message });
  }
};

export const UpdateCartItem = (data) => async (dispatch) => {
  dispatch({ UPDATE_ITEM_REQUEST });
  try {
    const { response } = await api.put(
      `/cartItems/${data.cartItemId}`,
      data.response
    );
    dispatch({ type: UPDATE_ITEM_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: UPDATE_ITEM_FAIL, payload: error.message });
  }
};

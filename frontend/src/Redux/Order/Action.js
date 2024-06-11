import api from "../../Config/apiConfig";

export const CREATE_ORDER_REQUEST = "CREATE_ORDER_REQUEST";
export const CREATE_ORDER_FAIL = "CREATE_ORDER_FAIL";
export const CREATE_ORDER_SUCCESS = " CREATE_ORDER_SUCCESS ";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAIL = "GET_ORDER_FAIL  ";

export const User_ORDER_REQUEST = "User_ORDER_REQUEST";
export const User_ORDER_FAIL = "User_ORDER_FAIL";
export const User_ORDER_SUCCESS = " User_ORDER_SUCCESS ";

export const API_URL = "http://localhost:8080/api/";

export const CreateOrder = (data) => async (dispatch) => {
  dispatch({ CREATE_ORDER_REQUEST });
  try {
    const { data } = await api.post("/orders/", data.address);
    if (data.id) {
      data.navigate({ search: `step-3&order id-${data.id}` });
    }

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_ORDER_FAIL, payload: error.message });
  }
};

export const GetOrder = (orderId) => async (dispatch) => {
  dispatch({ GET_ORDER_REQUEST });
  try {
    const { data } = await api.get(`/orders${orderId}`, data);
    dispatch({ type: GET_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ORDER_FAIL, payload: error.message });
  }
};

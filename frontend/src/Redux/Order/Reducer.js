import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  GET_ORDER_FAIL,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
} from "../Order/Action";
const initialState = {
  orders: [],
  order: null,
  error: null,
};

export const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return {...state, error: null };
    case CREATE_ORDER_SUCCESS:
      return {
        success: true,
        ...state,
        error: null,
        order: action.payload,
      };
    case CREATE_ORDER_FAIL:
      return { ...state, error: action.payload };

    case GET_ORDER_REQUEST:
      return { ...state, error: null };
    case GET_ORDER_SUCCESS:
      return {
        ...state,
        error: null,
        order: action.payload,
      };

    case GET_ORDER_FAIL:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

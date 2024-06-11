import {
  ADD_ITEM_CART_FAIL,
  ADD_ITEM_CART_REQUEST, 
  ADD_ITEM_CART_SUCCESS,
  GET_CART_FAIL,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_ITEM_FAIL,
  REMOVE_ITEM_REQUEST,
  REMOVE_ITEM_SUCCESS,
  UPDATE_ITEM_FAIL,
  UPDATE_ITEM_REQUEST,
  UPDATE_ITEM_SUCCESS,
} from "../Cart/Action";
const initialState = {
  cart: null,
  cartItems: [],
  error: null,
};

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_CART_REQUEST:
      return { ...state, error: null };
    case ADD_ITEM_CART_SUCCESS:
      return {
        ...state,
        error: null,
        cartItems: [...state.cartItems, action.payload.cartItems],
      };
    case ADD_ITEM_CART_FAIL:
      return { ...state, error: null, error: action.payload };

    case GET_CART_REQUEST:
      return { ...state, error: null };
    case GET_CART_SUCCESS:
      return {
        ...state,
        error: null,
        cartItems: [...state.cartItems, action.payload.cartItems],
      };

    case GET_CART_FAIL:
      return { ...state, error: null, error: action.payload };

    case REMOVE_ITEM_REQUEST:
    case UPDATE_ITEM_REQUEST:
      return { ...state, error: null };

    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        error: null,
      };

    case UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload ? action.payload : item
        ),
        error: null,
      };

    case REMOVE_ITEM_FAIL:
    case UPDATE_ITEM_FAIL:
      return { ...state, error: null, error: action.payload };

    default:
      return state;
  }
};

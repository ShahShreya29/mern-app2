import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './authAction';

const initialState = {
  isAuthenticated: false,
  token: localStorage.getItem('token'),
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.accessToken,
        loading: false,
        error: null,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        loading: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;

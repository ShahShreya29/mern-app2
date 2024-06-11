import axios from "axios";


export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const LOGOUT = 'LOGOUT';

const API_URL = 'http://localhost:8080/api/users/';

export const register = (formData) => async dispatch => {
  try {
    dispatch({ type: REGISTER_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const response = await axios.post(`${API_URL}signUp`, formData, config);
    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    localStorage.setItem('token', response.data.accessToken);
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const response = await axios.post(`${API_URL}signIn`, { email, password });
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    localStorage.setItem('token', response.data.accessToken);
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const logout = () => dispatch => {
  localStorage.removeItem('token');
  dispatch({ type: LOGOUT });
};

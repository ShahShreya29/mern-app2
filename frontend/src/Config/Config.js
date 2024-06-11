// axios.js
import axios from 'axios';
import store from './store';
import { refreshToken } from './services/userService'; // Import the refreshToken function

let isRefreshing = false; // Flag to track if token refresh is in progress
let refreshSubscribers = []; // Array to hold subscribers waiting for token refresh

// Function to refresh access token
const handleRefreshToken = async () => {
  try {
    const response = await refreshToken(store.getState().auth.refreshToken);
    const newAccessToken = response.data.accessToken;
    return newAccessToken;
  } catch (error) {
    throw error;
  }
};

axios.interceptors.request.use(
  async (config) => {
    const token = store.getState().auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Check if error is due to expired token and if refresh token is available
    if (error.response.status === 401 && !originalRequest._retry && store.getState().auth.refreshToken) {
      if (!isRefreshing) {
        isRefreshing = true;
        const newAccessToken = await handleRefreshToken();
        store.dispatch(/* Update the access token in Redux store */);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        refreshSubscribers.forEach((callback) => callback(newAccessToken));
        refreshSubscribers = [];
        isRefreshing = false;
        return axios(originalRequest);
      } else {
        return new Promise((resolve) => {
          refreshSubscribers.push((newAccessToken) => {
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            resolve(axios(originalRequest));
          });
        });
      }
    }
    return Promise.reject(error);
  }
);

export default axios;

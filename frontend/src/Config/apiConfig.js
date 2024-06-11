import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

api.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 419 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
            try {
                const response = await axios.post(`${API_URL}/refresh-token`, {}, {
                    headers: {
                        'Refresh-Token': refreshToken
                    }
                });
                const { accessToken, refreshToken: newRefreshToken } = response.data;
                localStorage.setItem('token', accessToken);
                localStorage.setItem('refreshToken', newRefreshToken);
                api.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
                originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
                return api(originalRequest);
            } catch (err) {
                return Promise.reject(err);
            }
        }
    }
    return Promise.reject(error);
});

export default api;

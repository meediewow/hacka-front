import axios from 'axios';

const api = axios.create({
    baseURL: 'https://hacka-back-47977b5b89a1.herokuapp.com/api',
});

api.interceptors.request.use(
    (config) => {
        const token = window.localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            window.localStorage.removeItem('token');
            window.location.href = '/login';
        }

        return Promise.reject(error);
    }
);

export default api;

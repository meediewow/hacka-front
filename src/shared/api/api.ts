import axios from 'axios';

const api = axios.create({
    baseURL: 'https://hacka-back-9d4b8881c943.herokuapp.com/api',
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
            window.location.href = '/login';
        }

        return Promise.reject(error);
    }
);

export default api;

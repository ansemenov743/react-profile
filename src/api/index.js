import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'http://localhost:8080/api/users/',
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem('jwtToken'));
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (res) => res,
  (err) => {
    let error;
    if (err.response) {
      error = err.response.data.message;
    } else {
      error = err.message;
    }
    throw new Error(error);
  },
);

export default instance;

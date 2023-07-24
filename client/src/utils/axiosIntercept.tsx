import axios from 'axios';
import { API_BASE_URL } from './apiService';

const ACCESS_TOKEN = window.localStorage.getItem('accessToken');
const netaxios = axios.create({
  baseURL: API_BASE_URL,
});

netaxios.interceptors.request.use(
  (config) => {
    const accessToken = ACCESS_TOKEN || '';
    if (accessToken !== '') {
      config.headers['Content-Type'] = 'application/json';
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default netaxios;

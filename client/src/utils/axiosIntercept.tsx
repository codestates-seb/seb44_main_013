// import { RootState } from '@/modules';
// import axios from 'axios';
// import { useSelector } from 'react-redux';

// const ACCESS_TOKEN = useSelector((state: RootState) => state.loginSlice.accesstoken);
// const aXios = axios.create({
//   baseURL: '',
// });

// aXios.interceptors.request.use(
//   (config) => {
//     const accessToken = '';
//     if (accessToken) {
//       config.headers['Content-Type'] = 'application/json';
//       config.headers['Authorization'] = `Bearer ${ACCESS_TOKEN}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

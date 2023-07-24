/* 2023-07-07 axios 요청 함수 - 김다함 */
// import { API_BASE_URL } from '@/app-config';
import axios, { RawAxiosRequestConfig, AxiosHeaders, AxiosError } from 'axios';
// axios.defaults.baseURL = API_BASE_URL;

//ec2-13-125-77-46.ap-northeast-2.compute.amazonaws.com:8080
export const API_BASE_URL = import.meta.env.MODE === 'development' ? '' : '/api';
console.log(import.meta.env);

export async function call(api: string, method: string, data?: any) {
  const TOKEN = window.localStorage.getItem('accessToken');
  const headers = new AxiosHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TOKEN}`,
  });

  const options: RawAxiosRequestConfig = {
    headers: headers,
    method: method,
    url: API_BASE_URL + api,
  };

  if (data) {
    options.data = JSON.stringify(data);
  }

  // 에러처리고려
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      //axios 에러 객체인 경우,
      const axiosError = error as AxiosError;
      //인증 오류 발 생 시 새로운 accessToken 발급 받아야 한다.
      //응답 데이터로 판별
      console.log(axiosError.message);
      console.log(axiosError.status);
    }
  }
}

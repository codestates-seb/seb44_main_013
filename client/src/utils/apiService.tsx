/* 2023-07-07 axios 요청 함수 - 김다함 */
// import { BASE_URL } from '@/app-config';
import axios, { RawAxiosRequestConfig, AxiosHeaders, AxiosError } from 'axios';
const ACCESS_TOKEN = 'accessToken';
export const API_BASE_URL =
  import.meta.env.MODE === 'development' ? 'https://api.portfolly.site' : 'https://api.portfolly.site';

export async function call(api: string, method: string, data?: any) {

  const accessToken = localStorage.getItem(ACCESS_TOKEN);

  const headers = new AxiosHeaders({
    'Content-Type': 'application/json',
    accessToken: `${accessToken}`,
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
    const response = await axios(options);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      // switch (axiosError.status) {
      //   case 400:
      //     break;
      //   case 401:
      //     break;
      //   case 404:
      //     break;
      //   case 500:
      //     break;
      // }
      // if (axiosError.status === 401) {
      //   alert('로그인이 필요합니다.');
      // }
      // //인증 오류 발 생 시 새로운 accessToken 발급 받아야 한다.
      //응답 데이터로 판별
      console.log(axiosError.message);
      console.log(axiosError.status);
    }
  }
}

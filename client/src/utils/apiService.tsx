/* 2023-07-07 axios 요청 함수 - 김다함 */
import axios, { RawAxiosRequestConfig, AxiosHeaders } from 'axios'
// import { getCookie } from './cookie';
//ec2-13-125-77-46.ap-northeast-2.compute.amazonaws.com:8080
export const API_BASE_URL = ''
const ACCESS_TOKEN = '';
// const REFRESH_TOKEN = getCookie('refereshtoken');
// console.log(ACCESS_TOKEN, REFRESH_TOKEN);

axios.defaults.baseURL = API_BASE_URL;

export async function call(api: string, method: string, data?: any) {
  const headers = new AxiosHeaders({
    "Content-Type": "application/json",
    "withCredentials": true,
  });

  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  if (accessToken) {
  headers.append("Authorization", "Bearer " + accessToken);
  }

  const options: RawAxiosRequestConfig = {
    headers: headers,
    method: method,
    url: API_BASE_URL + api,
  };

  if (data)
    options.data = JSON.stringify(data);

  // 에러처리고려
  return await axios.request(options)
    .then((res) => res.data)
    .catch(error => {
      console.log(error);
    })
}
/* 2023-07-07 axios 요청 함수 - 김다함 */
import axios, { AxiosError, RawAxiosRequestConfig, AxiosResponse, AxiosHeaders } from 'axios'
// import { CustomAxiosInterface } from '@/types/axiosInterface'
// import { API_BASE_URL } from "@/app-config.js";
const API_BASE_URL = ''
const ACCESS_TOKEN = "ACCESS_TOKEN";
const IS_ADMIN = "IS_ADMIN";
const USER_NAME = "USER_NAME";

axios.defaults.baseURL = API_BASE_URL;

export async function call(api: string, method: string, data?: string) {
  let headers = new AxiosHeaders({
    "Content-Type": "application/json"
  });

  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  if (accessToken) {
    headers.append("Authorization", "Bearer " + accessToken);
  }

  let options: RawAxiosRequestConfig = {
    headers: headers,
    method: method,
    url: API_BASE_URL + api,
  };

  if (data)
    options.data = JSON.stringify(data);

  return await axios.request(options)
    .then((res) => res.data)
    .catch(error => {
      console.log(error);
    })
}
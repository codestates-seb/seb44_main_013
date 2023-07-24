/* 2023-07-07 axios 요청 함수 - 김다함 */
import axios, { RawAxiosRequestConfig, AxiosHeaders, AxiosError } from 'axios';
const ACCESS_TOKEN = 'accessToken';
export const API_BASE_URL = '/api';
export const API_BASE_URL = import.meta.env.MODE === 'development' ? '' : '/api';
console.log(import.meta.env);

export async function call(api: string, method: string, data?: any) {
  // const dispatch = useDispatch();
  const accessToken = localStorage.getItem(ACCESS_TOKEN);

  let headers = new AxiosHeaders({
    'Content-Type': 'application/json',
    'accessToken': accessToken,
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
    const response = await axios(options)
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

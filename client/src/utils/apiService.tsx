/* 2023-07-07 axios 요청 함수 - 김다함 */
// import { API_BASE_URL } from '@/app-config';
// import { RootState } from '@/store';
import axios, { RawAxiosRequestConfig, AxiosHeaders, AxiosError } from 'axios';
import { useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';
// axios.defaults.baseURL = API_BASE_URL;

//ec2-13-125-77-46.ap-northeast-2.compute.amazonaws.com:8080
// const ACCESS_TOKEN = useSelector((state: RootState) => state.loginSlice.accesstoken);
const ACCESS_TOKEN = 'accessToken';
export const API_BASE_URL = '/api';

export async function call(api: string, method: string, data?: any) {
  // const dispatch = useDispatch();
  const accessToken = localStorage.getItem(ACCESS_TOKEN);

  let headers = new AxiosHeaders({
    'Content-Type': 'application/json',
    'accessToken': accessToken,
  });

  // if (accessToken) {
  //   headers.append("Authorization", "Bearer " + accessToken);
  // }

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
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      switch (axiosError.status) {
        case 400:
          break;
        case 401:
          break;
        case 404:
          break;
        case 500:
          break;
      }
      if (axiosError.status === 401) {
        alert('로그인이 필요합니다.');
      }
      //인증 오류 발 생 시 새로운 accessToken 발급 받아야 한다.
      //응답 데이터로 판별
      console.log(axiosError.message);
      console.log(axiosError.status);

      // if(axiosError.message === 'Token Expired' && axiosError.status === 409){
      //   console.log('에러 제대로 핸들링 중 : TEST');
      // }
    }
  }
}

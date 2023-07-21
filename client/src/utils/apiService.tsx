/* 2023-07-07 axios 요청 함수 - 김다함 */
// import { API_BASE_URL } from '@/app-config';
// import { RootState } from '@/store';
import axios, { RawAxiosRequestConfig, AxiosHeaders, AxiosError } from 'axios';
// import { useSelector } from 'react-redux';
// axios.defaults.baseURL = API_BASE_URL;

//ec2-13-125-77-46.ap-northeast-2.compute.amazonaws.com:8080
// const ACCESS_TOKEN = useSelector((state: RootState) => state.loginSlice.accesstoken);
const ACCESS_TOKEN = '';
export const API_BASE_URL = '';

export async function call(api: string, method: string, data?: any) {
  // const dispatch = useDispatch();
  const headers = new AxiosHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`,
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
    const response = await axios.request(options)
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

      // if(axiosError.message === 'Token Expired' && axiosError.status === 409){
      //   console.log('에러 제대로 핸들링 중 : TEST');
      // }
    }
  }
}

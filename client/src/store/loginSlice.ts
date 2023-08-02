//0713 혜진 로그인 상태 관리
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';

export interface Token {
  accesstoken?: string;
  refreshtoken?: string;
}

export interface LoginState extends Token {
  isLogin: boolean;
}

const ACCESS_TOKEN = window.localStorage.getItem('accessToken');
const REFRESH_TOKEN = window.localStorage.getItem('refreshToken');

const initialState: LoginState = {
  accesstoken: ACCESS_TOKEN || '',
  refreshtoken: REFRESH_TOKEN || '',
  isLogin: ACCESS_TOKEN ? true : false,
};

export const LoginSlice = createSlice({
  name: 'isLogin',
  initialState,
  reducers: {
    login: (state, action) => {
      const { isLogin } = action.payload;
      state.isLogin = isLogin;
    },
    setCredentials: (state, action) => {
      //accesstoken값 업데이트
      const { accesstoken, refreshtoken } = action.payload;
      state.accesstoken = accesstoken;
      state.refreshtoken = refreshtoken;
    },
  },
});

export const { login, setCredentials } = LoginSlice.actions;
export const TOKEN = (state: RootState) => state.loginSlice.accesstoken;
export default LoginSlice.reducer;

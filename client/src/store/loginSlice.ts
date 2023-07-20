//0713 혜진 로그인 상태 관리
import { createSlice } from '@reduxjs/toolkit';

export interface Token {
  accesstoken?: string;
  refreshtoken?: string;
}

export interface LoginState extends Token {
  isLogin: boolean;
}

// const ACCESS_TOKEN = '';
// const REFRESH_TOKEN = '';

const initialState: LoginState = {
  // isLogin: ACCESS_TOKEN ? true : false,
  // memberId: -1,
  // accesstoken: ACCESS_TOKEN || '',
  // refreshtoken: REFRESH_TOKEN || '',
  accesstoken: '',
  refreshtoken: '',
  isLogin: false,
};
//1. accessToken이 유효(DB 비교)하면 refershToken 재발급
//2. 로그아웃 시 accessToken과 refereshToken 만료

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
export default LoginSlice.reducer;

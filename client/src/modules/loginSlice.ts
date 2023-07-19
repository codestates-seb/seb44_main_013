//0713 혜진 로그인 상태 관리
import { createSlice } from "@reduxjs/toolkit";

export interface Token {
    accesstoken: string;
    refreshtoken: string;
}

export interface LoginState extends Token{
    isLogin: boolean;
    memberId: number;
}

const ACCESS_TOKEN = window.localStorage.getItem('accesstoken');
const REFRESH_TOKEN = window.localStorage.getItem('refreshtoken')

const initialState: LoginState = {
    isLogin: ACCESS_TOKEN ? true : false,
    memberId: -1,
    accesstoken: ACCESS_TOKEN || '',
    refreshtoken: REFRESH_TOKEN || '',
}
//1. accessToken이 유효(DB 비교)하면 refershToken 재발급
//2. 로그아웃 시 accessToken과 refereshToken 만료

export const LoginSlice = createSlice ({
    name: 'isLogin',
    initialState,
    reducers: {
        login: (state, action) => {
            const { isLogin, memberId } = action.payload
            state.isLogin = isLogin
            state.memberId = memberId
        },
        setCredentials:(state,action) => {
            //accesstoken값 업데이트
            const {accesstoken, refreshtoken} = action.payload
            state.accesstoken = accesstoken
            state.refreshtoken = refreshtoken
        }
    },
})

export const { login, setCredentials } = LoginSlice.actions
export default LoginSlice.reducer
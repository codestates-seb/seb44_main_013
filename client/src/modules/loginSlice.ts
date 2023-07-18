//0713 혜진 로그인 상태 관리
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Token {
    accesstoken: string;
    refreshtoken: string;
}

export interface LoginState extends Token{
    isLogin: boolean
}


const initialState: LoginState = {
    isLogin: false,
    accesstoken: '',
    refreshtoken: '',
}


export const LoginSlice = createSlice ({
    name: 'isLogin',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<boolean>) => {
            state.isLogin = action.payload
        }
    },
})

export const { login } = LoginSlice.actions
export default LoginSlice.reducer
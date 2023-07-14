//0713 혜진 로그인 상태 관리
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginState {
    isLogin: boolean
}


export const LoginSlice = createSlice ({
    name: 'isLogin',
    initialState : { isLogin: true },
    reducers: {
        login: (state, action: PayloadAction<boolean>) => {
            state.isLogin = action.payload
        }
    },
})

export const { login } = LoginSlice.actions
export default LoginSlice.reducer
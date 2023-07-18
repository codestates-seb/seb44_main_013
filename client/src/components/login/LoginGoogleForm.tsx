import { useGoogleLogin } from "@react-oauth/google";
// import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "@/modules/loginSlice";
import { call } from "@/utils/apiService";
import { useSelector } from 'react-redux';
import { RootState } from '@/modules';
import { useState } from "react";

import { GoogleWrapper, TextSection } from "./LoginGoogleForm.styled"
import GoogleLogo from "@/commons/atoms/logo/GoogleLogo";
import AlertModal from "../modal/AlertModal";

interface LoginForm {
    children: React.ReactNode;
    type: string;
    role?: string;
}

interface googleToken {
    credentialCode: string;
    credential:string;
    clientId:string;
    memberId: string;
    optionData: {memberRole: string};
}

export default function LoginGoogleForm ({ children, type, role }: LoginForm){
    const loginState = useSelector((state: RootState) => state.loginSlice.isLogin);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [ cookies, setCookie, removeCookie ] = useCookies(['memberId', 'isLogin', 'memberRole']);
    const [ exitModal, setExitModal ] = useState(false);

    console.log(role);

    const moveMain = async (res:any) => {
        //구글이랑 소통 먼저
        if( role === ''){
            setExitModal(true);
        } else {
            await sendGoogleCode(res)
        }
    };
  
    const handleLogin = useGoogleLogin({
        onSuccess: tokenResponse => {
            console.log(tokenResponse);
            if(loginState){
                navigate('/')
            }
        }})

    const sendGoogleCode = async ( res:googleToken ) => {
        const credentialCode = res.credential;
        const memberId = res.clientId;
        const optionData = { memberRole: role };

        try {
            await call('/members', 'POST', { 
                credentialCode: credentialCode,
                cliendId: memberId,
                ...optionData,
            })
            
            handleLogin();
            dispatch(login(true));

        } catch (err) {
            console.log(err);
        }
    };

    const handleExit = (   ) => {
        setExitModal(!exitModal)
    }

    
    if (type === 'google'){

        // if(role === '') return(<> <AlertModal onConfirm ={handleExit} onCancel={ handleExit }/> </>)
        
        return(
            <>
            { exitModal ? <><AlertModal onConfirm ={handleExit} onCancel={ handleExit }/></> : null}
            <GoogleWrapper onClick={moveMain}>
                <GoogleLogo/>
                <TextSection>{children}</TextSection>
            </GoogleWrapper>
            </>
        )
    }

    if(type === 'normal'){
        return(
            <GoogleWrapper>
                <TextSection>{children}</TextSection>
            </GoogleWrapper>
        )
    }

}
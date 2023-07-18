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

// interface googleToken {
//     credentialCode: string;
//     credential:string;
//     clientId:string;
//     memberId: string;
//     optionData: {memberRole: string};
// }

export default function LoginGoogleForm ({ children, type, role }: LoginForm){
    // const loginState = useSelector((state: RootState) => state.loginSlice.isLogin);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [ cookies, setCookie, removeCookie ] = useCookies(['memberId', 'isLogin', 'memberRole']);
    const [ exitModal, setExitModal ] = useState(false);


    const moveMain = async ( ) => {
        //일단 먼저 구글에 get 요청 보내야 함  res 없앰 
        await call('/login/oauth2/code/google', 'GET', null)
        .then((res) => console.log(res));

        //구글이랑 소통 먼저
        if( role === ''){
            setExitModal(true);
        } else{
            handleLogin();
            
        }
    };
  
    const handleLogin = useGoogleLogin({
        scope: "email profile",
        onSuccess: async (tokenResponse) => {
            // console.log(tokenResponse);
            sendGoogleCode(tokenResponse);

        },
        flow: "auth-code",
    })

    const sendGoogleCode = async ( res:any ) => {
        const credentialCode = res.credential;
        const memberId = res.clientId;
        console.log(res);

        try {
            await call('/members', 'POST', { 
                credentialCode: credentialCode,
                cliendId: memberId,
                role: role,
            })
            .then((res) => {console.log(res)})
            
            dispatch(login(true));
            navigate('/')

        } catch (err) {
            console.log(err);
        }
    };

    const handleExit = (   ) => {
        setExitModal(!exitModal)
    }

    
    if (type === 'google'){
        
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
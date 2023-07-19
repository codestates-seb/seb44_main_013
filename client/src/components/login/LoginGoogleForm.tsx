import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login, setCredentials } from "@/modules/loginSlice";
// import { useNavigate } from "react-router-dom";


import { GoogleWrapper, TextSection } from "./LoginGoogleForm.styled"
import GoogleLogo from "@/commons/atoms/logo/GoogleLogo";



interface LoginForm {
    children: React.ReactNode;
    type: string;
}


export default function LoginGoogleForm ({ children, type }: LoginForm){
    const [ token, setToken ] = useState('');
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    // const dispatch = useDispatch();
    // const navigate = useNavigate();


    const moveMain = async ( ) => {
        await testLogin();
        sendAccessToken();
    };

    const testLogin = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            const ACCESS = tokenResponse.access_token;
            setToken(ACCESS);
            console.log(tokenResponse);
            
            axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
            })
            .then((response) => {
                console.log(response);
                setName(response.data.name);
                setEmail(response.data.email);
            })
            // call('https://www.googleapis.com/oauth2/v3/userinfo', 'GET' , {
            //     headers:{
            //         'Authorization': `Bearer ${ACCESS}`
            //     }
            // })
            // .then((response) => {
            //     console.log(response);
            //     setName(response.data.name);
            //     setEmail(response.data.email);

            // });
        }
    });

    const sendAccessToken = () => {
        return axios.post('/api/미정', {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body:{
                name:name,
                email:email,
            }
        })
        .then(() => console.log('서버에 정보가 전달 되었습니다.'))
        .catch(() => console.log('서버에 정보 전달 실패 ㅜ '))
    }


//post 
// 1. 사진/ 이름/ 이메일 : body / accessToken : header 보내드린다. 
// 2. localstorage에 받은 token 저장 
    
    if (type === 'google'){
        
        return(
            <>
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
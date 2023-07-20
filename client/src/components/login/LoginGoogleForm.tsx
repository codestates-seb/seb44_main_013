import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios, { AxiosError } from 'axios';

import { GoogleWrapper, TextSection } from './LoginGoogleForm.styled';
import GoogleLogo from '@/commons/atoms/logo/GoogleLogo';
import { setCredentials } from '@/store/loginSlice';
//login

interface LoginForm {
  children: React.ReactNode;
  type: string;
}

interface ErrorResponse {
  errorCode: number;
  errorCodeInfo: string;
  errorMessage: string;
  Action: string;
}

export default function LoginGoogleForm({ children, type }: LoginForm) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginGoogle = () => {
    getUserData();
  };

  const getUserData = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      const ACCESS = tokenResponse.access_token;
      // setToken(ACCESS);
      // console.log(tokenResponse);
      // console.log(ACCESS);

      axios
        .get('https://www.googleapis.com/oauth2/v2/userinfo', {
          headers: {
            Authorization: `Bearer ${ACCESS}`,
          },
        })
        .then((response) => {
          // console.log(response);
          // console.log(response.data.name);
          // console.log(response.data.email);

          sendAccessToken(response.data.name, response.data.email, ACCESS);
        })
        .catch((err) => console.log(err));
    },
  });

  //기존 로그인
  const getAccessToken = () => {
    const accessToken = window.localStorage.getItem('accessToken');
    const memberId = window.localStorage.getItem('memberId');

    // axios
    //   .get('/api/oauth/login', {
    //     headers: {
    //       authorization: `Bearer ${accessToken}`,
    //       id: memberId,
    //     },
    //   })
    //   .then((response) => {
    //     console.log('로그인 성공', response);
    //     navigate('/');
    //     dispatch(login({ isLogin: true }));
    //   })
    //   .catch((Err) => console.log('로그인 에러', Err));

    axios({
      method: 'get',
      url: '/api/oauth/login',
      headers: {
        authorization: `${accessToken}`,
        id: memberId,
      },
    })
      .then((res) => {
        console.log('로그인 성공', res);
      })
      .catch((err) => {
        console.log(err, 'refreshToken 새로 발급');
        //
        getRefreshToken();
      });
  };

  const getRefreshToken = () => {
    const refresh = window.localStorage.getItem('refreshToken');
    console.log('getRefreshToken 함수 실행 ');
    axios
      .post(
        '/api/oauth/regeneration/token',
        {},
        {
          headers: {
            RefreshToken: `${refresh}`,
          },
        }
      )
      .then((Res) => {
        console.log(Res, '재발급 성공');
        // const newAccess = Res.headers.authorization;
        // console.log(newAccess);
        // 전역 관리 저장 로직 작성 필요
      })
      .catch((err) => console.log('refreshToken 재발급 실패', err));
  };

  const sendAccessToken = (name: string, email: string, token01: string) => {
    //최초로그인
    axios
      .post(
        '/api/oauth/signup ',
        {
          name: name,
          email: email,
        },
        {
          headers: {
            Authorization: `${token01}`,
          },
        }
      )
      .then((response) => {
        // console.log(response);
        const accessToken = response.headers.authorization;
        const memberId = response.headers.id;
        const refreshToken = response.headers.refreshtoken;
        // const refresthToken = response.headers.RefreshToken

        window.localStorage.setItem('memberId', memberId);
        window.localStorage.setItem('accessToken', accessToken);
        window.localStorage.setItem('refreshToken', refreshToken);
        dispatch(setCredentials({ accessToken: accessToken }));
        //localStorage 에 액세스 토큰 저장
        navigate('/signup/role');

        // console.log(accessToken);
        // console.log(memberId);
      })
      .catch((error: AxiosError<ErrorResponse>) => {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError<ErrorResponse>;
          if (axiosError.response) {
            const errorCode = axiosError.response.data.errorCode;
            const errorMessage = axiosError.response.data.errorMessage;
            if (
              errorCode === 409 &&
              errorMessage === '이메일 중복 오류 입니다. [Action] : 다른 이메일을 사용하여 주십시오.'
            ) {
              console.log('중복 데이터 입니다. 기존 로그인으로 갑니다.');

              //별도의 로그인 get 요청 처리 - id / 서버 access token (header)
              getAccessToken();

              //
            } else {
              console.log('다른 에러 발생', axiosError.response.data);
            }
          } else {
            //서버 응답이 없는 경우
            console.log('서버 응답 없음 ', axiosError.message);
          }
        }
      });
  };
  // const loginButtonMapper = {
  //   google: <GoogleLogin loginGoogle={loginGoogle}>{children}</GoogleLogin>,
  //   normal: <EmailLogin>{children}</EmailLogin>,
  // };

  // const generateLoginButton = (type: 'google' | 'normal') => loginButtonMapper[type];

  // return generateLoginButton(type as 'google' | 'normal');

  //Object Mapper pattern

  //post
  // 1. 사진/ 이름/ 이메일 : body / accessToken : header 보내드린다.
  // 2. localstorage에 받은 token 저장
  // Promise 란 무엇 인가 !
  //3. .then/.catch - || async await promise((promise))

  if (type === 'google') {
    return (
      <>
        <GoogleWrapper onClick={loginGoogle}>
          <GoogleLogo />
          <TextSection>{children}</TextSection>
        </GoogleWrapper>
      </>
    );
  }

  if (type === 'normal') {
    return (
      <GoogleWrapper>
        <TextSection>{children}</TextSection>
      </GoogleWrapper>
    );
  }
}

// const GoogleLogin = ({ children, loginGoogle }) => (
//   <GoogleWrapper onClick={loginGoogle}>
//     <GoogleLogo />
//     <TextSection>{children}</TextSection>
//   </GoogleWrapper>
// );

// const EmailLogin = ({ children }) => (
//   <GoogleWrapper>
//     <TextSection>{children}</TextSection>
//   </GoogleWrapper>
// );

import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios, { AxiosError } from 'axios';

import { GoogleWrapper, TextSection } from './LoginGoogleForm.styled';
import GoogleLogo from '@/commons/atoms/logo/GoogleLogo';
import { login, setCredentials } from '../../store/loginSlice';
//login

interface LoginForm {
  children: React.ReactNode;
  type: string;
  alert?: () => void;
}

interface ErrorResponse {
  errorCode: number;
  errorCodeInfo: string;
  errorMessage: string;
  Action: string;
}

export default function LoginGoogleForm({ children, type, alert }: LoginForm) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginGoogle = () => {
    getUserData();
  };

  const getUserData = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      const ACCESS = tokenResponse.access_token;

      axios
        .get('https://www.googleapis.com/oauth2/v2/userinfo', {
          headers: {
            Authorization: `Bearer ${ACCESS}`,
          },
        })
        .then((response) => {
          console.log('구글이랑 토큰 받아옵니다.');

          sendAccessToken(response.data.name, response.data.email, response.data.picture, ACCESS);
        })
        .catch((err) => console.log(err));
    },
  });

  //기존 로그인
  const getAccessToken = async () => {
    const accessToken = window.localStorage.getItem('accessToken');
    const memberId = window.localStorage.getItem('memberId');
    console.log('이메일 중복 기존 회원으로 서버한테 로그인 요청합니다.');

    try {
      const res = await axios({
        method: 'get',
        url: 'https://api.portfolly.site/oauth/login',
        headers: {
          authorization: `${accessToken}`,
          id: memberId,
        },
      });
      console.log('기존 회원 로그인 성공', res);
      navigate('/main');
      dispatch(login({ isLogin: true }));
    } catch (err) {
      console.log(err, 'refreshToken 새로 발급 필요합니다');
      console.log('새 발급을 위해 함수 이동합니다.');
      await getRefreshToken();
    }
  };

  const getRefreshToken = () => {
    const refresh = window.localStorage.getItem('refreshToken');
    console.log('[주목] getRefreshToken 함수 실행 ');
    axios
      .post(
        'https://api.portfolly.site/oauth/regeneration/token',
        {},
        {
          headers: {
            RefreshToken: `${refresh}`,
          },
        }
      )
      .then((Res) => {
        console.log(Res, '재발급 성공');
        const newAccess = Res.headers.authorization;
        console.log('기존 accessToken 없애고 새로운 토큰 저장합니다!');
        window.localStorage.setItem('accessToken', newAccess);
        getAccessToken();
      })
      .catch((err) => console.log('refreshToken 재발급 실패', err));
  };

  const sendAccessToken = (name: string, email: string, picture: string, token01: string) => {
    //최초로그인
    axios
      .post(
        'https://api.portfolly.site/oauth/signup ',
        {
          name: name,
          email: email,
          imageUrl: picture,
        },
        {
          headers: {
            Authorization: `Bearer ${token01}`,
          },
        }
      )
      .then((response) => {
        console.log('서버한테서 토큰과 아이디 리프레시를 받아옵니다.');
        const accessToken = response.headers.authorization;
        const memberId = response.headers.id;
        const refreshToken = response.headers.refreshtoken;

        window.localStorage.setItem('memberId', memberId);
        window.localStorage.setItem('accessToken', accessToken);
        window.localStorage.setItem('refreshToken', refreshToken);
        dispatch(setCredentials({ accessToken: accessToken }));
        //localStorage 에 액세스 토큰 저장
        navigate('/signup/role');

        console.log(`토큰` + accessToken);
        console.log(`아이디` + memberId);
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
      <GoogleWrapper onClick={alert}>
        <TextSection>{children}</TextSection>
      </GoogleWrapper>
    );
  }

  if (type === 'guest') {
    return (
      <GoogleWrapper>
        <TextSection>{children}</TextSection>
      </GoogleWrapper>
    );
  }
}

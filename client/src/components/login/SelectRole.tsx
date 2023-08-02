import { ButtonContainer, SignBtn } from '@/pages/signup/SignUp.styled';
import { useState } from 'react';
import { ButtonBox, RoleWrapper } from './SelectRole.styled';
import PurpleBtn from '@/commons/atoms/buttons/PurpleBtn';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//useSelector
import axios from 'axios';
// import { RootState } from '@/modules';
import { login } from '@/store/loginSlice';

export default function SelectRole() {
  const [role, setRole] = useState('');
  const MEMBER_ID = window.localStorage.getItem('memberId');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const sliceToken = useSelector((state: RootState) => state.loginSlice.accesstoken);
  const ACCESS_TOKEN = window.localStorage.getItem('accessToken');
  // console.log(ACCESS_TOKEN);
  // console.log(sliceToken);
  console.log('파트너/클라이언트 선택 페이지로 이동합니다.');

  const selectRole = (res: string) => {
    setRole(res);
  };

  // console.log(role);

  const sendRole = () => {
    try {
      axios.post(
        `https://api.portfolly.site/members`,
        {
          id: MEMBER_ID,
          member_role: role,
        },
        {
          headers: {
            Authorization: `${ACCESS_TOKEN}`, // 서버에서 받은 token
          },
        }
      );
      console.log('선택지가 잘 전달 되었습니다.');
      dispatch(login({ isLogin: true }));
      window.localStorage.setItem('memberRole', role);
      //부드럽게 WELcome 페이지 만들기
      navigate('/main');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <RoleWrapper>
      <ButtonBox>
        <ButtonContainer>
          <SignBtn onClick={() => selectRole('CLIENT')}>Client</SignBtn>
          <SignBtn onClick={() => selectRole('PARTNER')}>Partner</SignBtn>
        </ButtonContainer>
        <PurpleBtn onClick={sendRole}>Next</PurpleBtn>
      </ButtonBox>
    </RoleWrapper>
  );
}

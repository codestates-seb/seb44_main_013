import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { login } from '@/store/loginSlice';

import { ButtonContainer, NextButton, SignBtn, TitleText } from '@/components/login/SelectRole.styled';
import { ButtonBox, RoleWrapper } from './SelectRole.styled';

export default function SelectRole() {
  const [role, setRole] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const ACCESS_TOKEN = window.localStorage.getItem('accessToken');
  const MEMBER_ID = window.localStorage.getItem('memberId');
  console.log('파트너/클라이언트 선택 페이지로 이동합니다.');

  const selectRole = (res: string) => {
    setRole(res);
    console.log(res);
  };

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
            Authorization: `${ACCESS_TOKEN}`, 
          },
        }
      );
      console.log('선택지가 잘 전달 되었습니다.');
      dispatch(login({ isLogin: true }));
      window.localStorage.setItem('memberRole', role);
      navigate('/main');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <RoleWrapper>
      <ButtonBox>
        <TitleText>Choose your Role</TitleText>
        <ButtonContainer>
          <SignBtn type={'client'} onClick={(chooseRole) => selectRole(chooseRole)}>
            Client
          </SignBtn>
          <SignBtn type={'partner'} onClick={(chooseRole) => selectRole(chooseRole)}>
            Partner
          </SignBtn>
        </ButtonContainer>
        <NextButton onClick={sendRole}>Next</NextButton>
      </ButtonBox>
    </RoleWrapper>
  );
}
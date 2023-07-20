import { ButtonContainer, SignBtn } from "@/pages/signup/SignUp.styled";
import { useState } from "react";
import { RoleWrapper } from "./SelectRole.styled";
import PurpleBtn from "@/commons/atoms/buttons/PurpleBtn";
import { call } from "@/utils/apiService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "@/store/loginSlice";

export default function SelectRole() {
  const [role, setRole] = useState('');
  const MEMBER_ID = window.localStorage.getItem('memberId');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectRole = (res: string) => {
    setRole(res);
  }

  console.log(role);

  const sendRole = () => {
    // return call(`/members`, 'POST', {
    //     //body에 들어감
    //     memberId: MEMBER_ID,
    //     memberRole: role
    // })
    // .then(()=> {
    //     console.log('POST 성공')
    //     dispatch(login(true));
    //     // 여기 부드럽게 넘어가고 싶어영 
    //     navigate('/')
    // });
  }

  return (
    <RoleWrapper>
      <ButtonContainer>
        <SignBtn onClick={() => selectRole("CLIENT")} >Client</SignBtn>
        <SignBtn onClick={() => selectRole("PARTNER")} >Partner</SignBtn>
      </ButtonContainer>
      <PurpleBtn onClick={sendRole}>Next</PurpleBtn>
    </RoleWrapper>
  )
}

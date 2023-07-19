/* 2023-07-06 로고만 보이는 헤더 - 김다함 */
import { styled } from 'styled-components';
import { useNavigate } from "react-router-dom";
import tw from 'twin.macro';

import Logo from '../../commons/atoms/logo/Logo';

const HeaderContainer = styled.div`
  ${tw`w-full py-1.5 px-3 relative z-0`}
  background-color: #252525;
`;

export default function LogoHeader() {
  const navigate = useNavigate();

  const gotoMain = () => {
    if (confirm('작성한 내용이 저장되지 않습니다. 정말 나가시겠습니까?') === true)
      navigate('/');
  }

  return (
    <HeaderContainer>
      <Logo onClickHandler={gotoMain} />
    </HeaderContainer>
  )
}
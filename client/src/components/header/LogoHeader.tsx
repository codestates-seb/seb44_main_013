/* 2023-07-06 로고만 보이는 헤더 - 김다함 */
import tw, { styled } from 'twin.macro';

import Logo from '../../commons/atoms/logo/Logo';

const HeaderContainer = styled.div`
  ${tw`w-full py-1.5 px-3 relative z-0`}
  background-color: #252525;
`;

export default function LogoHeader() {

  const gotoMain = () => {
    window.location.href = '/main'
  }

  return (
    <HeaderContainer>
      <Logo onClickHandler={gotoMain} />
    </HeaderContainer>
  );
}

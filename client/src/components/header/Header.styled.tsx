import { styled } from 'styled-components';
import tw from 'twin.macro';

export const HeaderContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-between
    shadow-md
  `}
  padding: 0 100px;
`;

export const LogoVer2Image = styled.img`
  width: 130px;
  height: 70px;
`;

export const IconsWrapper = styled.div`
  ${tw`
    flex
    items-center
    justify-between
  `}
  width: 80px;

  &:hover{
    cursor: pointer;
  }
`;

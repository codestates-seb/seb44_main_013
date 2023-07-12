import tw from 'twin.macro';
import styled from 'styled-components';

export const MypageIntroWrap = styled.div`
  ${tw`
    bg-neutral-100
    shadow-md
    rounded-lg
    px-10
    py-5
    relative
  `}
  width: 700px;
  height: 350px;

  .editBtn {
    ${tw`
      absolute
      bottom-3
      right-5
      cursor-pointer
    `}
  }

  hr {
    ${tw`my-2`}
  }
`;

export const MypageIntroContainer = styled.div`
  ${tw`
    py-4
    flex
    items-center
    
  `}

  input {
    ${tw`
      px-3
      py-1
      bg-transparent
      outline-neutral-400
      rounded-md
      inline
    `}
    border: 1px solid #d4d4d4;
    font-size: 18px;
    font-weight: 300;
  }

  .introContent {
    ${tw`
      px-3
      py-1
    `}
    border: 1px solid transparent;
    font-size: 18px;
    font-weight: 300;
  }
`;

export const IntroduceTitle = styled.h2`
  ${tw`
  rounded-lg
  inline-block
  px-1
  mr-5
  text-center
  bg-neutral-200/20
`}
  width: 120px;
  font-size: 23px;
  font-weight: 700;
  height: 40px;
  box-shadow: inset 3px 3px 3px 0 rgb(170, 170, 170, 0.25);
`;
export const BtnStyleContainer = tw.div`
    mt-8

`;

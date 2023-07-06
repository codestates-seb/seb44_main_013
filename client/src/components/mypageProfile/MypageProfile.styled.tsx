import tw from "twin.macro";
import styled from "styled-components";

export const MypageProfileContainer = styled.div`
  ${tw`
    bg-neutral-100
    shadow-md
    rounded-lg
    text-center
    p-7
    mr-5
  `}
  width: 350px;
  height: 350px;

  >img {
    ${tw`
      rounded-full
    `}
    width: 200px;
    height: 200px;
    margin: 0 auto 10px;
  }
  
  >div {
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    ${tw`px-2`}
    font-size: 30px;
    font-weight: 700;
  }

  p {
    ${tw`px-2`}
    font-size: 20px;
  }

  .editBtn {
    ${tw`cursor-pointer`}
  }
`;

export const NameEdit = styled.input`
  ${tw`
    text-center
    outline-neutral-300
    bg-transparent
  `}
  font-size: 25px;
  width: 200px;
  height: 45px;
`;

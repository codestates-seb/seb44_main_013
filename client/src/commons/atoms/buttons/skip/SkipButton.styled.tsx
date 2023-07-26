import tw from "twin.macro";
import styled from "styled-components";

export const SkipButtonWrapper = styled.button`
  ${tw`
    fixed
    bottom-10
    right-10
    text-white
    p-3
    rounded-full
    z-10
  `}
  border: 2px solid #fff
`;
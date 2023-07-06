import tw from "twin.macro";
import styled from "styled-components";

export const GraphicItemContainer = styled.div`
  ${tw`
    shadow-md
    relative
  `}

  width: 300px;
  height: 400px;

  &:hover {
    ${tw`bg-neutral-500/60`}
  }

  >img {
    ${tw`
      w-full
      h-full
    `}
    &:hover{
    ${tw`opacity-80`}
  }
  }
`;
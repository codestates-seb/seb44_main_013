import tw from "twin.macro";
import styled from "styled-components";

export const AppItemContainer = styled.div`
  ${tw`
    relative
    mb-10
    overflow-hidden
  `}

  border-radius: 20px;
  box-shadow: 0 5px 5px 0 #aaa;
  width: 300px;
  height: 500px;

  &:hover {
    ${tw`bg-neutral-500/60`}
  }

  .iconsWrap {
    ${tw`
      text-white
      flex
      items-center
      absolute
      top-3
      right-2
    `}

    >svg {
      ${tw`
        mx-1
      `}
    }
  }

  >span {
    ${tw`
      absolute
      text-white
      top-2
      left-2
    `}
  }
  img {
    ${tw`
      w-full
      h-full
    `}
    &:hover{
      ${tw`opacity-80`}
    }
  }
`;
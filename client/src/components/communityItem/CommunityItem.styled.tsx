import tw from "twin.macro";
import styled from "styled-components";

export const CommunityItemContainer = styled.div`
  ${
    tw`
      w-2/12
      h-80
      bg-white
      relative
      p-2
      shadow-md
    `
  }

  >h2 {
    font-size: 40px;
  }

  >p {
    font-size: 20px;
  }
`;
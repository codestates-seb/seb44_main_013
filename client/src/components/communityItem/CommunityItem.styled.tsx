import tw from "twin.macro";
import styled from "styled-components";

export const CommunityItemContainer = styled.div`
  ${
    tw`
      w-2/12
      h-80
      bg-white
      relative
      shadow-md
      p-2
    `
  }

  >h2 {
    font-size: 35px;
    font-weight: 700;
  }

  >p {
    font-size: 20px;
  }
`;
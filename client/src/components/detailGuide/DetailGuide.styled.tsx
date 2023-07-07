import tw from "twin.macro";
import { styled } from 'styled-components';

export const DetailGuideContainer = styled.div`
  ${tw`
    bg-neutral-100
    p-5
    relative
  `}

  width: 300px;
  height: 370px;
  border-radius: 20px;
  font-size: 14px;

  >h5 {
    font-weight: 700;
    font-size: 15px;
    padding: 5px 0;
  }

  >p {
    margin: 5px 0;
  }

  ul {
    padding-left: 40px;
    margin: 5px 0 15px 0;
  }
  
  li {
    list-style: circle;
    line-height: 25px;
  }

  >div {
    ${tw`
      absolute
      bottom-0
    `}
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
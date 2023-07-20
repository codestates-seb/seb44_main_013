import tw from 'twin.macro';
import styled from 'styled-components';

export const CommunityItemContainer = styled.div`
  ${tw`
    w-[280px]
    h-80
    bg-[#ffffffe0]
    relative
    p-4
    ml-10
    mt-10
    transition-transform
    duration-200
    ease-in-out
    rounded-2xl
    shadow-lg
    
  `}
  &:hover {
    transform: scale(1.05);
  }

  > h2 {
    font-size: 25px;
    font-weight: 700;
    margin-top: 10px;
  }

  > p {
    font-size: 20px;
  }
`;

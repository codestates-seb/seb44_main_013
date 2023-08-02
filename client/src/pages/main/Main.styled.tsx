import tw from 'twin.macro';
import styled from 'styled-components';

export const WebItemsContainer = styled.div`
  ${tw`
    flex 
    flex-wrap 
    justify-center
    mt-10
    md:(flex-row)
    sm:(flex-col)
    bg-contain
    bg-no-repeat
    bg-center
  `}

  height: 80vh;
`;

export const NodataImage = styled.img`
  ${tw`
    flex
    justify-center
    items-center
  `}
  width: 350px;
  height: 350px;
  margin-top: 60px;
`;

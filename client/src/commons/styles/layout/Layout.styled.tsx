import tw from 'twin.macro';
import { styled } from 'styled-components';

import { useState } from 'react';
import communitymainimg from '../../../assets/communitymainimg.png';
import mainwebimg from '../../../assets/mainimg.png';

export const MainImgWrapper = styled.div`
  ${tw`
        w-screen h-fit bg-center bg-no-repeat bg-cover
    `}
  background-image: url(${mainwebimg});
`;

export const BackImgWrapper = styled.div`
  ${tw`
        w-screen h-fit bg-center bg-no-repeat bg-cover
    `}
  background-image: url(${communitymainimg});
`;

export function BackImgControl( ) {
  const [isCategory, ] = useState('web');
  //{Page}

  if (isCategory === 'web') {
    return <BackImgWrapper />;
  }
}

import tw from 'twin.macro';
import { styled } from 'styled-components';

import { useState } from 'react';
import communitymainimg from '../../../assets/communitymainimg.png';
import mainwebimg from '../../../assets/mainimg.png';

// interface BackImgProps {
//     //타입 작성
// }
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

export function BackImgControl({ Page }: any) {
  const [isCategory, setIsCategory] = useState('web');

  if (isCategory === 'web') {
    return <BackImgWrapper />;
  }
}

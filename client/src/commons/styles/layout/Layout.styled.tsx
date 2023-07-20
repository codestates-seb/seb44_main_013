import tw from 'twin.macro';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import { category } from '@/modules/categorySlice';

import webBgimg from '../../../assets/WebBg.png';
import appBgimg from '../../../assets/AppBg.png';
import aniBgimg from '../../../assets/AniBg.png';
import graphicBgimg from '../../../assets/GraphicBg.png';
import photoBgimg from '../../../assets/PhotoBg.png';
import defaultBgimg from '../../../assets/defaultBg.png';
import { ReactNode } from 'react';

export const MainImgWrapper = styled.div<{ backgroundImage: string }>`
  ${tw`
    w-screen h-fit bg-center bg-no-repeat bg-cover
  `}
  background-image: url(${(props) => props.backgroundImage});
`;

export const DefaultImgWrapper = styled.div`
  ${tw`
    w-screen h-fit bg-center bg-no-repeat bg-cover
  `}
  background-image: url(${defaultBgimg});
`;

export function BackImgControl({ children }: { children: ReactNode }) {
  const selectedCategory = useSelector(category);

  const getBackgroundImage = (category: string) => {
    switch (category) {
      case '웹':
        return webBgimg;
      case '앱':
        return appBgimg;
      case '3D/애니메이션':
        return aniBgimg;
      case '그래픽디자인':
        return graphicBgimg;
      case '사진/영상':
        return photoBgimg;
      default:
        return defaultBgimg;
    }
  };

  return (
    <MainImgWrapper backgroundImage={getBackgroundImage(selectedCategory)}>
      {children}
    </MainImgWrapper>
  );
}

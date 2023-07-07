/* 2023-07-04 주소, 모양, 사이즈를 입력 받는 이미지 아토믹 컴포넌트 - 김다함*/
import { ComponentPropsWithoutRef } from 'react';
import { styled, css } from 'styled-components';
import tw from 'twin.macro';

interface ImageProps {
  src: string;
  url?: string;
  shape?: string;
  size: number;
}

const ImageContainer = styled.div<{ shape?: string, size: number }>`
    ${(props) => props.shape === 'circle' &&
    css`
            width: ${props.size}px;
            height: ${props.size}px;
        `
  // &&
  // tw`overflow-hidden`
  }
`

const FeatherImage = styled.img<{ shape?: string, size: number | string }>`
    ${(props) => props.shape === 'circle' &&
    tw`rounded-full min-w-full min-h-full`}
    height: ${(props) => typeof props.size === 'string' ? props.size : `${props.size}px`};
`;

export const Image = ({ src, url, shape, size }: ImageProps) => {
  return (
    <ImageContainer shape={shape} size={size}>
      <a href={url}>
        <FeatherImage src={src} shape={shape} size={size} />
      </a>
    </ImageContainer>
  )
}

export default Image;
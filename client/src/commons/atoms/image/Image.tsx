/* 2023-07-04 주소, 모양, 사이즈를 입력 받는 이미지 아토믹 컴포넌트 - 김다함*/
import { ImageContainer, FeatherImage } from '@/commons/atoms/image/Image.styled';

interface ImageProps {
  src: string | undefined;
  url?: string;
  shape?: string;
  size: number;
}

export default function Image({ src, url, shape, size }: ImageProps) {
  return (
    <ImageContainer shape={shape} size={size}>
      <a href={url}>
        <FeatherImage src={src} shape={shape} size={size} />
      </a>
    </ImageContainer>
  )
}
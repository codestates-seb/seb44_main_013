import tw from 'twin.macro';
import { styled } from 'styled-components';
import { childrenProps } from '@/types';

export const SMportItemWrapper = tw.div`
    cursor-pointer
    drop-shadow-lg
    mr-5
    whitespace-nowrap
    rounded-lg
`;

export const Imgtype = tw.img`
    rounded-lg
    object-cover
    overflow-hidden
    w-48
    h-52
`;

export const ImgEx = styled.div`
  ${tw`
        rounded-lg
        px-3
        py-3
        text-ITEM_TITLE
        relative
        -translate-y-[73px]
        w-48
        flex
        flex-col
        transition duration-300 ease-in-out
    `}
  background-color: rgb(26, 26, 26, 50%);

  &:hover {
    color: white;
  }
`;

export const ExTitle = tw.div`
    font-semibold
    text-lg
`;

export const ExName = tw.div`
    font-semibold
    text-sm
`;

interface ImgSectionProps {
  src: string;
  style?: React.CSSProperties; // style 속성 추가
}

const ImgSection: React.FC<ImgSectionProps> = ({ src, style }) => {
  return (
    <img src={src} alt="portfolio" style={{ ...style, borderRadius: '10px' }} />
  );
};

export default ImgSection;

export function ImgInfoSection({ title, name }: childrenProps) {
  return (
    <ImgEx>
      <ExTitle>{title}</ExTitle>
      <ExName>@ {name}</ExName>
    </ImgEx>
  );
}

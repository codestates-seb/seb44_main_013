import tw from 'twin.macro';
import styled from 'styled-components';
import photoImg from '../../assets/photoImg.png';
import Bookmark from '../../commons/atoms/buttons/Bookmark';
import { BookmarkWrapper } from '../webItem/WebItem.styled';

export const PhotoItemContainer = styled.div`
  ${tw`
    relative
    shadow-md
  `}

  width: 450px;
  height: 300px;
  margin-bottom: 10px;

  &:hover {
    ${tw`bg-neutral-500/60`}
  }

  > img {
    ${tw`
      w-full
      h-full
    `}

    &:hover {
      ${tw`opacity-80`}
    }
  }
`;

export default function PhotoItem() {
  return (
    <PhotoItemContainer>
      <img src={photoImg} alt="photo image" />
      <BookmarkWrapper>
        <Bookmark portfolioId={1} isToggled={false} />
      </BookmarkWrapper>
    </PhotoItemContainer>
  );
}

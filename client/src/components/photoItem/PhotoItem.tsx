import photoImg from '../../assets/photoImg.png';
import Bookmark from '../../commons/atoms/buttons/Bookmark';
import { BookmarkWrapper } from '../webItem/WebItem.styled';
import {
  Author,
  PhotoItemContainer,
  Title,
  TitleOverlay,
} from './PhotoItem.styled';

export default function PhotoItem() {
  return (
    <PhotoItemContainer>
      <img src={photoImg} alt="photo image" />
      <TitleOverlay>
        <Title>3D 아이템 제목</Title>
        <Author>작성자 이름</Author>
      </TitleOverlay>
      <BookmarkWrapper>
        <Bookmark portfolioId={1} isToggled={false} />
      </BookmarkWrapper>
    </PhotoItemContainer>
  );
}

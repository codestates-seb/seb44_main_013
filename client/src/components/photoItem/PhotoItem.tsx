import photoImg from '../../assets/photoImg.png';
import Bookmark from '../../commons/atoms/buttons/Bookmark';
import { BookmarkWrapper } from '../webItem/WebItem.styled';
import {
  Author,
  PhotoItemContainer,
  Title,
  TitleOverlay,
} from './PhotoItem.styled';

type PhotoItem = {
  item: any;
};

export default function PhotoItem({ item }: PhotoItem) {

  console.log(item);
  const items = Array.from({ length: 1 }, (_, index) => (
    <PhotoItemContainer>
      <img src={photoImg} alt={`photo image-${index}`} />
      <TitleOverlay>
        <Title>{item.data.title}</Title>
        <Author>작성자 이름</Author>
      </TitleOverlay>
      <BookmarkWrapper>
        <Bookmark portfolioId={1} isToggled={false} />
      </BookmarkWrapper>
    </PhotoItemContainer>
  ));
  return <>{items}</>;
}

import photoImg from '../../assets/photoImg.png';
import Bookmark from '../../commons/atoms/buttons/Bookmark';
import { BookmarkWrapper } from '../webItem/WebItem.styled';
import {
  Author,
  PhotoItemContainer,
  Title,
  TitleOverlay,
} from './PhotoItem.styled';

type PhotoItemProps = {
  item: any;
};

export default function PhotoItem({ item }: PhotoItemProps) {
  return (
    <PhotoItemContainer>
      <img src={photoImg} alt={`photo image-${item.data.title}`} />
      <TitleOverlay>
        <Title>{item.data.title}</Title>
        <Author>{item.data.membername}</Author>
      </TitleOverlay>
      <BookmarkWrapper>
        <Bookmark
          portfolioId={item.data.portfolioId}
          isToggled={item.data.isMarked}
        />
      </BookmarkWrapper>
    </PhotoItemContainer>
  );
}

import photoImg from '../../assets/photoImg.png';
import Bookmark from '../../commons/atoms/buttons/Bookmark';
import { BookmarkWrapper } from '../webItem/WebItem.styled';
import { Author, PhotoItemContainer, Title, TitleOverlay } from './PhotoItem.styled';

type PhotoItemProps = {
  item: any;
};

export default function PhotoItem({ item }: PhotoItemProps) {
  return (
    <PhotoItemContainer>
      <img src={photoImg} alt={`photo image-${item.title}`} />
      <TitleOverlay>
        <Title>{item.title}</Title>
        <Author>{item.name}</Author>
      </TitleOverlay>
      <BookmarkWrapper>
        <Bookmark portfolioId={item.id} isToggled={item.marked} />
      </BookmarkWrapper>
    </PhotoItemContainer>
  );
}

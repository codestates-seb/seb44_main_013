import { Link } from 'react-router-dom';
import Bookmark from '../../commons/atoms/buttons/Bookmark';
import { BookmarkWrapper } from '../webItem/WebItem.styled';
import { Author, PhotoItemContainer, Title, TitleOverlay } from './PhotoItem.styled';
import circleNoImg from '@/assets/circleNoImg.png';

type PhotoItemProps = {
  item: any;
};

export default function PhotoItem({ item }: PhotoItemProps) {
  const itemPic = item.firstImage === null ? circleNoImg : item.firstImage;

  return (
    <PhotoItemContainer>
      <Link to={`/portfolios/${item.id}`}>
        <img src={itemPic} alt={`photo image-${item.title}`} />
        <TitleOverlay>
          <Title>{item.title}</Title>
          <Author>{item.member.name}</Author>
        </TitleOverlay>
        <BookmarkWrapper>
          <Bookmark portfolioId={item.id} isToggled={item.marked} />
        </BookmarkWrapper>
      </Link>
    </PhotoItemContainer>
  );
}

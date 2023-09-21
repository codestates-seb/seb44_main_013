import { Link } from 'react-router-dom';
import { Portfolio } from '@/types';

import Bookmark from '../../commons/atoms/buttons/bookmark_like/BookmarkButton';
import { BookmarkWrapper } from '../webItem/WebItem.styled';
import { Author, PhotoItemContainer, Title, TitleOverlay } from './PhotoItem.styled';
import circleNoImg from '@/assets/circleNoImg.png';


export default function PhotoItem( props: {item: Portfolio} ) {
  const item = props.item;
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

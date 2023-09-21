import { Link } from 'react-router-dom';

import { Portfolio } from '@/types';

import {
  Author,
  DItemContainer,
  Title,
  TitleOverlay,
} from './ThreeDItem.styled';
import { BookmarkWrapper } from '../webItem/WebItem.styled';
import Bookmark from '@/commons/atoms/buttons/bookmark_like/BookmarkButton';
import circleNoImg from '@/assets/circleNoImg.png';


export default function ThreeDItem( props: {item: Portfolio} ) {
  const item = props.item;
  const itemPic = item.firstImage === null ? circleNoImg : item.firstImage;

  return (
    <DItemContainer>
      <Link to={`/portfolios/${item.id}`}>
        <img src={itemPic} alt={`3Dimg-${item.title}`} />
        <TitleOverlay>
          <Title>{item.title}</Title>
          <Author>{item.member.name}</Author>
        </TitleOverlay>
        <BookmarkWrapper>
          <Bookmark portfolioId={item.id} isToggled={item.marked} />{' '}
        </BookmarkWrapper>
      </Link>
    </DItemContainer>
  );
}

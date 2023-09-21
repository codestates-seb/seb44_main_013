import { Link } from 'react-router-dom';
import { Portfolio } from '@/types';

import { Author, GraphicItemContainer, Title, TitleOverlay } from './GraphicItem.styled';
import Bookmark from '@/commons/atoms/buttons/bookmark_like/BookmarkButton';
import { BookmarkWrapper } from '../webItem/WebItem.styled';
import circleNoImg from '@/assets/circleNoImg.png';


export default function GraphicItem( props: {item: Portfolio }) {
  const item = props.item;
  const itemPic = item.firstImage === null ? circleNoImg : item.firstImage;

  return (
    <GraphicItemContainer>
      <Link to={`/portfolios/${item.id}`}>
        <img src={itemPic} alt={`graphic image-${item.title}`} className="bg-cover" />
        <TitleOverlay>
          <Title>{item.title}</Title>
          <Author>{item.member.name}</Author>
        </TitleOverlay>
        <BookmarkWrapper>
          <Bookmark portfolioId={item.id} isToggled={item.marked} />
        </BookmarkWrapper>
      </Link>
    </GraphicItemContainer>
  );
}

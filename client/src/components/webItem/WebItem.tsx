import { Link } from 'react-router-dom';
import WebItem1 from '../../assets/WebItem1.png';
import Bookmark from '../../commons/atoms/buttons/Bookmark';

import {
  Author,
  BookmarkWrapper,
  Title,
  TitleOverlay,
  WebItemContainer,
  WebItemImg,
} from './WebItem.styled';

type WebItemProps = {
  item: any;
};

export default function WebItem({ item }: WebItemProps) {
  return (
    <WebItemContainer>
      <Link to={`/portfolios/${item.data.portfolioId}`}>
        <WebItemImg
          src={WebItem1}
          alt={`웹 아이템 이미지 - ${item.data.title}`}
        />
      </Link>
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
    </WebItemContainer>
  );
}

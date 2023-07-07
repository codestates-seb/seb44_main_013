import { Link } from 'react-router-dom';
import WebItem1 from '../../assets/WebItem1.png';
import Bookmark from '../bookmark/Bookmark';

import {
  BookmarkWrapper,
  WebItemContainer,
  WebItemImg,
} from './WebItem.styled';

export default function WebItem() {
  return (
    <WebItemContainer>
      <Link to="/portfolios/:portfolioId">
        <WebItemImg src={WebItem1} alt="웹 아이템1 이미지" />
      </Link>{' '}
      <BookmarkWrapper>
        <Bookmark />
      </BookmarkWrapper>
    </WebItemContainer>
  );
}

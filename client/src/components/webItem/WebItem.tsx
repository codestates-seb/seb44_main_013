import { Link } from 'react-router-dom';
import WebItem1 from '../../assets/WebItem1.png';
<<<<<<< HEAD
import Bookmark from '../bookmark/Bookmark';
=======
import Bookmark from '../../commons/atoms/buttons/Bookmark';
>>>>>>> 366484dbb3bd8e1e3ffb25a060debf2dda90b01d

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

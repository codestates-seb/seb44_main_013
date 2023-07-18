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
  // export default function WebItem({ portfolio }: WebItemProps) {
  // const { title, member } = portfolio;
  const items = Array.from({ length: 1 }, (_, index) => (
    <WebItemContainer key={index}>
      <Link to="/portfolios/:portfolioId">
        <WebItemImg src={WebItem1} alt={`웹 아이템 ${index + 1} 이미지`} />
      </Link>{' '}
      <TitleOverlay>
        <Title>{item.data.title}</Title>
        <Author>작성자 이름</Author>
      </TitleOverlay>
      <BookmarkWrapper>
        <Bookmark portfolioId={1} isToggled={false} />
      </BookmarkWrapper>
    </WebItemContainer>
  ));
  return <>{items}</>;
}

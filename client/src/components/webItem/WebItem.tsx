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
  itemCount: number; // 아이템 개수를 전달받는 prop
};
// type WebItemProps = {
//   portfolio: {
//     title: string;
//     member: {
//       name: string;
//       picture: string;
//     };
//   };
// };

export default function WebItem({ itemCount }: WebItemProps) {
  // export default function WebItem({ portfolio }: WebItemProps) {
  // const { title, member } = portfolio;
  const items = Array.from({ length: itemCount }, (_, index) => (
    <WebItemContainer>
      <Link to="/portfolios/:portfolioId">
        <WebItemImg src={WebItem1} alt={`웹 아이템 ${index + 1} 이미지`} />
      </Link>{' '}
      <TitleOverlay>
        <Title>웹 테스트 제목</Title>
        <Author>작성자 이름</Author>
      </TitleOverlay>
      <BookmarkWrapper>
        <Bookmark portfolioId={1} isToggled={false} />
      </BookmarkWrapper>
    </WebItemContainer>
  ));
  return <>{items}</>;
}

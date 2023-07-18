import item from '../../assets/3DImg.png';
import {
  Author,
  DItemContainer,
  Title,
  TitleOverlay,
} from './ThreeDItem.styled';
import { BookmarkWrapper } from '../webItem/WebItem.styled';
import Bookmark from '@/commons/atoms/buttons/Bookmark';

export default function ThreeDItem() {
  return (
    <DItemContainer>
      <img src={item} alt="3Dimg" />
      <TitleOverlay>
        <Title>3D 아이템 제목</Title>
        <Author>작성자 이름</Author>
      </TitleOverlay>
      <BookmarkWrapper>
        <Bookmark portfolioId={1} isToggled={false} />
      </BookmarkWrapper>
    </DItemContainer>
  );
}

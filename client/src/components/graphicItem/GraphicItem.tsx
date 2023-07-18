import {
  Author,
  GraphicItemContainer,
  Title,
  TitleOverlay,
} from './GraphicItem.styled';
import graphicimg from '../../assets/graphinImg.png';
import Bookmark from '@/commons/atoms/buttons/Bookmark';
import { BookmarkWrapper } from '../webItem/WebItem.styled';

export default function GraphicItem() {
  return (
    <GraphicItemContainer>
      <img src={graphicimg} alt="graphic image" />
      <TitleOverlay>
        <Title>3D 아이템 제목</Title>
        <Author>작성자 이름</Author>
      </TitleOverlay>
      <BookmarkWrapper>
        <Bookmark portfolioId={1} isToggled={false} />
      </BookmarkWrapper>
    </GraphicItemContainer>
  );
}

import {
  Author,
  GraphicItemContainer,
  Title,
  TitleOverlay,
} from './GraphicItem.styled';
import graphicimg from '../../assets/graphinImg.png';
import Bookmark from '@/commons/atoms/buttons/Bookmark';
import { BookmarkWrapper } from '../webItem/WebItem.styled';

type GraphicProps = {
  itemCount: number;
};

export default function GraphicItem({ itemCount }: GraphicProps) {
  const items = Array.from({ length: itemCount }, (_, index) => (
    <GraphicItemContainer>
      <img src={graphicimg} alt={`graphic image-${index}`} />
      <TitleOverlay>
        <Title>그래픽 아이템 제목</Title>
        <Author>작성자 이름</Author>
      </TitleOverlay>
      <BookmarkWrapper>
        <Bookmark portfolioId={1} isToggled={false} />
      </BookmarkWrapper>
    </GraphicItemContainer>
  ));
  return <>{items}</>;
}

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
  item: any;
};

export default function GraphicItem({ item }: GraphicProps) {
  const items = Array.from({ length: 1 }, (_, index) => (
    <GraphicItemContainer>
      <img src={graphicimg} alt={`graphic image-${index}`} />
      <TitleOverlay>
        <Title>{item.data.title}</Title>
        <Author>{item.data.membername}</Author>
      </TitleOverlay>
      <BookmarkWrapper>
        <Bookmark portfolioId={1} isToggled={false} />
      </BookmarkWrapper>
    </GraphicItemContainer>
  ));
  return <>{items}</>;
}

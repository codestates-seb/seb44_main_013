import { Author, GraphicItemContainer, Title, TitleOverlay } from './GraphicItem.styled';
import graphicimg from '../../assets/graphinImg.png';
import Bookmark from '@/commons/atoms/buttons/Bookmark';
import { BookmarkWrapper } from '../webItem/WebItem.styled';

type GraphicProps = {
  item: any;
};

export default function GraphicItem({ item }: GraphicProps) {
  return (
    <GraphicItemContainer>
      <img src={graphicimg} alt={`graphic image-${item.title}`} />
      <TitleOverlay>
        <Title>{item.title}</Title>
        <Author>{item.name}</Author>
      </TitleOverlay>
      <BookmarkWrapper>
        <Bookmark portfolioId={item.id} isToggled={item.marked} />
      </BookmarkWrapper>
    </GraphicItemContainer>
  );
}

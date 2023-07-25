import { Author, GraphicItemContainer, Title, TitleOverlay } from './GraphicItem.styled';
// import graphicimg from '../../assets/graphinImg.png';
import Bookmark from '@/commons/atoms/buttons/Bookmark';
import { BookmarkWrapper } from '../webItem/WebItem.styled';
import circleNoImg from '@/assets/circleNoImg.png';

type GraphicProps = {
  item: any;
};

export default function GraphicItem({ item }: GraphicProps) {
  const itemPic = item.firstImage === null ? circleNoImg : item.firstImage;

  return (
    <GraphicItemContainer>
      <img src={itemPic} alt={`graphic image-${item.title}`} />
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

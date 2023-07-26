import {
  Author,
  GraphicItemContainer,
  Title,
  TitleOverlay,
} from './GraphicItem.styled';
// import graphicimg from '../../assets/graphinImg.png';
import Bookmark from '@/commons/atoms/buttons/Bookmark';
import { BookmarkWrapper } from '../webItem/WebItem.styled';
import circleNoImg from '@/assets/circleNoImg.png';
import { Link } from 'react-router-dom';

type GraphicProps = {
  item: any;
};

export default function GraphicItem({ item }: GraphicProps) {
  const itemPic = item.firstImage === null ? circleNoImg : item.firstImage;

  return (
    <GraphicItemContainer>
      <Link to={`/portfolios/${item.id}`}>
        <img src={itemPic} alt={`graphic image-${item.title}`} />
        <TitleOverlay>
          <Title>{item.title}</Title>
          <Author>{item.member.name}</Author>
        </TitleOverlay>
        <BookmarkWrapper>
          <Bookmark portfolioId={item.id} isToggled={item.marked} />
        </BookmarkWrapper>
      </Link>
    </GraphicItemContainer>
  );
}

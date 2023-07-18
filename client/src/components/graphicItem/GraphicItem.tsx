import { GraphicItemContainer } from './GraphicItem.styled';
import graphicimg from '../../assets/graphinImg.png';
import Bookmark from '@/commons/atoms/buttons/Bookmark';
import { BookmarkWrapper } from '../webItem/WebItem.styled';

export default function GraphicItem() {
  return (
    <GraphicItemContainer>
      <img src={graphicimg} alt="graphic image" />
      <BookmarkWrapper>
        <Bookmark portfolioId={1} isToggled={false} />
      </BookmarkWrapper>
    </GraphicItemContainer>
  );
}

import item from '../../assets/3DImg.png';
import { DItemContainer } from './ThreeDItem.styled';
import { BookmarkWrapper } from '../webItem/WebItem.styled';
import Bookmark from '@/commons/atoms/buttons/Bookmark';

export default function ThreeDItem() {
  return (
    <DItemContainer>
      <img src={item} alt="3Dimg" />
      <BookmarkWrapper>
        <Bookmark portfolioId={1} isToggled={false} />
      </BookmarkWrapper>
    </DItemContainer>
  );
}

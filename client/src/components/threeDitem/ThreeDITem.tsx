import threeDimg from '../../assets/3DImg.png';
import {
  Author,
  DItemContainer,
  Title,
  TitleOverlay,
} from './ThreeDItem.styled';
import { BookmarkWrapper } from '../webItem/WebItem.styled';
import Bookmark from '@/commons/atoms/buttons/Bookmark';

type AnimationProps = {
  item: any;
};

export default function ThreeDItem({ item }: AnimationProps) {
  const items = Array.from({ length: 1 }, (_, index) => (
    <DItemContainer>
      <img src={threeDimg} alt={`3Dimg-${index}`} />
      <TitleOverlay>
        <Title>{item.data.title}</Title>
        <Author>{item.data.membername}</Author>
      </TitleOverlay>
      <BookmarkWrapper>
        <Bookmark portfolioId={1} isToggled={false} />
      </BookmarkWrapper>
    </DItemContainer>
  ));
  return <>{items}</>;
}

import threeDimg from '../../assets/3DImg.png';
import { Author, DItemContainer, Title, TitleOverlay } from './ThreeDItem.styled';
import { BookmarkWrapper } from '../webItem/WebItem.styled';
import Bookmark from '@/commons/atoms/buttons/Bookmark';

type AnimationProps = {
  item: any;
};

export default function ThreeDItem({ item }: AnimationProps) {
  return (
    <DItemContainer>
      <img src={threeDimg} alt={`3Dimg-${item.title}`} />
      <TitleOverlay>
        <Title>{item.title}</Title>
        <Author>{item.name}</Author>
      </TitleOverlay>
      <BookmarkWrapper>
        <Bookmark portfolioId={item.id} isToggled={item.marked} />{' '}
      </BookmarkWrapper>
    </DItemContainer>
  );
}

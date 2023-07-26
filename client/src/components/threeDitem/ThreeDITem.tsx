import { Link } from 'react-router-dom';
import {
  Author,
  DItemContainer,
  Title,
  TitleOverlay,
} from './ThreeDItem.styled';
import { BookmarkWrapper } from '../webItem/WebItem.styled';
import Bookmark from '@/commons/atoms/buttons/Bookmark';
import circleNoImg from '@/assets/circleNoImg.png';

type AnimationProps = {
  item: any;
};

export default function ThreeDItem({ item }: AnimationProps) {
  const itemPic = item.firstImage === null ? circleNoImg : item.firstImage;

  return (
    <DItemContainer>
      <Link to={`/portfolios/${item.id}`}>
        <img src={itemPic} alt={`3Dimg-${item.title}`} />
        <TitleOverlay>
          <Title>{item.title}</Title>
          <Author>{item.member.name}</Author>
        </TitleOverlay>
        <BookmarkWrapper>
          <Bookmark portfolioId={item.id} isToggled={item.marked} />{' '}
        </BookmarkWrapper>
      </Link>
    </DItemContainer>
  );
}

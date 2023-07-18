import item from '../../assets/3DImg.png';
import {
  Author,
  DItemContainer,
  Title,
  TitleOverlay,
} from './ThreeDItem.styled';
import { BookmarkWrapper } from '../webItem/WebItem.styled';
import Bookmark from '@/commons/atoms/buttons/Bookmark';

type AnimationProps = {
  itemCount: number;
  searchValue?: string;
};

export default function ThreeDItem({ itemCount, searchValue }: AnimationProps) {
  const items = Array.from({ length: itemCount }, (_, index) => (
    <DItemContainer>
      <img src={item} alt={`3Dimg-${index}`} />
      <TitleOverlay>
        <Title>3D 아이템 제목</Title>
        <Author>작성자 이름</Author>
      </TitleOverlay>
      <BookmarkWrapper>
        <Bookmark portfolioId={1} isToggled={false} />
      </BookmarkWrapper>
    </DItemContainer>
  ));

  const filteredItems = searchValue
    ? items.filter((item) => {
        const itemTitle =
          item.props.children.props.children[0]?.props.children || '';
        return itemTitle.includes(searchValue);
      })
    : items;

  return <>{filteredItems}</>;
}

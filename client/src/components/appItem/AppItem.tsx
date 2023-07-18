import {
  AppItemContainer,
  Author,
  Title,
  TitleOverlay,
} from './AppItem.stlyed';
import item from '../../assets/appImg.png';
import { AiOutlineWifi } from 'react-icons/ai';
import { BsBatteryFull } from 'react-icons/bs';
import Bookmark from '../../commons/atoms/buttons/Bookmark';
import { BookmarkWrapper } from '../webItem/WebItem.styled';

type AppItemProps = {
  itemCount: number;
  searchValue?: string;
};

export default function AppItem({ itemCount, searchValue }: AppItemProps) {
  const items = Array.from({ length: itemCount }, (_, index) => (
    <AppItemContainer key={index}>
      <span>10:30</span>
      <div className="iconsWrap">
        <AiOutlineWifi size={20} />
        <BsBatteryFull size={20} />
      </div>
      <img src={item} alt={`appImg-${index}`} />
      <TitleOverlay>
        <Title>앱 테스트 제목</Title>
        <Author>작성자 이름</Author>
      </TitleOverlay>
      <BookmarkWrapper>
        <Bookmark portfolioId={1} isToggled={false} />
      </BookmarkWrapper>
    </AppItemContainer>
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

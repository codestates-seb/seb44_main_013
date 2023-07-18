import {
  AppItemContainer,
  Author,
  Title,
  TitleOverlay,
} from './AppItem.stlyed';
import appImg from '../../assets/appImg.png';
import { AiOutlineWifi } from 'react-icons/ai';
import { BsBatteryFull } from 'react-icons/bs';
import Bookmark from '../../commons/atoms/buttons/Bookmark';
import { BookmarkWrapper } from '../webItem/WebItem.styled';

type AppItemProps = {
  item: any
};

export default function AppItem({ item }: AppItemProps) {
  const items = Array.from({ length: 1 }, (_, index) => (
    <AppItemContainer>
      <span>10:30</span>
      <div className="iconsWrap">
        <AiOutlineWifi size={20} />
        <BsBatteryFull size={20} />
      </div>
      <img src={appImg} alt={`appImg-${index}`} />
      <TitleOverlay>
        <Title>{item.data.title}</Title>
        <Author>{item.data.membername}</Author>
      </TitleOverlay>
      <BookmarkWrapper>
        <Bookmark portfolioId={1} isToggled={false} />
      </BookmarkWrapper>
    </AppItemContainer>
  ));
  return <>{items}</>;
}

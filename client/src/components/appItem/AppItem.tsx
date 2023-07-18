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
  item: any;
};

export default function AppItem({ item }: AppItemProps) {
  return (
    <AppItemContainer>
      <span>10:30</span>
      <div className="iconsWrap">
        <AiOutlineWifi size={20} />
        <BsBatteryFull size={20} />
      </div>
      <img src={appImg} alt={`appImg-${item.data.title}`} />
      <TitleOverlay>
        <Title>{item.data.title}</Title>
        <Author>{item.data.membername}</Author>
      </TitleOverlay>
      <BookmarkWrapper>
        <Bookmark
          portfolioId={item.data.portfolioId}
          isToggled={item.data.isMarked}
        />
      </BookmarkWrapper>
    </AppItemContainer>
  );
}

import { AppItemContainer } from './AppItem.stlyed';
import item from '../../assets/appImg.png';
import { AiOutlineWifi } from 'react-icons/ai';
import { BsBatteryFull } from 'react-icons/bs';
import Bookmark from '../../commons/atoms/buttons/Bookmark';
import { BookmarkWrapper } from '../webItem/WebItem.styled';

export default function AppItem() {
  return (
    <AppItemContainer>
      <span>10:30</span>
      <div className="iconsWrap">
        <AiOutlineWifi size={20} />
        <BsBatteryFull size={20} />
      </div>
      <img src={item} alt="appImg" />
      <BookmarkWrapper>
        <Bookmark portfolioId={1} isToggled={false} />
      </BookmarkWrapper>
    </AppItemContainer>
  );
}

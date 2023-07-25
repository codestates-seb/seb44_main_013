import { AppItemContainer, Author, Title, TitleOverlay } from './AppItem.stlyed';
// import appImg from '../../assets/appImg.png';
import { AiOutlineWifi } from 'react-icons/ai';
import { BsBatteryFull } from 'react-icons/bs';
import Bookmark from '../../commons/atoms/buttons/Bookmark';
import { BookmarkWrapper } from '../webItem/WebItem.styled';
import circleNoImg from '@/assets/circleNoImg.png';

type AppItemProps = {
  item: any;
};

export default function AppItem({ item }: AppItemProps) {
  const itemPic = item.firstImage === null ? circleNoImg : item.firstImage;

  return (
    <AppItemContainer>
      <span>10:30</span>
      <div className="iconsWrap">
        <AiOutlineWifi size={20} />
        <BsBatteryFull size={20} />
      </div>
      <img src={itemPic} alt={`appImg-${item.title}`} />
      <TitleOverlay>
        <Title>{item.title}</Title>
        <Author>{item.name}</Author>
      </TitleOverlay>
      <BookmarkWrapper>
        <Bookmark portfolioId={item.id} isToggled={item.marked} />
      </BookmarkWrapper>
    </AppItemContainer>
  );
}

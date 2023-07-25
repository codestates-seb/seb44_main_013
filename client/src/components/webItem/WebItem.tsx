import { Link } from 'react-router-dom';
// import WebItem1 from '../../assets/WebItem1.png';
import Bookmark from '../../commons/atoms/buttons/Bookmark';
// import circleNoImg from '@/assets/circleNoImg.png';
import { Author, BookmarkWrapper, Title, TitleOverlay, WebItemContainer, WebItemImg } from './WebItem.styled';

import temp1 from '@/assets/temp/temp1.png';
import temp2 from '@/assets/temp/temp2.png';
import temp3 from '@/assets/temp/temp3.png';
import temp4 from '@/assets/temp/temp4.png';
import temp5 from '@/assets/temp/temp5.png';
import temp6 from '@/assets/temp/temp6.png';

type WebItemProps = {
  item: any;
};

export default function WebItem({ item }: WebItemProps) {
  const tempPic = [temp1, temp2, temp3, temp4, temp5, temp6];
  const selectedImgIndex = item.id % tempPic.length;
  // console.log(item);
  return (
    <WebItemContainer>
      <Link to={`/portfolios/${item.id}`}>
        <WebItemImg src={tempPic[selectedImgIndex]} alt={`웹 아이템 이미지 - ${item.title}`} />
      </Link>
      <TitleOverlay>
        <Title>{item.title}</Title>
        <Author>{item.member.name}</Author>
      </TitleOverlay>
      <BookmarkWrapper>
        <Bookmark portfolioId={item.id} isToggled={item.marked} />
      </BookmarkWrapper>
    </WebItemContainer>
  );
}

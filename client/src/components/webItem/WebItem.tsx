import { Link } from 'react-router-dom';

import { Portfolio } from '@/types';

import Bookmark from '../../commons/atoms/buttons/bookmark_like/BookmarkButton';
import { 
  Author,
  BookmarkWrapper, 
  Title, 
  TitleOverlay, 
  WebItemContainer, 
  WebItemImg 
} from './WebItem.styled';
import temp1 from '@/assets/temp/temp1.png';
import temp2 from '@/assets/temp/temp2.png';
import temp3 from '@/assets/temp/temp3.png';
import temp4 from '@/assets/temp/temp4.png';
import temp5 from '@/assets/temp/temp5.png';
import temp6 from '@/assets/temp/temp6.png';


export default function WebItem( props: {item: Portfolio} ) {
  const item = props.item;
  const tempPic = [temp1, temp2, temp3, temp4, temp5, temp6];
  const selectedImgIndex = item.id % tempPic.length;
  const itemPic = item.firstImage === null ? tempPic[selectedImgIndex] : item.firstImage;

  return (
    <WebItemContainer>
      <Link to={`/portfolios/${item.id}`}>
        <WebItemImg src={itemPic} alt={`웹 아이템 이미지 - ${item.title}`} />
        <TitleOverlay>
          <Title>{item.title}</Title>
          <Author>{item.member.name}</Author>
        </TitleOverlay>
        <BookmarkWrapper>
          <Bookmark portfolioId={item.id} isToggled={item.marked} />
        </BookmarkWrapper>
      </Link>
    </WebItemContainer>
  );
}

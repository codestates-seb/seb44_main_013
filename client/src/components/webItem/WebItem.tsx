import WebItem1 from '../../assets/WebItem1.png';
import Bookmark from '../bookmark/Bookmark';

import { WebItemContainer, WebItemImg } from './WebItem.styled';

export default function WebItem() {
  return (
    <WebItemContainer>
      <WebItemImg src={WebItem1} alt="웹 아이템1 이미지" />
      <>
        <Bookmark />
      </>
    </WebItemContainer>
  );
}

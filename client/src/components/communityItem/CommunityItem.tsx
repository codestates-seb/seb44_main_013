import { CommunityItemContainer } from './CommunityItem.styled';
import Views from '../views/Views';
import Image from '@/commons/atoms/Image';

export default function CommunityItem() {
  return (
    <CommunityItemContainer>
      <Image />
      <h2>Title</h2>
      <p>contents</p>
      <Views />
    </CommunityItemContainer>
  );
}

import { CommunityItemContainer } from './CommunityItem.styled';
import Views from '../views/Views';
import UserProfile from '@/commons/molecules/UserProfile';

export default function CommunityItem() {
  return (
    <CommunityItemContainer>
      <UserProfile type={'board'} username={'emma'} />
      <h2>Title</h2>
      <p>contents</p>
      <Views />
    </CommunityItemContainer>
  );
}

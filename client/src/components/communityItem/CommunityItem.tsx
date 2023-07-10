import { CommunityItemContainer } from './CommunityItem.styled';
import Views from '../views/Views';
import UserProfile from '@/commons/molecules/UserProfile';

export default function CommunityItem() {
  return (
    <CommunityItemContainer>
      <UserProfile type={'board'} user={{ member_id: 1, name: 'dsf', picture: 'asdf' }} />
      <h2>Title</h2>
      <p>contents</p>
      <Views />
    </CommunityItemContainer>
  );
}

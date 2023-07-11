import { CommunityItemContainer } from './CommunityItem.styled';
import Views from '../views/Views';
import UserProfile from '@/commons/molecules/UserProfile';

export default function CommunityItem(datas: any) {
  const eachData = datas.datas

  return (
    <CommunityItemContainer>
      <UserProfile type={'board'} user={{ member_id: eachData.member_id, name: eachData.name, picture: 'https://picsum.photos/200/300' }} />
      <h2>{eachData.title}</h2>
      <p>{eachData.content}</p>
      <Views view={eachData.view}/>
    </CommunityItemContainer>
  );
}

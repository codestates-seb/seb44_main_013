import { useNavigate } from 'react-router-dom';

import { CommuProps } from '@/types';

import { CommunityItemContainer } from './CommunityItem.styled';

import Views from '../views/Views';
import UserProfile from '@/commons/molecules/UserProfile';


export default function CommunityItem(datas: any) {
  const navigate = useNavigate();
  const eachData = datas.datas

  const handleLink = (e: CommuProps) => {
    navigate(`/boards/${e.id}`, { state: e });
    console.log(e.id);
  }

  return (
    <CommunityItemContainer onClick={() => { handleLink(eachData) }}>
      <UserProfile type={'board'} user={{ member_id: eachData.memberId, name: eachData.name, picture: 'https://picsum.photos/200/300' }} />
      <h2>{eachData.title}</h2>
      <p>{eachData.content}</p>
      <Views view={eachData.view} />
    </CommunityItemContainer>
  );
}

import { useNavigate } from 'react-router-dom';

import { CommuProps } from '@/types';

import { CommunityItemContainer } from './CommunityItem.styled';

import Views from '../views/Views';
import MemberProfile from '@/commons/molecules/MemberProfile';

export default function CommunityItem({communityItem}: any) {
  const navigate = useNavigate();
  const eachData = communityItem;
  //console.log(eachData);

  const handleLink = (e: CommuProps) => {
    navigate(`/boards/${e.id}`, { state: e });
    //console.log(e.id);
  }

  return (
    <CommunityItemContainer onClick={() => { handleLink(eachData) }}>
      <MemberProfile type={'board'} member={{ memberId: eachData.member_id, name: eachData.name, picture: 'https://picsum.photos/200/300' }} />
      <h2>{eachData.title}</h2>
      <p>{eachData.content}</p>
      <Views view={eachData.view} />
    </CommunityItemContainer>
  );
}

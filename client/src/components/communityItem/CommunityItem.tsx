import { CommunityItemContainer } from './CommunityItem.styled';
import Views from '../views/Views';
import UserProfile from '@/commons/molecules/UserProfile';
import { useNavigate } from 'react-router-dom';
import { CommuProps } from '@/types';

export default function CommunityItem(datas: any) {
  const navigate = useNavigate();
  const eachData = datas.datas

<<<<<<< HEAD
  const HandleClick= ( e:CommuProps ) => {
=======
  const HandleClick = (e: CommuProps) => {
>>>>>>> 366484dbb3bd8e1e3ffb25a060debf2dda90b01d
    navigate(`/boards/${e.board_id}`, { state: e });
  }

  return (
<<<<<<< HEAD
    <CommunityItemContainer onClick={() => { HandleClick(eachData)}}>
      <UserProfile type={'board'} user={{ member_id: eachData.member_id, name: eachData.name, picture: 'https://picsum.photos/200/300' }} />
      <h2>{eachData.title}</h2>
      <p>{eachData.content}</p>
      <Views view={eachData.view}/>
=======
    <CommunityItemContainer onClick={() => { HandleClick(eachData) }}>
      <UserProfile type={'board'} user={{ member_id: eachData.member_id, name: eachData.name, picture: 'https://picsum.photos/200/300' }} />
      <h2>{eachData.title}</h2>
      <p>{eachData.content}</p>
      <Views view={eachData.view} />
>>>>>>> 366484dbb3bd8e1e3ffb25a060debf2dda90b01d
    </CommunityItemContainer>
  );
}

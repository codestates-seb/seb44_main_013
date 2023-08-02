import { useNavigate } from 'react-router-dom';

import { CommuProps } from '@/types';

import { CommunityItemContainer } from './CommunityItem.styled';

import Views from '../views/Views';
import MemberProfile from '@/commons/molecules/profile/MemberProfile';
import circleNoImg from '@/assets/circleNoImg.png';

export default function CommunityItem({ communityItem }: any) {
  const navigate = useNavigate();
  const eachData = communityItem;
  // const itemPic = eachData.imagUrl === null ? circleNoImg : eachData.imagUrl;
  // console.log(eachData);

  const handleLink = (e: CommuProps) => {
    navigate(`/boards/${e.id}`, { state: e });
  };

  const TextTruncate = ({ text, maxLength }: any) => {
    if (text.length <= maxLength) {
      return <p>{text}</p>;
    } else {
      const truncatedText = text.slice(0, maxLength) + '...';
      return <p>{truncatedText}</p>;
    }
  };

  return (
    <CommunityItemContainer
      onClick={() => {
        handleLink(eachData);
      }}
    >
      <MemberProfile
        type={'board'}
        member={{
          id: eachData.memberInfo.memberId,
          name: eachData.memberInfo.name,
          imageUrl: circleNoImg,
        }}
      />
      <h2>{eachData.title}</h2>
      <TextTruncate text={eachData.content} maxLength={65} />
      <Views view={eachData.view} />
    </CommunityItemContainer>
  );
}

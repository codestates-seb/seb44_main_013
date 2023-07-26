import { useNavigate } from 'react-router-dom';

import { CommuProps } from '@/types';

import { CommunityItemContainer } from './CommunityItem.styled';

import Views from '../views/Views';
import MemberProfile from '@/commons/molecules/profile/MemberProfile';

export default function CommunityItem({ communityItem }: any) {
  const navigate = useNavigate();
  const eachData = communityItem;

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
          id: eachData.memberId,
          name: eachData.name,
          imageUrl: 'https://picsum.photos/200/300',
        }}
      />
      <h2>{eachData.title}</h2>
      <TextTruncate text={eachData.content} maxLength={65} />
      <Views view={eachData.view} />
    </CommunityItemContainer>
  );
}

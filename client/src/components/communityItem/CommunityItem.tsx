import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserImageHandler from '@/hooks/useUserImageHandler';

import { CommuProps } from '@/types';

import { CommunityItemContainer } from './CommunityItem.styled';
import Views from '../views/Views';
import MemberProfile from '@/commons/molecules/profile/MemberProfile';


export default function CommunityItem( props: { communityItem: CommuProps }) {
  const communityItem = props.communityItem;
  const navigate = useNavigate();
  const eachData = communityItem;
  const [userProfileImage, _] = useState<string | JSX.Element>(useUserImageHandler(communityItem.memberInfo.memberId));

  const handleLink = (e: CommuProps) => {
    navigate(`/boards/${e.id}`, { state: e });
  };

  const TextTruncate = (props: { text: string; maxLength: number }): JSX.Element => {
    const { text, maxLength } = props;
    
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
          imageUrl: userProfileImage,
        }}
      />
      <h2>{eachData.title}</h2>
      <TextTruncate text={eachData.content} maxLength={65} />
      <Views view={eachData.view} />
    </CommunityItemContainer>
  );
}

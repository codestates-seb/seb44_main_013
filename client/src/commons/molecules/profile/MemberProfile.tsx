/* 2023-07-03 유저 프로필 컴포넌트 - 김다함 */
import { Member } from '@/types';

import { MemberProfileWrapper } from '@/commons/molecules/profile/MemberProfile.styled';
import { FlexColumnWrapper } from '@/commons/styles/Containers.styled';
import { SmallText } from '@/commons/atoms/text/Typography';
import Image from '@/commons/atoms/image/Image';
import Label from '@/commons/atoms/text/Label';

interface MemberProfile {
  type: 'board' | 'comment' | 'portfolio' | 'blackboard';
  member: Member;
  date?: string;
}

const ImageSizes: any = {
  board: 65,
  comment: 35,
  portfolio: 100,
  blackboard: 65
}

const MemberProfile = ({ type, member, date }: MemberProfile) => {
  return (
    <MemberProfileWrapper gap={15}>
      <Image src={member.picture} url={`/members/${member.memberId}`} shape='circle' size={ImageSizes[type]} />
      {type === 'portfolio' &&
        <Label text={member.name} type={type} url={`/members/${member.memberId}`} />
      }
      {type !== 'portfolio' &&
        <FlexColumnWrapper>
          <Label text={member.name} type={type} url={`/members/${member.memberId}`} />
          <SmallText color={type === 'blackboard' ? 'white' : ''}>{date}</SmallText>
        </FlexColumnWrapper>
      }
    </MemberProfileWrapper >
  )
}

export default MemberProfile;
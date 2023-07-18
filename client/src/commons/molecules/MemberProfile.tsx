/* 2023-07-03 유저 프로필 컴포넌트 - 김다함 */
import { Member } from '@/types';

import { FlexColumnWrapper, FlexWrapper } from '../styles/Containers.styled';
import { SmallText } from '../atoms/Typography';
import Image from '@/commons/atoms/Image';
import Label from '@/commons/atoms/Label';

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
    <FlexWrapper gap={15} className='items-center'>
      <Image src={member.picture} url={`/members/${member.memberId}`} shape='circle' size={ImageSizes[type]} />
      {type === 'portfolio' ?
        <Label text={member.name} type={type} url={`/members/${member.memberId}`} />
        :
        <FlexColumnWrapper gap={0}>
          <Label text={member.name} type={type} url={`/members/${member.memberId}`} />
          <SmallText className={type === 'blackboard' ? 'text-white' : ''}>{date}</SmallText>
        </FlexColumnWrapper>
      }
    </FlexWrapper >
  )
}

export default MemberProfile;
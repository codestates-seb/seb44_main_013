import { FlexColumnWrapper, FlexWrapper } from '../styles/Containers.styled';
import Image from '@/commons/atoms/Image';
import Label from '@/commons/atoms/Label';
import { SmallText } from '../atoms/Typography';
import { Member } from '@/types';

interface UserProfile {
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

const MemberProfile = ({ type, member, date }: UserProfile) => {
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
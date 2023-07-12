import { FlexColumnWrapper, FlexWrapper } from '../styles/Containers.styled';
import Image from '@/commons/atoms/Image';
import Label from '@/commons/atoms/Label';
import { SmallText } from '../atoms/Typography';
import { User } from '@/types';

interface UserProfileProps {
  type: 'board' | 'comment' | 'portfolio' | 'blackboard';
  user: User;
  date?: string;
}

const ImageSizes: any = {
  board: 65,
  comment: 35,
  portfolio: 100,
  blackboard: 65
}

const UserProfile = ({ type, user, date }: UserProfileProps) => {
  return (
    <FlexWrapper gap={15} className='items-center'>
      <Image src={user.picture} url={`/members/${user.member_id}`} shape='circle' size={ImageSizes[type]} />
      {type === 'portfolio' ?
        <Label text={user.name} type={type} url={`/members/${user.member_id}`} />
        :
        <FlexColumnWrapper gap={0}>
          <Label text={user.name} type={type} url={`/members/${user.member_id}`} />
          <SmallText className={type === 'blackboard' ? 'text-zinc-200 text-white' : ''}>{date}2022.06.30</SmallText>
        </FlexColumnWrapper>
      }
    </FlexWrapper >
  )
}

export default UserProfile;
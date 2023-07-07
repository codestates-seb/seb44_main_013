// Point. 어느 Item이든 넣을 수 있어야 한다.
// 아이템의 폭이나 높이에 맞게 조절되어야 한다.
// 게시판 아이템 - 프로필, 닉네임 날짜 === 게시판 상세보기
// 댓글 - 프로필, 이름
// 포트폴리오 상세보기 - 프로필, 이름 (인데 댓글보다는 훨씬 크고 폰트도 굵다)

import { FlexColumnWrapper, FlexWrapper } from '../styles/Containers.styled';
import Image from '@/commons/atoms/Image';
import Label from '@/commons/atoms/Label';
import userImg from '@/assets/userImg.jpg';
import { SmallText } from '../atoms/Typography';

// props
// 게시판 용이냐 아니냐에 따라 날짜 기입
// mini, middle, large

interface UserProfileProps {
  type: 'board' | 'comment' | 'portfolio' | 'blackboard';
  username: string;
  date?: string;
}

const ImageSizes: any = {
  board: 65,
  comment: 35,
  portfolio: 100,
  blackboard: 65
}

const UserProfile = ({ type, username, date }: UserProfileProps) => {
  return (
    <FlexWrapper gap={15} className='items-center'>
      <Image url={userImg} shape='circle' size={ImageSizes[type]} />
      {type === 'portfolio' ?
        <Label text={username} type={type} />
        :
        <FlexColumnWrapper gap={0}>
          <Label text={username} type={type} />
          <SmallText className={type === 'blackboard' ? 'text-zinc-200 text-white' : ''}>{date}2022.06.30</SmallText>
        </FlexColumnWrapper>
      }
    </FlexWrapper >
  )
}

export default UserProfile;
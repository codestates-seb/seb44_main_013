/* 2023-07-05 게시물 댓글(낱개) 컴포넌트 - 김다함 */
import { FlexColumnContainer, FlexWrapper } from '../styles/Containers.styled';
import UserProfile from './UserProfile';
import ReviseBtn from '../atoms/buttons/revise-remove/ReviseBtn';
import RemoveBtn from '../atoms/buttons/revise-remove/RemoveBtn';
import { BodyText, SmallText } from '../atoms/Typography';
import { CommentProps } from '@/types';

interface CommuCommentProps {
  username: string;
  content: string;
  date: string;
  comment: CommentProps;
}

export default function Comment({ username, content, date, comment }: CommuCommentProps) {
  const nDate = new Date(date);
  const convertDate = nDate.toLocaleDateString('en-US',{
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).replace(/\//g, '.');

  return (
    <FlexColumnContainer gap={10} className='w-full border-b-[1px] pb-1.5 pt-3'>
      <FlexWrapper gap={0} className='w-full justify-between'>
        <UserProfile type='comment' user={{ member_id: comment.member_id, name: username, picture: 'https://picsum.photos/200/300' }} />
        <FlexWrapper gap={0}>
          <ReviseBtn color={'black'} />
          <RemoveBtn color={'black'} />
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper gap={0} className='w-full justify-between'>
        <BodyText>{content}</BodyText>
        <SmallText color='gray'>{convertDate}</SmallText>
      </FlexWrapper>
    </FlexColumnContainer>
  )
}
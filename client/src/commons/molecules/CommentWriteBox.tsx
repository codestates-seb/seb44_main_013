/* 2023-07-05 게시물 댓글 작성란 컴포넌트 - 김다함 */
import { FlexColumnContainer, FlexWrapper } from '../styles/Containers.styled';
import UserProfile from './UserProfile';
import { TextArea } from '@/commons/styles/Inputs.styled';
import SaveBtn from '../atoms/buttons/writing/SaveBtn';


export default function CommentWriteBox({saveComment, handleComment, isInput}:any) {

  return (
    <FlexColumnContainer gap={5} className='w-full bt-[1px] mt-10'>
      <FlexWrapper gap={0} className='w-full justify-between'>
        <UserProfile type='comment' user={{ member_id: 1, name: 'jhj', picture: 'https://picsum.photos/233'  }} />
        <SaveBtn onClick={saveComment} />
      </FlexWrapper>
      <TextArea className="w-full h-20" 
        placeholder="write your comment" 
        value={isInput}
        onChange={(e:any) => handleComment(e.target.value)}
      />
    </FlexColumnContainer>
  )
} 
/* 2023-07-05 게시물 댓글 작성란 컴포넌트 UI - 김다함 */
import SaveBtn from '../../atoms/buttons/writing/SaveBtn';
import MemberProfile from '../profile/MemberProfile';
import { CommentContainer, CommentWrapper, CommentInput } from './Comment.styled';

export default function CommentWriteBox({ saveComment, handleComment, isInput }: any) {
  return (
    <CommentContainer gap={5}>
      <CommentWrapper gap={0}>
        <MemberProfile type="comment" member={{ id: 1, name: 'jhj', imageUrl: 'https://picsum.photos/233' }} />
        <SaveBtn onClick={saveComment} />
      </CommentWrapper>
      <CommentInput
        placeholder="write your comment"
        value={isInput}
        onChange={(e: any) => handleComment(e.target.value)}
      />
    </CommentContainer>
  );
}

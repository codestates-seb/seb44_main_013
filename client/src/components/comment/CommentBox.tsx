import { useParams } from 'react-router-dom';
import { useState } from 'react';

import { CommentProps } from '@/types';

import Card from '@/commons/atoms/card/Card';
import Comment from '@/commons/molecules/comment/Comment';
import { FlexColumnContainer } from '@/commons/styles/Containers.styled';
import CommentWriteBox from '@/commons/molecules/comment/CommentWriteBox';
import { JbWrapper } from '@/pages/community-detail/CommunityDetail.styled';
import noComment from '@/assets/noComment.png';
import netaxios from '@/utils/axiosIntercept';

interface CommentBoxProps {
  comments: CommentProps[];
  handleRender: () => void;
}

export default function CommentBox({ comments, handleRender }: CommentBoxProps) {
  const [currentComment, setCurrentComment] = useState('');
  const [amendComment, setAmendComment] = useState(comments);
  const { id: boardId } = useParams();

  const handleComment = (value: string) => {
    setCurrentComment(value);
  };

  //댓글 등록 작동 버튼
  const saveComment = () => {
    const addNewComment = async () => {
      await netaxios
        .post(`/comments`, {
          boardId: boardId,
          content: currentComment,
        })
        .then((res) => {
          console.log('댓글 등록 완료');
          console.log(res);
          handleRender();
        })
        .catch((err) => console.log(err));
    };

    addNewComment();
    setCurrentComment('');
  };

  if (amendComment.length <= 0) {
    return (
      <Card>
        <JbWrapper>
          <FlexColumnContainer gap={0}>
            <img src={noComment} alt="no comments" />
          </FlexColumnContainer>
          <CommentWriteBox saveComment={saveComment} handleComment={handleComment} isInput={currentComment} />
        </JbWrapper>
      </Card>
    );
  }

  return (
    <Card>
      <JbWrapper>
        <FlexColumnContainer gap={0} className="overflow-scroll">
          {amendComment.map((element: CommentProps) => {
            return (
              <Comment
                key={element.id}
                username={element.memberInfo.name}
                content={element.content}
                date={element.createdAt}
                comments={element}
                // setDeleteId={setDeleteId}
                setAmendComment={setAmendComment}
                boardId={boardId}
              />
            );
          })}
        </FlexColumnContainer>
        <CommentWriteBox saveComment={saveComment} handleComment={handleComment} isInput={currentComment} />
      </JbWrapper>
    </Card>
  );
}

/* 2023-07-05 게시물 상세보기 페이지 댓글 영역 컴포넌트 UI - 김다함 */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { CommentProps } from '@/types';

// import { call } from '@/utils/apiService';

import Card from '@/commons/atoms/card/Card';
import Comment from '@/commons/molecules/comment/Comment';
import { FlexColumnContainer } from '@/commons/styles/Containers.styled';
import CommentWriteBox from '@/commons/molecules/comment/CommentWriteBox';
import { JbWrapper } from '@/pages/community-detail/CommunityDetail.styled';
import noComment from '@/assets/noComment.png';
import netaxios from '@/utils/axiosIntercept';

export default function CommentBox({ comments = [] }: any) {
  const [currentComment, setCurrentComment] = useState('');
  const [amendComment, setAmendComment] = useState(comments);
  const [deleteId, setDeleteId] = useState(null);
  const { id: boardId } = useParams();
  console.log('CommentBox');
  console.log(amendComment);

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
        })
        .catch((err) => console.log(err));
    };
    // const addNewComment = () =>
    //   call(`/comments`, 'POST', {
    //     id: boardId,
    //     content: currentComment,
    //   });
    // const axiosPost = async () => {
    //   return addNewComment()
    //     .then((res) => {
    //       console.log('댓글 등록 완요!');
    //       console.log(res);
    //     })
    //     .catch((err) => console.log('댓글 등록 에러' + err));
    // };

    addNewComment();
    // amendComment.push({
    //   id: comments.length + 1,
    //   content: currentComment,
    //   name: 'jhj',
    //   createdAt: '2023-06-21T17:34:51.3395597',
    //   modifiedAt: '2023-06-21T17:34:51.3395597',
    //   status: 'POST_ACTIVE',
    // });
    setCurrentComment('');
  };

  useEffect(() => {
    const index = amendComment.findIndex((element: any) => element.id === deleteId);

    // 첫번째 댓글 지울 때
    if (index === 0) {
      // 수정합시당 : 과제
      setAmendComment(amendComment.slice(1, amendComment.length));
    }

    if (index > 0) {
      setAmendComment(amendComment.slice(0, index).concat(amendComment.slice(index + 1, amendComment.length)));
    }

    setDeleteId(null);
  }, [deleteId]);

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
          {/* prettier amendcomment -> ammendComments  ;; element -> amendComment*/}
          {amendComment.map((element: CommentProps) => {
            return (
              <Comment
                key={element.id}
                username={element.name}
                content={element.content}
                date={element.createdAt}
                comments={element}
                setDeleteId={setDeleteId}
                setAmendComment={setAmendComment}
              />
            );
          })}
        </FlexColumnContainer>
        <CommentWriteBox saveComment={saveComment} handleComment={handleComment} isInput={currentComment} />
      </JbWrapper>
    </Card>
  );
}

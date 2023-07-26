/* 2023-07-05 게시물 댓글(낱개) 컴포넌트 UI - 김다함 */
import { useEffect, useRef, useState } from 'react';

import { CommentProps } from '@/types';

import { CommentContainer, CommentWrapper } from '@/commons/molecules/comment/Comment.styled';
import ReviseBtn from '@/commons/atoms/buttons/revise-remove/ReviseBtn';
import RemoveBtn from '@/commons/atoms/buttons/revise-remove/RemoveBtn';
import { FlexWrapper } from '@/commons/styles/Containers.styled';
import { BodyText, SmallText } from '@/commons/atoms/text/Typography';
import MemberProfile from '@/commons/molecules/profile/MemberProfile';
import netaxios from '@/utils/axiosIntercept';
import { AxiosError } from 'axios';
import AlertModal from '@/components/modal/AlertModal';

interface CommuCommentProps {
  username: string;
  content: string;
  date: string;
  comments: CommentProps;
  setDeleteId: any;
  setAmendComment?: any;
  boardId: any;
}

interface ErrorResponse {
  errorCode: number;
  errorCodeInfo: string;
  errorMessage: string;
  Action: string;
}

export default function Comment({ username, content, date, comments, setDeleteId, boardId }: CommuCommentProps) {
  //setAmendComment

  const inputEl = useRef(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [basicContent, setBasicContent] = useState(content);
  const [closeModal, setCloseModal] = useState(true);

  const newDate = new Date(date);
  const convertDate = newDate
    .toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\//g, '.');

  //댓글 수정
  const axiosPatch = async () => {
    const data = {
      boardId: boardId,
      content: basicContent,
    };

    await netaxios
      .patch(`https://portfolly013.netlify.app/comments/${comments.id}`, data)
      .then((res) => {
        console.log('PATCH 성공');
        console.log(res);
      })
      .catch((err: AxiosError<ErrorResponse>) => {
        const axiosError = err as AxiosError<ErrorResponse>;
        if (axiosError.response) {
          const errCode = axiosError.response.data.errorCode;
          if (errCode === 403) {
            return closeModal ? (
              <AlertModal
                onCancel={closeAlert}
                onConfirm={closeAlert}
                type={'etc'}
                title={'잠깐'}
                content={'작성자가 아니시군요!'}
                clicked={'닫기'}
              />
            ) : null;
          } else {
            console.log(axiosError.response.data);
          }
        }
        console.log(err);
      });
  };

  const handleChangeEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  useEffect(() => {
    //
  }, [isEditMode]);

  const handleAmend = (value: string) => {
    // if(value.length === 0 ) {
    //   // alert('빈 객체입니다. ');
    //   // setBasicContent(comment.content)
    //   //유효성 검사  + 글자 수 제한
    // }
    setBasicContent(value);
  };

  const handleBlur = () => {
    if (isEditMode) {
      handleChangeEditMode();
      setIsEditMode(false);
      axiosPatch();
    }
  };

  const closeAlert = () => {
    setCloseModal(!closeModal);
  };

  //댓글 삭제 기능 구현
  const handleDelete = () => {
    const deleteComment = async () => {
      await netaxios
        .delete(`/comments/${comments.id}`)
        .then(() => {
          console.log('DELETE 성공');
          setDeleteId(comments.id);
        })
        .catch((err: AxiosError<ErrorResponse>) => {
          const axiosError = err as AxiosError<ErrorResponse>;
          if (axiosError.response) {
            const errCode = axiosError.response.data.errorCode;
            if (errCode === 403) {
              return closeModal ? (
                <AlertModal
                  onCancel={closeAlert}
                  onConfirm={closeAlert}
                  type={'etc'}
                  title={'잠깐'}
                  content={'작성자가 아니시군요!'}
                  clicked={'닫기'}
                />
              ) : null;
            } else {
              console.log(axiosError.response.data);
            }
          }
          console.log(err);
        });
    };
    deleteComment();
  };

  return (
    <CommentContainer gap={10}>
      <CommentWrapper>
        <MemberProfile
          type="comment"
          member={{ id: comments.id, name: username, imageUrl: 'https://picsum.photos/200/300' }}
        />
        <FlexWrapper>
          <ReviseBtn onClick={handleChangeEditMode} color={'black'} />
          <RemoveBtn onClick={handleDelete} color={'black'} />
        </FlexWrapper>
      </CommentWrapper>
      <CommentWrapper>
        <BodyText>
          {isEditMode ? (
            <input
              className="border border-green-500"
              value={basicContent}
              ref={inputEl}
              onBlur={handleBlur}
              onChange={(element: any) => handleAmend(element.target.value)}
            />
          ) : (
            <span>{basicContent}</span>
          )}
        </BodyText>
        <SmallText color="gray">{convertDate}</SmallText>
      </CommentWrapper>
    </CommentContainer>
  );
}

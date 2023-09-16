import { Dispatch, SetStateAction, useMemo, useRef, useState } from 'react';
import netaxios from '@/utils/axiosIntercept';
import { AxiosError } from 'axios';
import useUserImageHandler from '@/hooks/useUserImageHandler';

import { CommentProps } from '@/types';

import { CommentContainer, CommentWrapper } from '@/commons/molecules/comment/Comment.styled';
import ReviseBtn from '@/commons/atoms/buttons/revise-remove/ReviseBtn';
import RemoveBtn from '@/commons/atoms/buttons/revise-remove/RemoveBtn';
import { FlexWrapper } from '@/commons/styles/Containers.styled';
import { BodyText, SmallText } from '@/commons/atoms/text/Typography';
import MemberProfile from '@/commons/molecules/profile/MemberProfile';
import AlertModal from '@/components/modal/AlertModal';

interface CommuCommentProps {
  username: string;
  content: string;
  date: string;
  comments: CommentProps;
  setAmendComment: Dispatch<SetStateAction<CommentProps[]>>;
  boardId: string | undefined;
}

interface ErrorResponse {
  errorCode: number;
  errorCodeInfo: string;
  errorMessage: string;
  Action: string;
}

export default function Comment({ username, content, date, comments, boardId }: CommuCommentProps) {
  const inputEl = useRef(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [basicContent, setBasicContent] = useState(content);
  const [showModal, setShowModal] = useState(false);
  const [userProfileImage, _] = useState<string | JSX.Element>(useUserImageHandler(comments.memberInfo.memberId));

  const newDate = useMemo(() => {
    const dateObject = new Date(date);
    return dateObject.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).replace(/\//g, '.');
  }, [date]);

  
  //댓글 수정
  const amendCommentAxios = async () => {
    const data = {
      boardId: boardId,
      content: basicContent,
    };

    await netaxios
      .patch(`/comments/edit/${comments.id}`, data)
      .then((res) => {
        console.log('PATCH 성공');
        console.log(res);
      })
      .catch((err: AxiosError<ErrorResponse>) => {
        const axiosError = err as AxiosError<ErrorResponse>;
        if (axiosError.response) {
          const errCode = axiosError.response.data.errorCode;
          if (errCode === 403) {
            setShowModal(true);
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


  const handleAmend = (value: string) => {
    setBasicContent(value);
  };

  const handleBlur = () => {
    if (isEditMode) {
      handleChangeEditMode();
      setIsEditMode(false);
      amendCommentAxios();
    }
  };


  //댓글 삭제 기능 구현
  const handleDelete = () => {
    const deleteComment = async () => {
      await netaxios
        .delete(`/comments/${comments.id}`)
        .then(() => {
          console.log('DELETE 성공');
          // setDeleteId(comments.id);
        })
        .catch((err: AxiosError<ErrorResponse>) => {
          const axiosError = err as AxiosError<ErrorResponse>;
          if (axiosError.response) {
            const errCode = axiosError.response.data.errorCode;
            if (errCode === 403) {
              setShowModal(true);
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
          member={{ id: comments.id, name: username, imageUrl: userProfileImage}}
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
        <SmallText color="gray">{newDate}</SmallText>
      </CommentWrapper>
      {showModal && (
        <AlertModal
        onCancel={() => setShowModal(false)}
          onConfirm={() => setShowModal(false)}
          type={'etc'}
          title={'잠깐'}
          content={'작성자가 아니시군요!'}
          clicked={'닫기'}
        />
      )}
    </CommentContainer>
  );
}

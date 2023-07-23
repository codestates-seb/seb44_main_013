/* 2023-07-05 게시물 댓글(낱개) 컴포넌트 UI - 김다함 */
import { useEffect, useRef, useState } from 'react';

import { call } from '@/utils/apiService';

import { CommentProps } from '@/types';

import { CommentContainer, CommentWrapper } from '@/commons/molecules/comment/Comment.styled';
import ReviseBtn from '@/commons/atoms/buttons/revise-remove/ReviseBtn';
import RemoveBtn from '@/commons/atoms/buttons/revise-remove/RemoveBtn';
import { FlexWrapper } from '@/commons/styles/Containers.styled';
import { BodyText, SmallText } from '@/commons/atoms/text/Typography';
import MemberProfile from '@/commons/molecules/profile/MemberProfile';

interface CommuCommentProps {
  username: string;
  content: string;
  date: string;
  comments: CommentProps;
  setDeleteId: any;
  setAmendComment?: any;
}

export default function Comment({ username, content, date, comments, setDeleteId }: CommuCommentProps) {
  //setAmendComment

  const inputEl = useRef(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [basicContent, setBasicContent] = useState(content);

  const newDate = new Date(date);
  const convertDate = newDate
    .toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\//g, '.');

  const axiosPatch = async () => {
    try {
      console.log('PATCH 성공');
      const data = {
        comments_id: comments.id,
        content: basicContent,
        // member_id: comments.memberId,
        name: username,
        createdAt: '2023-06-23T17:34:51.3395597',
        modifiedAt: '2023-06-23T17:34:51.3395597',
        status: 'POST_ACTIVE',
      };
      await call(`/comments/${comments.id}`, 'PATCH', data);
      // setAmendComment(data);comments는 [{}.{}]인데 이걸 대체하려 하니 안돼지..
    } catch (err) {
      console.log('PATCH 실패 ' + err);
    }
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

  //댓글 삭제 기능 구현
  const handleDelete = () => {
    const deleteComment = async () => {
      try {
        console.log('DELETE 성공');
        setDeleteId(comments.id);
        return call(`/comments/${comments.id}`, 'DELETE', { comments_id: comments.id });
      } catch (err) {
        console.log('DELETE 실패' + err);
      }
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

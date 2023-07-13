/* 2023-07-05 게시물 댓글(낱개) 컴포넌트 - 김다함 */
import { FlexColumnContainer, FlexWrapper } from '../styles/Containers.styled';
import UserProfile from './UserProfile';
import ReviseBtn from '../atoms/buttons/revise-remove/ReviseBtn';
import RemoveBtn from '../atoms/buttons/revise-remove/RemoveBtn';
import { BodyText, SmallText } from '../atoms/Typography';
import { CommentProps } from '@/types';

import { call } from '@/utils/ApiService';
import { useEffect, useRef, useState } from 'react';

interface CommuCommentProps {
  username: string;
  content: string;
  date: string;
  comments: CommentProps;
  setDeleteId: any;
  setAmendComment?: any;
}

export default function Comment(
  { username, content, date, comments, setDeleteId }: CommuCommentProps) { //setAmendComment

  const inputEl = useRef(null); 
  const [ isEditMode, setIsEditMode ] = useState(false);
  const [ basicContent, setBasicContent ] = useState(content);

  const newDate = new Date(date);
  const convertDate = newDate.toLocaleDateString('en-US',{
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).replace(/\//g, '.');


  const axiosPatch = async () => {
    try{
      console.log('PATCH 성공' );
      const data = {
        comments_id: comments.comments_id,
        content: basicContent,
        member_id: comments.member_id,
        name: username,
        createdAt: "2023-06-23T17:34:51.3395597",
        modifiedAt: "2023-06-23T17:34:51.3395597",
        status: "POST_ACTIVE"
      }
      await call(`/comments/${comments.comments_id}`, 'PATCH', data )
      // setAmendComment(data);comments는 [{}.{}]인데 이걸 대체하려 하니 안돼지..

    }catch(err){
      console.log('PATCH 실패 ' + err);
    }

  };

  const handleChangeEditMode = () => {
    // setIsEditMode((previousIsEditMode) => !previousIsEditMode);
    //더블 클릭의 경우를 생각해주어야 합니다. 
    // callback으로 -> react에서 맨 마지막 껄로 치환
    setIsEditMode(!isEditMode)
  };

  // const editComment = () =>  {
  //   handleClick();
  // };


  useEffect(() => {
    //
  }, [isEditMode]);


  const handleAmend = ( value:string ) => {
    // if(value.length === 0 ) {
    //   // alert('빈 객체입니다. ');
    //   // setBasicContent(comment.content)
    //   //유효성 검사  + 글자 수 제한 
    // }
    setBasicContent(value);
  };



  const handleBlur = () => {
    if(isEditMode){
      handleChangeEditMode();
      setIsEditMode(false);
      axiosPatch();
    }
  }

  //댓글 삭제 기능 구현
  const handleDelete = () => {
    const deleteComment = async () => {
      try{
        console.log('DELETE 성공');
        setDeleteId(comments.comments_id)
        return call(`/comments/${comments.comments_id}`, 'DELETE', {comments_id: comments.comments_id})
      } catch (err) {
        console.log('DELETE 실패' + err);
      }
    };
    deleteComment();
  }


  return (
    <FlexColumnContainer gap={10} className='w-full border-b-[1px] pb-1.5 pt-3'>
      <FlexWrapper gap={0} className='w-full justify-between'>
        <UserProfile type='comment' user={{ member_id: comments.member_id, name: username, picture: 'https://picsum.photos/200/300' }} />
        <FlexWrapper gap={0}>
          <ReviseBtn onClick={handleChangeEditMode} color={'black'} />
          <RemoveBtn onClick={handleDelete} color={'black'} />
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper gap={0} className='w-full justify-between'>
        <BodyText>
          {isEditMode ?
            (
              <input
                value = {basicContent}
                ref = {inputEl}
                onBlur = {handleBlur}
                onChange={(element:any) => handleAmend(element.target.value)}  
              />
            )
            :
            (
              <span>
                  {basicContent}
              </span>
            )
          }
        </BodyText>
        <SmallText color='gray'>{convertDate}</SmallText>
      </FlexWrapper>
    </FlexColumnContainer>
  )
}
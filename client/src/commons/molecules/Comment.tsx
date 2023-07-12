/* 2023-07-05 게시물 댓글(낱개) 컴포넌트 - 김다함 */
import { FlexColumnContainer, FlexWrapper } from '../styles/Containers.styled';
import UserProfile from './UserProfile';
import ReviseBtn from '../atoms/buttons/revise-remove/ReviseBtn';
import RemoveBtn from '../atoms/buttons/revise-remove/RemoveBtn';
import { BodyText, SmallText } from '../atoms/Typography';
import { CommentProps } from '@/types';

import { useParams } from 'react-router-dom';
import { call } from '@/utils/ApiService';
import { useEffect, useRef, useState } from 'react';

interface CommuCommentProps {
  username: string;
  content: string;
  date: string;
  comment: CommentProps;
  amendComment: any;
  setAmendComment: any;
}

export default function Comment({ username, content, date, comment , amendComment, setAmendComment}: CommuCommentProps) {
  const { board_id}  = useParams();

  const inputEl = useRef(null);
  const [ isEditMode, setIsEditMode ] = useState(false);
  const [ basicContent, setBasicContent ] = useState(content);

  const nDate = new Date(date);
  const convertDate = nDate.toLocaleDateString('en-US',{
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).replace(/\//g, '.');

  const editComment = () => {
    const axiosPatch = async () => {
      try{
        console.log('PATCH 성공' );
        const data = {
          board_id: board_id,
          comments_id: comment.comments_id,
          content: basicContent,
          member_id: comment.member_id,
          name: username,
          createdAt: "2023-06-23T17:34:51.3395597",
          modifiedAt: "2023-06-23T17:34:51.3395597"
        }
        setAmendComment(data);
        return call(`/comments/${comment.comments_id}`, 'PATCH', data)

      }catch(err){
        console.log('PATCH 실패 ' + err);
      }
    };

    axiosPatch();
    setIsEditMode(!isEditMode);
    handleClick();
  };

  useEffect(() => {
  // console.log('re-render')
  // console.log(comment)
  }, [isEditMode]);


  const handleAmend = ( value:string ) => {
    if(value.length === 0 ) {
      // alert('빈 객체입니다. ');
      // setBasicContent(comment.content)
      //유효성 검사  + 글자 수 제한 
    }else {
      setBasicContent(value);
    }
  };

  const handleClick = () => {
    setIsEditMode(!isEditMode);
  };

  const handleBlur = () => {
    setIsEditMode(false);
  }


  return (
    <FlexColumnContainer gap={10} className='w-full border-b-[1px] pb-1.5 pt-3'>
      <FlexWrapper gap={0} className='w-full justify-between'>
        <UserProfile type='comment' user={{ member_id: comment.member_id, name: username, picture: 'https://picsum.photos/200/300' }} />
        <FlexWrapper gap={0}>
          <ReviseBtn onClick={editComment} color={'black'} />
          <RemoveBtn color={'black'} />
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper gap={0} className='w-full justify-between'>
        <BodyText>
          { isEditMode ? 
            (
              <input
                value = {basicContent}
                ref = {inputEl}
                onBlur = {handleBlur}
                onChange={(e:any) => handleAmend(e.target.value)}  
              />
            ) 
            : 
            (
              <span
                onClick={handleClick}>
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
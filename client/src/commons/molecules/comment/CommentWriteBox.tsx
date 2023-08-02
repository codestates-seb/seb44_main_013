/* 2023-07-05 게시물 댓글 작성란 컴포넌트 UI - 김다함 */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

import SaveBtn from '../../atoms/buttons/writing/SaveBtn';
import MemberProfile from '../profile/MemberProfile';
import { CommentContainer, CommentWrapper, CommentInput } from './Comment.styled';
import netaxios from '@/utils/axiosIntercept';
// import circleNoImg from '@/assets/circleNoImg.png';

export default function CommentWriteBox({ saveComment, handleComment, isInput }: any) {
  const [userName, setUserName] = useState('');
  const [_, setUserImg] = useState('');
  const memberInfo = useSelector((state: RootState) => state.memberSlice);
  const accessToken = window.localStorage.getItem('accessToken');
  // const tempPic = userImg === '' ? circleNoImg : userImg;
  console.log(memberInfo);

  //유저 정보 GET
  useEffect(() => {
    const getUserInfo = async () => {
      await netaxios
        .get(`/members/${memberInfo.memberId}`, {
          headers: {
            authorization: accessToken,
          },
        })
        .then((res) => {
          setUserName(res.data.name);
          setUserImg('');
        });
    };
    getUserInfo();
  }, []);

  return (
    <CommentContainer gap={5}>
      <CommentWrapper gap={0}>
        <MemberProfile
          type="comment"
          member={{ id: Number(memberInfo), name: userName, imageUrl: 'https://picsum.photos/233' }}
        />
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

//댓글 등록
//수정

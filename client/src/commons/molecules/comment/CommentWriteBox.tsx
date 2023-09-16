import { useEffect, useState } from 'react';
import netaxios from '@/utils/axiosIntercept';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import useUserImageHandler from '@/hooks/useUserImageHandler';


import SaveBtn from '../../atoms/buttons/writing/SaveBtn';
import MemberProfile from '../profile/MemberProfile';
import { CommentContainer, CommentWrapper, CommentInput } from './Comment.styled';

interface CommentWriteBoxProps {
  saveComment: () => void;
  handleComment: (value: string) => void;
  isInput: string;
}

export default function CommentWriteBox({ saveComment, handleComment, isInput }: CommentWriteBoxProps) {
  const [userName, setUserName] = useState('');
  const [_, setUserImg] = useState('');
  const memberInfo = useSelector((state: RootState) => state.memberSlice);
  const accessToken = useSelector((state: RootState)=> state.loginSlice.accesstoken);
  const [userProfileImage, __] = useState<string | JSX.Element>(useUserImageHandler(memberInfo.memberId));

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
          member={{ id: Number(memberInfo), name: userName, imageUrl: userProfileImage }}
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

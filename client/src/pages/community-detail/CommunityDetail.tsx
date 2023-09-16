import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { call } from '@/utils/apiService';
import useUserImageHandler from '@/hooks/useUserImageHandler';

import { CommuProps } from '@/types';

import MemberProfile from '@/commons/molecules/profile/MemberProfile';
import DetailContents from '@/components/detailContents/DetailContents';
import Loading from '../../components/loading/Loading';
import CommentBox from '@/components/comment/CommentBox';
import DeleteModal from '@/components/modal/DeleteModal';
import { CmDContainer, CommentContainer, MainContainer, PageWrapper } from './CommunityDetail.styled';

export default function CommunityDetail( handleClick: () => void ) {
  const [memberData, setMemberData] = useState<CommuProps | null>(null);
  const [clickDeletePost, setClickDeletePost] = useState(false);
  const [userProfileImage, __] = useState<string | JSX.Element>(useUserImageHandler(memberData?.memberId || 0));
  const [render, setRender] = useState(true);
  const navigate = useNavigate();
  const { id: boardId } = useParams();

  const handleRender = () => {
    setRender(!render);
  };

  useEffect(() => {
    const findBoardsById = (id: string) => call(`/boards/${id}`, 'GET', null);
    const getMember = async () => {
      return findBoardsById(boardId as string)
        .then((res) => {
          setMemberData(res);
        })
        .catch((err) => console.log('커뮤니티 상세 페이지 예시' + err));
    };

    getMember();
  }, [boardId, render]);

  if (!memberData)
    return (
      <PageWrapper>
        <Loading />
      </PageWrapper>
    );

  const writerId = memberData.memberInfo.memberId;
  const viewerId = Number(localStorage.getItem('memberId'));
  // console.log('원인 체크중'+ useSelector((state: RootState) => state.memberSlice.memberId));
  //const viewerId = useSelector((state: RootState) => state.memberSlice.memberId);

  // 게시글 삭제 버튼 클릭 시 - 효정(07.14)
  // DELTE 요청 추가 - 혜진(07.19)
  const handleDeleteModal = async () => {
    setClickDeletePost(!clickDeletePost);
    //삭제하기 버튼을 클릭해야지만 작동되도록 if문 설정
    if (clickDeletePost) {
      call(`/boards/${boardId}`, 'DELTE', null).then(() => console.log('게시글이 삭제 되었습니다. '));
      navigate('/boards');
    }
  };

  return (
    <PageWrapper>
      <MemberProfile
        type={'blackboard'}
        member={{
          id: memberData.memberId,
          name: memberData.memberInfo.name,
          imageUrl: userProfileImage,
        }}
      />
      <MainContainer onClick={handleClick}>
        <CmDContainer>
          <DetailContents
            data={memberData}
            handleDeleteModal={handleDeleteModal}
            id={boardId}
            writerId={writerId}
            viewerId={viewerId}
          />
        </CmDContainer>
        <CommentContainer>
          <CommentBox comments={memberData.comments} handleRender={handleRender} />
        </CommentContainer>
      </MainContainer>
      {clickDeletePost ? <DeleteModal onConfirm={handleDeleteModal} onCancel={handleDeleteModal} /> : ''}
    </PageWrapper>
  );
}

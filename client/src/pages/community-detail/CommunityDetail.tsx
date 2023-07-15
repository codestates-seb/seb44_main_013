import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { call } from '@/utils/apiService';

import MemberProfile from '@/commons/molecules/MemberProfile';
import DetailContents from '@/components/detailContents/DetailContents';
import Loading from '../../components/loading/Loading'; // components/loding 이동 (page x) 수정 완 
import CommentBox from '@/components/CommentBox';
import DeleteModal from '@/components/deleteModal/DeleteModal';

import { CommuProps } from '@/types';

import {
  CmDContainer,
  CommentContainer,
  MainContainer,
  PageWrapper,
} from './CommunityDetail.styled';

export default function CommunityDetail({ handleClick }: any) {
  const [memberData, setMemberData] = useState<CommuProps | null>(null);
  const [clickDeletePost, setClickDeletePost] = useState(false);
  const { id: boardId } = useParams();

  useEffect(() => {
    const findBoardsById = (id: string) => call(`/boards/${id}`, 'GET', null);
    const getMember = async () => { //axiosMember(xxx) 이름에서부터 유추 (한글 직독직 -> 영어)
      return findBoardsById(boardId as string)
        .then((res) => {
          setMemberData(res[0]);
        })
        .catch((err) => console.log('커뮤니티 상세 페이지 예시' + err));
    };

    getMember();
  }, [boardId]);

  if (!memberData) return <PageWrapper><Loading /></PageWrapper>

  // 게시글 삭제 버튼 클릭 시 - 효정(07.14)

  const handleDeleteModal = () => {
    setClickDeletePost(!clickDeletePost);
  }

  return (
    <PageWrapper >
      <MemberProfile type={'blackboard'}
        member={{
          memberId: memberData.memberId,
          name: memberData.name,
          picture: 'https://picsum.photos/200/300'
        }}
      />
      <MainContainer onClick={handleClick}>
        <CmDContainer>
          <DetailContents data={memberData} handleDeleteModal={handleDeleteModal} />
        </CmDContainer>
        <CommentContainer>
          <CommentBox comments={memberData.comments} />
        </CommentContainer>
      </MainContainer>
      {clickDeletePost ? <DeleteModal handleDeleteModal={handleDeleteModal} /> : ''}
    </PageWrapper>
  );
}

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { call } from '@/utils/apiService';

import MemberProfile from '@/commons/molecules/profile/MemberProfile';
import DetailContents from '@/components/detailContents/DetailContents';
import Loading from '../../components/loading/Loading'; // components/loding 이동 (page x) 수정 완
import CommentBox from '@/components/comment/CommentBox';
import DeleteModal from '@/components/modal/DeleteModal';

import { CommuProps } from '@/types';

import { CmDContainer, CommentContainer, MainContainer, PageWrapper } from './CommunityDetail.styled';

export default function CommunityDetail({ handleClick }: any) {
  const [memberData, setMemberData] = useState<CommuProps | null>(null);
  const [clickDeletePost, setClickDeletePost] = useState(false);
  const navigate = useNavigate();
  const { id: boardId } = useParams();
  console.log(boardId);

  useEffect(() => {
    const findBoardsById = (id: string) => call(`/boards/${id}`, 'GET', null);
    const getMember = async () => {
      //axiosMember(xxx) 이름에서부터 유추 (한글 직독직 -> 영어)
      return findBoardsById(boardId as string)
        .then((res) => {
          setMemberData(res[0]);
          console.log(res);
        })
        .catch((err) => console.log('커뮤니티 상세 페이지 예시' + err));
    };

    getMember();
    console.log(memberData);
  }, [boardId]);

  if (!memberData)
    return (
      <PageWrapper>
        <Loading />
      </PageWrapper>
    );

  // 게시글 삭제 버튼 클릭 시 - 효정(07.14)
  // DELTE 요청 추가 - 혜진(07.19)

  const handleDeleteModal = async () => {
    setClickDeletePost(!clickDeletePost);
    //삭제하기 버튼을 클릭해야지만 작동되도록 if문 설정
    if (clickDeletePost) {
      call(`/api/boards/${boardId}`, 'DELTE', null).then(() => console.log('게시글이 삭제 되었습니다. '));
      navigate('/'); // 임시로 메인으로 돌아가게 설정했습니다. 사유 : 게시글 전체 목록 조회 불가
      //현재 백 쪽에서 DELTE 기능 수행 안됨
    }
  };

  return (
    <PageWrapper>
      <MemberProfile
        type={'blackboard'}
        member={{
          id: memberData.memberId,
          name: memberData.name,
          imageUrl: 'https://picsum.photos/200/300',
        }}
      />
      <MainContainer onClick={handleClick}>
        <CmDContainer>
          <DetailContents data={memberData} handleDeleteModal={handleDeleteModal} id={boardId} />
        </CmDContainer>
        <CommentContainer>
          <CommentBox comments={memberData.comments} />
        </CommentContainer>
      </MainContainer>
      {clickDeletePost ? <DeleteModal onConfirm={handleDeleteModal} onCancel={handleDeleteModal} /> : ''}
    </PageWrapper>
  );
}

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { call } from '@/utils/ApiService';

import UserProfile from '@/commons/molecules/UserProfile';
import DetailContents from '@/components/detailContents/DetailContents';
import Loading from '../../components/loading/Loading'; // components/loding 이동 (page x) 수정 완 
import CommentBox from '@/components/CommentBox';

import { CommuProps } from '@/types';

import {
  CmDContainer,
  CommentContainer,
  MainContainer,
  PageWrapper,
} from './CommunityDetail.styled';

export default function CommunityDetail( {handleClick}:any ) {
  const [ memberData, setMemberData ] = useState<CommuProps | null>(null); 
  const { board_id:boardId } = useParams(); //_ 상수일 때만 사용 + 전체 대문자 -> 별칭 : boardId로 쓰겠다.

  useEffect(()=> {
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
  // earlyreturn pattern : memberData가 없는 경우 37까지만 실행하고 끝 -> 성능 상승 
  if(!memberData) return <PageWrapper><Loading/></PageWrapper>
 // eslint prettier 적용하기 : 과제 (0712)
  return (
    <PageWrapper >
      {/* !== 처럼 바로 이해안되는 거는 노노  -> 삼항연산자 삭제 */}
      {/* member_id change */}
        <UserProfile type={'blackboard'} 
          user={{ member_id: memberData.member_id, 
                  name: memberData.name, 
                  picture: 'https://picsum.photos/200/300' 
                }} 
        />
        <MainContainer onClick={handleClick}>
          <CmDContainer>
            <DetailContents data={memberData}/>
          </CmDContainer>
          <CommentContainer>
            <CommentBox comments={memberData.comments}/>
          </CommentContainer>
        </MainContainer>
    </PageWrapper>
  );
}
